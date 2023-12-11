'use client';
import React, {
    useEffect,
    useRef,
    useState,
    UIEvent,
    ReactElement,
} from 'react';
import get from 'lodash.get';
import { ListeningResize, cn } from '@/helpers';

export type position = 'left' | 'right';

export interface ITableConfigs {
    title: string;
    dataIndex: string;
    fixed?: position;
    shadow?: position;
    width?: number;
    render?: (value: any, item: any) => ReactElement;
}

export interface ITotal {
    left: number;
    right: number;
    totalWidth: number;
}

export interface IProps {
    data?: any[];
    configs?: ITableConfigs[];
    fixedHeader?: boolean;
}

export type TTotal = ITotal | null;

const Table: React.FC<IProps> = ({ data, configs, fixedHeader }) => {
    const DEFAULT_WIDTH = 125;
    const refTable = useRef<HTMLDivElement>(null);
    const [isScroll, setIsScroll] = useState(false);
    const refTotal = useRef<TTotal>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (refTable.current) {
            ListeningResize(refTable.current, (e: number) => {
                setWidth(e);
            });
        }
    }, []);

    function getHeader(
        configs: ITableConfigs[],
        isHeader: boolean = false,
        item = {},
    ): ReactElement[] {
        const lsHeader: ReactElement[] = [];
        if (!refTotal.current) {
            let left = 0;
            let redu: { right: number; total: number } = configs.reduce(
                (curent, item) => {
                    if (item.fixed === 'right')
                        return {
                            right: curent.right + (item.width || DEFAULT_WIDTH),
                            total: curent.total + (item.width || DEFAULT_WIDTH),
                        };
                    else
                        return {
                            ...curent,
                            total: curent.total + (item.width || DEFAULT_WIDTH),
                        };
                },
                { right: 0, total: 0 },
            );
            refTotal.current = {
                left,
                right: redu.right,
                totalWidth: redu.total,
            };
        }

        let left = refTotal.current.left;
        let right = refTotal.current.right;
        const space = width - refTotal.current.totalWidth;
        configs.forEach((e, i) => {
            if (e.fixed === 'right') right = right - (e.width || DEFAULT_WIDTH);
            lsHeader.push(
                <div
                    style={{
                        left: e.fixed === 'left' ? left : undefined,
                        right: e.fixed === 'right' ? right : undefined,
                        width:
                            i === configs.length - 1 && space > 0
                                ? e.width || DEFAULT_WIDTH + space
                                : e.width,
                        zIndex: e.fixed && (isHeader ? 49 : 48),
                    }}
                    className={cn(
                        'w-[125px] px-4 py-2 border-b border-theme-border-secondary whitespace-nowrap text-ellipsis transition-all',
                        {
                            'after:content-[""] after:top-0 after:w-[40px] after:absolute after:pointer-events-none after:bottom-[1px] after:h-full':
                                isScroll && e.fixed,
                            'after:translate-x-[100%] after:right-0 table-shadow-left':
                                isScroll && e.fixed && e.fixed === 'left',
                            'after:translate-x-[-100%] after:left-0 table-shadow-right':
                                isScroll && e.fixed && e.fixed === 'right',
                            'text-base font-bold bg-theme-secondary': isHeader,
                            'text-sm bg-theme-primary': !isHeader,
                            sticky: e.fixed,
                        },
                    )}
                >
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {isHeader && e.title}
                    </div>
                    {(!isHeader &&
                        e.render &&
                        e.render(get(item, e.dataIndex), item)) || (
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {get(item, e.dataIndex)}
                        </div>
                    )}
                </div>,
            );
            if (e.fixed === 'left') left = left + (e.width || DEFAULT_WIDTH);
        });
        return lsHeader;
    }

    return (
        <div
            onScroll={(e: any) => {
                if (e.target.scrollLeft > 0) setIsScroll(true);
                else setIsScroll(false);
            }}
            onResize={() => {
                console.log('sdfsdf', refTable.current?.style.width);
            }}
            ref={refTable}
            className="w-full overflow-auto hover-scroll border border-collapse border-x-0 h-full border-theme-border-secondary"
        >
            {configs ? (
                <>
                    <div
                        style={{ zIndex: fixedHeader ? 50 : undefined }}
                        className={`flex w-fit bg-theme-secondary ${
                            fixedHeader ? 'sticky top-0' : ''
                        }`}
                    >
                        {getHeader(configs, true)}
                    </div>
                    {data?.map((e, index) => (
                        <div key={index} className="flex w-fit">
                            {getHeader(configs, false, e)}
                        </div>
                    ))}
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Table;
