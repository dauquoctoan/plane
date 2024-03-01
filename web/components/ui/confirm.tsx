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
import Button from './button';

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
    content?: ReactElement;
    icons?: ReactElement;
    contentClassName?: string;
    className?: string;
    pxContent?: number;
    title?: string;
    desc?: string;
    pyContent?: number;
    placement?: TPlacement;
    wrClassName?: string;
    oke?: string;
    cancel?: string;
    onConfirm: () => void;
}

const Confirm: React.FC<IProps> = ({
    children,
    content,
    placement = 'topRight',
    contentClassName = '',
    className = '',
    pxContent = 2,
    pyContent = 1,
    icons,
    title,
    onConfirm,
    desc,
    wrClassName = '',
    ...rest
}) => {
    const refPopover = useRef<HTMLDivElement>(null);
    const refPopup = useRef<HTMLDivElement>(null);
    const refDisable = useRef<HTMLDivElement>(null);

    const {
        style,
        open,
        handleWhenMouseDown,
        handleWhenMouseLeave,
        handleClose,
    } = usePopUp({ refPopover, refPopup, placement, refDisable });

    function renderPop() {
        return (
            <div
                onMouseDown={handleWhenMouseDown}
                onMouseLeave={handleWhenMouseLeave}
                ref={refPopup}
                style={style}
                className={`rounded px-${pxContent} py-${pyContent} mt-[5px] shadow-theme-primary bg-theme-primary animate-modalContentPopup z-[100] ${contentClassName}`}
            >
                {content ? (
                    <div>{content}</div>
                ) : (
                    <div className="pb-3 w-full min-w-[200px]">
                        <div>{icons}</div>
                        <div>
                            <div className="text-sm font-semibold">{title}</div>
                            <div className="text-[12px]">{desc}</div>
                        </div>
                    </div>
                )}
                <div className="flex items-center gap-2 justify-end">
                    <div
                        onClick={() => {
                            handleClose();
                        }}
                        className="px-2 py-1 rounded text-sm cursor-pointer select-none bg-color-error text-theme-primary"
                    >
                        cancel
                    </div>
                    <div
                        onClick={onConfirm}
                        className="px-2 py-1 rounded text-sm cursor-pointer select-none bg-color-special-primary text-theme-primary"
                    >
                        ok
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative ${wrClassName}`} {...rest}>
            <div className={className} ref={refPopover}>
                {children}
            </div>
            {open && createPortal(renderPop(), document.body)}
        </div>
    );
};

export default memo(Confirm);
