'use client';
import usePopUp, { IPosition, TPlacement } from '@/hooks/popUp';
import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
  JSXElementConstructor,
  memo,
} from 'react';
import { createPortal } from 'react-dom';

interface IProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'content'
  > {
  children?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactElement<any, string | JSXElementConstructor<any>>[];
  content: ReactElement;
  icons?: ReactElement;
  contentClassName?: string;
  isChildRen?: boolean;
  className?: string;
  pxContent?: number;
  pyContent?: number;
  placement?: TPlacement;
  wrClassName?: string;
  isHover?: boolean;
}

const Popover: React.FC<IProps> = ({
  children,
  content,
  placement = 'bottomLeft',
  contentClassName = '',
  className = '',
  pxContent = 2,
  pyContent = 1,
  icons,
  isChildRen = false,
  wrClassName = '',
  isHover = false,
  ...rest
}) => {
  const refPopover = useRef<HTMLDivElement>(null);
  const refPopup = useRef<HTMLDivElement>(null);
  const refDisable = useRef<HTMLDivElement>(null);
  const { style, open, handleWhenMouseDown, handleWhenMouseLeave } = usePopUp({
    refPopover,
    refPopup,
    placement,
    isHover,
    isChildRen,
    refDisable,
  });

  function renderPop() {
    return (
      <div
        onMouseDown={handleWhenMouseDown}
        onMouseLeave={handleWhenMouseLeave}
        ref={refPopup}
        style={{ zIndex: 500, ...style }}
        className={`rounded px-${pxContent} py-${pyContent} mt-[5px] shadow-theme-primary bg-theme-primary animate-modalContentPopup z-[100] ${contentClassName}`}
      >
        {content}
      </div>
    );
  }

  return (
    <div className={`relative ${wrClassName}`} {...rest}>
      <div className={className} ref={refPopover}>
        {children}
      </div>
      {open && !isChildRen && createPortal(renderPop(), document.body)}
      {open && isChildRen && renderPop()}
    </div>
  );
};

export default memo(Popover);
