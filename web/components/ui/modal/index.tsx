import React, { ReactElement, useEffect, useRef, memo } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/Io';

interface IProps {
    content: ReactElement | string;
    isOnClose?: boolean;
    isOpen?: boolean;
    handleClose?: () => void;
    mrTop?: number;
    isPadding?: boolean;
    className?: string;
    layer?: 1 | 2 | 3 | 4;
    disableClickOverlay?: boolean;
}

const Modal: React.FC<IProps> = ({
    content,
    isOpen = false,
    handleClose,
    isOnClose,
    mrTop = 200,
    isPadding = true,
    className = '',
    disableClickOverlay = false,
    layer=1
}) => {
    const wrap = useRef<HTMLDivElement>(null);
    const close = useRef<HTMLDivElement>(null);
    const mouse = useRef({isKeyDown:false,isDrag:false});

    useEffect(() => {
        // window.addEventListener('click', handleClick, true);
        // function handleClick(e: any) {
        //     if (
        //         close.current?.contains(e.target) ||
        //         !wrap.current?.contains(e.target)
        //     )
        //         handleClose && handleClose();
        // }
        Array.from(document.getElementsByClassName('overflow-auto')).forEach(
            (e) => {
                if (isOpen) e.setAttribute('style', 'overflow: hidden;');
                else e.setAttribute('style', 'overflow: auto;');
            },
        );
        // return () => {
        //     window.removeEventListener('click', handleClick, true);
        // };
    }, [isOpen]);

    const zIndex = {
        1:50,
        2:51,
        3:52,
        4:53,
        5:54
    }

    return (
        <>
            {isOpen &&
                createPortal(
                    <div
                        onMouseDown={()=>{
                            mouse.current.isKeyDown=true
                        }}
                        onMouseOver={()=>{
                            if(mouse.current.isKeyDown) mouse.current.isDrag=true;
                        }}
                        onClick={(e:any)=>{
                            if(!disableClickOverlay && e.target.getAttribute("aria-controls") == 'close' && !mouse.current.isDrag){
                                handleClose && handleClose();
                                e.stopPropagation();
                            }
                            mouse.current={isDrag:false, isKeyDown:false};
                        }}
                        style={{zIndex:zIndex[layer]}}
                        aria-controls='close'
                        className={`box-border animate-overlay absolute top-0 left-0 bottom-0 right-0 w-full h-screen overflow-hidden bg-color-modal-overlay z-50 shadow-theme-text-primary flex justify-center`}
                    >
                        <div
                            style={{ top: mrTop }}
                            ref={wrap}
                            className={`absolute scale-100 rounded bg-theme-primary ${
                                isPadding ? 'px-6 py-4' : ''
                            }  animate-modalContentPopup transition-all box-border ${className}`}
                        >
                            {isOnClose && (
                                <div
                                    className="absolute right-[5px] top-[5px] cursor-pointer"
                                    ref={close}
                                    onClick={handleClose}
                                >
                                    <IoMdClose />
                                </div>
                            )}
                            <div>{content}</div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
};

export default memo(Modal);
