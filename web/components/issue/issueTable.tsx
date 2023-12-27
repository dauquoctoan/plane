'use client';
import React, {
    useEffect,
    useRef,
    useState,
    UIEvent,
    ReactElement,
} from 'react';
import get from 'lodash.get';

type position = 'left' | 'right';

interface ITableConfigs {
    title: string;
    dataIndex: string;
    fixed?: position;
    shadow?: position;
    width?: number;
    render?: (e: any) => ReactElement;
}

interface ITotal {
    left: number;
    right: number;
}

interface IProps {
    data?: any[];
    configs?: ITableConfigs[];
}

type TTotal = ITotal | null;

const IssueTable: React.FC<IProps> = ({ data, configs }) => {
    const refTable = useRef<HTMLDivElement>(null);
    const [isScroll, setIsScroll] = useState(false);
    const refTotal = useRef<TTotal>(null);

    const shadow: { [key: string]: string } = {
        left: 'rgba(5, 5, 5, 0.11) 8px 0px 8px 1px',
        right: 'rgba(5, 5, 5, 0.11) -8px 0px 8px 1px',
    };

    function getHeader(
        configs: ITableConfigs[],
        isHeader: boolean = false,
        item = {},
    ): ReactElement[] {
        const lsHeader: ReactElement[] = [];
        if (!refTotal.current) {
            let left = 0;
            let right = configs.reduce((a, b) => {
                if (b.fixed === 'right') return a + (b.width || 125);
                else return a;
            }, 0);
            refTotal.current = { left, right };
        }

        let left = refTotal.current.left;
        let right = refTotal.current.right;

        configs.forEach((e, i) => {
            if (e.fixed === 'right') right = right - (e.width || 125);
            lsHeader.push(
                <div
                    key={i}
                    style={{
                        boxShadow:
                            (isScroll || undefined) &&
                            e.shadow &&
                            shadow[e.shadow],
                        left: e.fixed === 'left' ? left : undefined,
                        right: e.fixed === 'right' ? right : undefined,
                    }}
                    className={`w-[125px] bg-theme-primary px-4 py-2 border-b border-theme-border-secondary ${
                        isHeader ? 'text-base font-bold' : 'text-sm'
                    } whitespace-nowrap overflow-hidden text-ellipsis ${
                        e.fixed ? 'sticky' : ''
                    }`}
                >
                    {isHeader && e.title}
                    {(!isHeader &&
                        e.render &&
                        e.render(get(item, e.dataIndex))) ||
                        get(item, e.dataIndex)}
                </div>,
            );
            if (e.fixed === 'left') left = left + (e.width || 125);
        });
        return lsHeader;
    }

    return (
        <div
            onScroll={(e: any) => {
                if (e.target.scrollLeft > 0) setIsScroll(true);
                else setIsScroll(false);
            }}
            ref={refTable}
            className="w-full overflow-auto hover-scroll border border-collapse border-x-0 h-full border-theme-border-secondary"
        >
            {configs ? (
                <>
                    <div className="flex w-fit">{getHeader(configs, true)}</div>
                    <div className="flex w-fit">
                        {data?.map((e) => getHeader(configs, false, e))}
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default IssueTable;
