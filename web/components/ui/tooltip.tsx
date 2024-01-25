'use client';
import usePopUp, { TPlacement } from '@/hooks/popUp';
import React, { ReactElement, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    children: ReactElement | ReactElement[] | string;
    title: ReactElement | ReactElement[] | string;
    placement?: TPlacement;
    disable?: boolean;
    space?: number;
}

const Tooltip: React.FC<IProps> = ({
    children,
    placement,
    title,
    disable = false,
    space = 5,
}) => {
    if (disable) return <>{children}</>;
    const refPopover = useRef<HTMLDivElement>(null);
    const refPopup = useRef<HTMLDivElement>(null);

    const {
        open,
        setOpen,
        style,
        handleClose,
        handleWhenMouseDown,
        handleWhenMouseLeave,
    } = usePopUp({
        refPopover,
        refPopup,
        placement,
        space,
        disableMoveChild: true,
        isHover: true,
        fitWidth: false,
        isChildRen: false,
    });

    return (
        <div className="w-auto">
            <div className="relative w-full" ref={refPopover}>
                {children}
            </div>
            {open &&
                createPortal(
                    <div
                        style={style}
                        className="z-50 box-border rounded shadow-theme-primary bg-theme-text-primary text-theme-primary"
                        ref={refPopup}
                    >
                        {title}
                    </div>,
                    document.body,
                )}
        </div>
    );
};

export default Tooltip;
