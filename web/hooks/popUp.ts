import React, { useEffect, useRef, useState } from "react";

export interface IPosition {
    left: number | string | undefined;
    top: number | string | undefined;
}

export interface IPositionResult extends IPosition{
    position: 'absolute';
    visibility: 'visible'|'hidden';
}

export type TPlacement = 'left' | 'center' | 'right';

type TRef = React.RefObject<HTMLDivElement>


const usePopUp = (refPopover:TRef, refPopup:TRef, placement:TPlacement='left',isHover:boolean=false, isChildRen:boolean=false,)=>{
    const [open, setOpen] = useState<Boolean>(false);
    const timeoutId = useRef<any>(0);
    const mouse = useRef({ isKeyDown: false, isDrag: false });
    const [position, setPosition] = useState<IPosition>({
        left: undefined,
        top: undefined,
    });

    function getPosiTion(wre: HTMLDivElement, poe: HTMLDivElement): IPosition {
        const wr: DOMRect | undefined = wre?.getBoundingClientRect();
        const spaceWrCenter = wre.offsetWidth / 2;
        const spacePopCenter = poe.offsetWidth / 2;

        const margin = wre.offsetWidth - poe.offsetWidth;
        const marginC = spaceWrCenter - spacePopCenter;

        var screenWidth = window.innerWidth || document.documentElement.clientWidth;
        var screenHeight = window.innerHeight || document.documentElement.clientHeight;

        

        const position = {
            center: isChildRen ? marginC : wr.left + marginC,
            left: isChildRen ? 0 : wr.left,
            right: isChildRen ? margin : wr.left + margin,
        };

        const overOverFlow = (screenHeight - (wr.top + wr.height + poe.offsetHeight)) < 0 ? true : false;

        return {
            left: position[placement],
            top: isChildRen ? '100%' :overOverFlow ? wr.top - poe.offsetHeight: wr.top + wr.height,
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
            handleClosePopUp();
        }, 500);
    }

    function handleClick(e: any) {
        if (
            !refPopup.current?.contains(e.target) &&
           !mouse.current.isDrag
        ) {
            handleClosePopUp()
        }
        mouse.current = { isDrag: false, isKeyDown: false };
    }

    function addEventClick(){
        window.addEventListener('click', handleClick, true);
    }

    function  removeEventClick(){
        window.removeEventListener('click', handleClick, true);
    }

    function addEventMouse(){
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

    function removeEventMouse(){
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
        function handleClikOpenPopUp(){
            setOpen(true);
        }

        if (isHover) addEventMouse();
        else refPopover?.current?.addEventListener('click', handleClikOpenPopUp);

        return () => {
            if (isHover) removeEventMouse();
            else refPopover?.current?.addEventListener('click', handleClikOpenPopUp);
        };
    }, []);

    function handleClosePopUp(){
        // @ts-ignore: Unreachable code error
        if(refPopup.current) refPopup.current.style.animation = 'closePopUp .3s ease-out';
        
        // @ts-ignore: Unreachable code error
        if(refPopup.current) refPopup.current.style.opacity = '0';

        // @ts-ignore: Unreachable code error
        if(refPopup.current) refPopup.current.style.scale ='.8';

        setTimeout(()=>{
           open && setOpen(false);
        },300)
    }

    useEffect(()=>{
        if(open) addEventClick();
        else removeEventClick();
        return ()=>{
            removeEventClick();
        }
    },[open])

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

    function handleWhenMouseLeave(){
        if (mouse.current.isKeyDown) mouse.current.isDrag = true;
    }

    const style:IPositionResult= {...position, position: 'absolute', visibility: (position?.left == undefined || position?.top == undefined) ? 'hidden': 'visible'}

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