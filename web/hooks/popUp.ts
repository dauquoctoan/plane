import React, { useEffect, useRef, useState } from "react";

export interface IPosition {
    left: number | undefined;
    top: number | string | undefined;
    minWidth: number | undefined;
}

export interface IPositionResult extends IPosition {
    position: 'absolute';
    visibility: 'visible' | 'hidden';
    transformOrigin?: string;
}

export type TPlacement = 'bottomCenter' | 'bottomLeft' | 'bottomRight' | 'topCenter' | 'topLeft' | 'topRight' | 'rightCenter' | 'rightTop' | 'rightBottom' | "leftCenter" | "leftTop" | "leftBottom";

type TRef = React.RefObject<HTMLDivElement>

interface IUsePopUp {
    refPopover: TRef;
    refPopup: TRef;
    placement?: TPlacement;
    isHover?: boolean;
    isChildRen?: boolean;
    refDisable?: TRef;
    disableMoveChild?: boolean;
    fitWidth?: boolean;
    space?: number;
}


const usePopUp = ({ refPopover, isChildRen = false, isHover = false, placement = 'bottomLeft', refPopup, refDisable, disableMoveChild = false, fitWidth = true, space }: IUsePopUp) => {
    const [open, setOpen] = useState<Boolean>(false);
    const timeoutId = useRef<any>(0);
    const mouse = useRef({ isKeyDown: false, isDrag: false });

    const [position, setPosition] = useState<IPosition>({
        left: undefined,
        top: 0,
        minWidth: 0
    });

    function getPosiTion(wre: HTMLDivElement, poe: HTMLDivElement): IPosition {
        const wr: DOMRect | undefined = wre?.getBoundingClientRect();
        const po: DOMRect | undefined = poe?.getBoundingClientRect();

        const spaceWrCenter = wre.offsetWidth / 2;
        const spacePopCenter = poe.offsetWidth / 2;

        const spaceWrCenterHeight = wre.offsetHeight / 2;
        const spacePopCenterHeight = poe.offsetHeight / 2;

        const MARGIN = space || 10;

        var screenWidth = window.innerWidth || document.documentElement.clientWidth;
        var screenHeight = window.innerHeight || document.documentElement.clientHeight;

        let left = undefined;
        let top = undefined;

        const mrOverlay = 10

        const margin = wre.offsetWidth - poe.offsetWidth;
        const marginCH = spaceWrCenterHeight - spacePopCenterHeight;
        const marginC = spaceWrCenter - spacePopCenter;

        const ytop = wr.top - poe.offsetHeight;
        const ybottom = wr.top + wr.height;
        const yleft = wr.left;
        const yright = wr.left + wre.offsetWidth - poe.offsetWidth;

        const xright = wr.left + wre.offsetWidth;
        const xleft = wr.left - poe.offsetWidth;
        const xtop = wr.top;
        const xbottom = wr.top + wre.offsetHeight - poe.offsetHeight;

        const isYOverFlowT = wr.top - poe.offsetHeight < mrOverlay ? true : false;
        const isYOverFlowBT = (screenHeight - (wr.top + wr.height + poe.offsetHeight)) < mrOverlay ? true : false;
        const isYOverFlowR = (screenWidth - (wr.left + poe.offsetWidth)) < mrOverlay ? true : false;
        const isYOverFlowL = (wr.left - poe.offsetWidth) < mrOverlay ? true : false;

        const isXOverFlowL = (wr.left - poe.offsetWidth) < mrOverlay ? true : false;
        const isXOverFlowR = (screenWidth - (wr.left + wre.offsetWidth + poe.offsetWidth)) < mrOverlay ? true : false;
        const isXOverFlowBT = (screenHeight - (wr.top + poe.offsetHeight)) < mrOverlay ? true : false;
        const isXOverFlowT = (wr.top - poe.offsetHeight) < mrOverlay ? true : false;

        switch (placement) {
            case "bottomLeft":
                left = isChildRen ? 0 : isYOverFlowR ? yright : yleft;
                top = isChildRen ? '100%' : isYOverFlowBT ? ytop - MARGIN : ybottom + MARGIN;
                break;
            case 'bottomRight':
                left = isChildRen ? margin : isYOverFlowL ? yleft : yright;
                top = isChildRen ? '100%' : isYOverFlowBT ? ytop - MARGIN : ybottom + MARGIN;
                break;
            case "bottomCenter":
                left = isChildRen ? marginC : wr.left + marginC;
                top = isChildRen ? '100%' : isYOverFlowBT ? ytop - MARGIN : ybottom + MARGIN;
                break;
            case 'topCenter':
                left = isChildRen ? marginC : wr.left + marginC;
                top = isChildRen ? '100%' : isYOverFlowT ? ybottom: ytop - MARGIN;
                break;
            case 'topRight':
                left = isChildRen ? margin : isYOverFlowL ? yleft : yright;
                top = isChildRen ? '100%' : isYOverFlowT ? ybottom: ytop - MARGIN;
                break;
            case 'topLeft':
                left = isChildRen ? margin : isYOverFlowR ? yright : yleft;
                top = isChildRen ? '100%' : isYOverFlowT ? ybottom: ytop - MARGIN;
                break;
            case 'leftTop':
                left = isChildRen ? margin : isXOverFlowL ? xright : xleft;
                top = isChildRen ? '100%' : isXOverFlowBT ? xbottom : xtop;
                break;
            case 'leftCenter':
                left = isChildRen ? margin : isXOverFlowL ? xright : xleft;
                top = isChildRen ? '100%' : wre.offsetTop + marginCH;
                break;
            case 'leftBottom':
                left = isChildRen ? margin : isXOverFlowL ? xright : xleft;
                top = isChildRen ? '100%' : isXOverFlowT ? xtop : xbottom;
                break;
            case 'rightTop':
                left = isChildRen ? margin : isXOverFlowR ? xleft : xright;
                top = isChildRen ? '100%' : isXOverFlowBT ? xbottom : xtop;
                break;
            case 'rightCenter':
                left = isChildRen ? margin : isXOverFlowR ? xleft : xright;
                top = isChildRen ? '100%' : wre.offsetTop + marginCH;
                break;
            case 'rightBottom':
                left = isChildRen ? margin : isXOverFlowR ? xleft - MARGIN : xright + MARGIN;
                top = isChildRen ? '100%' : isXOverFlowT ? xtop : xbottom;
                break
        }

        return {
            left: left,
            top: top,
            minWidth: fitWidth ? wre.offsetWidth : undefined
        };
    }

    function handleMouseover() {
        clearTimeout(timeoutId.current);
        setOpen(true);
    }

    function handleMouseleave() {
        if (disableMoveChild) {
            handleClosePopUp();
        } else {
            timeoutId.current = setTimeout(() => {
                refPopup.current?.removeEventListener(
                    'mouseover',
                    handleMouseover,
                    true,
                );
                refPopup.current?.removeEventListener(
                    'mouseleave',
                    handleMouseleave,
                    true,
                );
                handleClosePopUp();
            }, 500);
        }
    }

    function handleClick(e: any) {
        if (
            !refPopup.current?.contains(e.target) &&
            !mouse.current.isDrag && !e?.target?.clear && e.target.tagName != 'svg'
        ) {
            handleClosePopUp()
        }
        mouse.current = { isDrag: false, isKeyDown: false };
    }

    function addEventClick() {
        window.addEventListener('click', handleClick, true);
    }

    function removeEventClick() {
        window.removeEventListener('click', handleClick, true);
    }

    function addEventMouse() {
        refPopover?.current?.addEventListener(
            'mouseover',
            handleMouseover,
            true,
        );
        refPopover?.current?.addEventListener(
            'mouseleave',
            handleMouseleave,
            true,
        );
    }

    function removeEventMouse() {
        refPopover?.current?.addEventListener(
            'mouseover',
            handleMouseover,
            true,
        );
        refPopover?.current?.addEventListener(
            'mouseleave',
            handleMouseleave,
            true,
        );
    }

    useEffect(() => {
        if (refPopover.current && refPopup.current)
            setPosition(getPosiTion(refPopover.current, refPopup.current));
    }, [refPopover.current, refPopup.current, open]);

    useEffect(() => {
        function handleClikOpenPopUp(e: any) {
            if (!refDisable?.current?.contains(e.target)) setOpen(true);
        }

        if (isHover) addEventMouse();
        else refPopover?.current?.addEventListener('click', handleClikOpenPopUp);

        return () => {
            if (isHover) removeEventMouse();
            else refPopover?.current?.addEventListener('click', handleClikOpenPopUp);
        };
    }, []);

    function handleClosePopUp() {
        if (isHover) {
            setOpen(false)
        } else {
            // @ts-ignore: Unreachable code error
            if (refPopup.current) refPopup.current.style.animation = 'closePopUp .3s ease-out';

            // @ts-ignore: Unreachable code error
            if (refPopup.current) refPopup.current.style.opacity = '0';

            // @ts-ignore: Unreachable code error
            if (refPopup.current) refPopup.current.style.scale = '.8';

            setTimeout(() => {
                open && setOpen(false);
            }, 300)
        }
    }

    useEffect(() => {
        if (open) addEventClick();
        else removeEventClick();
        return () => {
            removeEventClick();
        }
    }, [open])

    useEffect(() => {
        if (isHover) {
            refPopup.current &&
                refPopup.current.addEventListener(
                    'mouseover',
                    handleMouseover,
                    true,
                );
            refPopup.current &&
                refPopup.current.addEventListener(
                    'mouseleave',
                    handleMouseleave,
                    true,
                );
        }
    }, [refPopup.current]);

    function handleWhenMouseDown() {
        mouse.current.isKeyDown = true;
    }

    function handleWhenMouseLeave() {
        if (mouse.current.isKeyDown) mouse.current.isDrag = true;
    }

    const style: IPositionResult = { ...position, position: 'absolute', transformOrigin: `top ${placement}`, visibility: (position?.left == undefined || position?.top == undefined) ? 'hidden' : 'visible' }

    return {
        style,
        mouse,
        open,
        setOpen,
        handleClose: handleClosePopUp,
        handleWhenMouseDown,
        handleWhenMouseLeave,
    }
}

export default usePopUp