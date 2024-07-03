import React, { ReactElement, useEffect, useRef, memo, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';

export interface IDrawer {
  position?: 'top' | 'left' | 'right' | 'bottom';
  closeModel: () => void;
  open: boolean;
}

interface IProps {
  content: ReactElement | string;
  isOnClose?: boolean;
  isOpen?: boolean;
  handleClose?: () => void;
  position?: 'top' | 'left' | 'right' | 'bottom';
  isPadding?: boolean;
  className?: string;
  layer?: 1 | 2 | 3 | 4;
  disableClickOverlay?: boolean;
}

const Drawer: React.FC<IProps> = ({
  content,
  isOpen = false,
  handleClose,
  position = 'right',
  className = '',
  disableClickOverlay = false,
  layer = 1,
}) => {
  const wrap = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const mouse = useRef({ isKeyDown: false, isDrag: false });

  const styles = {
    top: 'top-0 w-[100vw] border-b',
    left: 'left-0 h-[100vh] border-r',
    right: 'right-0 h-[100vh] border-l',
    bottom: 'bottom-0 w-[100vw] border-t',
  };

  const boxShadowColor = {
    top: 'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px, rgba(16, 24, 40, 0.12) 0px 6px 12px 0px, rgba(16, 24, 40, 0.12) 0px 1px 16px 0px',
    left: 'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px, rgba(16, 24, 40, 0.12) 0px 6px 12px 0px, rgba(16, 24, 40, 0.12) 0px 1px 16px 0px',
    right:
      'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px, rgba(16, 24, 40, 0.12) 0px 6px 12px 0px, rgba(16, 24, 40, 0.12) 0px 1px 16px 0px',
    bottom:
      'rgba(0, 0, 0, 0.12) 0px 4px 8px 0px, rgba(16, 24, 40, 0.12) 0px 6px 12px 0px, rgba(16, 24, 40, 0.12) 0px 1px 16px 0px',
  };

  useEffect(() => {
    Array.from(document.getElementsByClassName('overflow-auto')).forEach(e => {
      if (isOpen) e.setAttribute('style', 'overflow: hidden;');
      else e.setAttribute('style', 'overflow: auto;');
    });
  }, [isOpen]);

  const zIndex = {
    1: 50,
    2: 51,
    3: 52,
    4: 53,
    5: 54,
  };

  function handleClosePopUp() {
    if (false) return;
    //@ts-ignore: Unreachable code error
    if (wrap.current) wrap.current.style.width = 0;

    setTimeout(() => {
      handleClose && handleClose();
    }, 300);
  }

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            ref={overlay}
            onMouseDown={() => {
              mouse.current.isKeyDown = true;
            }}
            onMouseOver={() => {
              if (mouse.current.isKeyDown) mouse.current.isDrag = true;
            }}
            onClick={(e: any) => {
              if (
                !disableClickOverlay &&
                e.target.getAttribute('aria-controls') == 'close' &&
                !mouse.current.isDrag
              ) {
                handleClosePopUp();
                e.stopPropagation();
              }
              mouse.current = { isDrag: false, isKeyDown: false };
            }}
            style={{ zIndex: zIndex[layer] }}
            aria-controls="close"
            className={`box-border absolute top-0 left-0 bottom-0 right-0 w-full h-screen overflow-hidden z-50 shadow-theme-text-primary flex justify-center transition-all`}
          >
            <div
              style={{ boxShadow: boxShadowColor[position] }}
              ref={wrap}
              className={`absolute ${styles[position]} bg-theme-primary transition-all duration-[.8] ease-out box-border ${className}`}
            >
              {content}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default memo(Drawer);
