import React, { useEffect, useRef, useState } from "react";

export interface IPosition {
    left: number | string;
    top: number | string;
}

export interface IPositionResult extends IPosition{
    position: 'absolute'
}

export type TPlacement = 'left' | 'center' | 'right';

type TRef = React.RefObject<HTMLDivElement>


const usePopUp = (refPopover:TRef, refPopup:TRef, isHover:boolean=false, isChildRen:boolean=false, placement:TPlacement='left')=>{
    const [open, setOpen] = useState<Boolean>(false);
    const [scrollTop, setScrollTop] = useState(0);
    const timeoutId = useRef<any>(0);
    const mouse = useRef({ isKeyDown: false, isDrag: false });
    const [position, setPosition] = useState<IPosition>({
        left: 0,
        top: 0,
    });

    function getPosiTion(wre: HTMLDivElement, poe: HTMLDivElement): IPosition {
        const wr: DOMRect | undefined = wre?.getBoundingClientRect();
        const spaceWrCenter = wre.offsetWidth / 2;
        const spacePopCenter = poe.offsetWidth / 2;

        const margin = wre.offsetWidth - poe.offsetWidth;
        const marginC = spaceWrCenter - spacePopCenter;

        const position = {
            center: isChildRen ? marginC : wr.left + marginC,
            left: isChildRen ? 0 : wr.left,
            right: isChildRen ? margin : wr.left + margin,
        };

        return {
            left: position[placement],
            top: isChildRen ? '100%' : wr.top + wr.height,
        };
    }

    function handleMouseover() {
        clearTimeout(timeoutId.current);
        setOpen(true);
    }

    function handleMouseleave() {
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
            setOpen(false);
        }, 500);
    }

    useEffect(() => {
        if (refPopover.current && refPopup.current)
            setPosition(getPosiTion(refPopover.current, refPopup.current));
    }, [refPopover.current, refPopup.current, scrollTop, open]);

    useEffect(() => {
        function handleClick(e: any) {
            if (refPopover.current?.contains(e.target)) {
                setOpen((state) => !state);
            } else if (
                !refPopup.current?.contains(e.target) &&
                open == false &&
                !mouse.current.isDrag
            ) {
                setOpen(() => false);
            }
            mouse.current = { isDrag: false, isKeyDown: false };
        }

        function handleChangeWhenScroll(e: any) {
            setScrollTop(e.target.scrollTop);
        }

        if (isHover) {
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
        } else {
            window.addEventListener('click', handleClick, true);
        }

        window.addEventListener('scroll', handleChangeWhenScroll, true);

        return () => {
            if (isHover) {
                refPopover?.current?.removeEventListener(
                    'mouseover',
                    handleMouseover,
                    true,
                );
                refPopover?.current?.removeEventListener(
                    'mouseleave',
                    handleMouseleave,
                    true,
                );
            } else window.removeEventListener('click', handleClick, true);
            window.removeEventListener('scroll', handleClick, true);
        };
    }, []);

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

    function handleWhenMouseDown(){
        mouse.current.isKeyDown = true;
    }

    function handleWhenMouseOver(){
        if (mouse.current.isKeyDown) mouse.current.isDrag = true;
    }

    const style = {...position,position:'absolute'} as IPositionResult

    return {
        style,
        mouse,
        open,
        setOpen,
        handleWhenMouseDown,
        handleWhenMouseOver,
    }
}

export default usePopUp