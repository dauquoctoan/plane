'use client';
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
    contentClassName?: string;
    isChildRen?: boolean;
    className?: string;
    pxContent?: number;
    pyContent?: number;
    placement?: 'left' | 'center' | 'right';
    wrClassName?: string;
    isHover?: boolean;
}

interface IPosition {
    pop_left: number|string;
    pop_top: number|string;
}

const Popover: React.FC<IProps> = ({
    children,
    content,
    placement = 'left',
    contentClassName = '',
    className = '',
    pxContent = 2,
    pyContent = 1,
    isChildRen = false,
    wrClassName = '',
    isHover = false,
    ...rest
}) => {
    const [open, setOpen] = useState<Boolean>(false);
    const refPopover = useRef<HTMLDivElement>(null);
    const refPopup = useRef<HTMLDivElement>(null);
    const [scrollTop, setScrollTop] = useState(0);
    const timeoutId = useRef<any>(0);
    const [position, setPosition] = useState<IPosition>({
        pop_left: 0,
        pop_top: 0,
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
            pop_left: position[placement],
            pop_top: isChildRen ? "100%" : wr.top + wr.height,
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
            } else if (!refPopup.current?.contains(e.target) && open == false) {
                setOpen(() => false);
            }
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
        } else window.addEventListener('click', handleClick, true);
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

    function renderPop() {
        return (
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                ref={refPopup}
                style={{
                    top: position.pop_top,
                    left: position.pop_left,
                }}
                className={`absolute rounded px-${pxContent} py-${pyContent} mt-[5px] shadow-theme-primary bg-theme-primary animate-modalContentPopup z-[100] ${contentClassName}`}
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
            {open &&
                (!isChildRen
                    ? createPortal(renderPop(), document.body)
                    : renderPop())}
        </div>
    );
};

export default memo(Popover);
