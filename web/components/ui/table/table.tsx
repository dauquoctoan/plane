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
import Empty from '../empty';

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
  lsKeyDisable?: string[];
}

export interface IProps {
  data?: any[];
  configs?: ITableConfigs[];
  fixedHeader?: boolean;
  lsKeyDisable?: string[];
  className?: string;
}

export type TTotal = ITotal | null;

const Table: React.FC<IProps> = ({
  data,
  configs: defConfgs,
  fixedHeader,
  lsKeyDisable,
  className,
}) => {
  const DEFAULT_WIDTH = 125;
  const refTable = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);
  const [width, setWidth] = useState(0);
  const [configs, setConfigs] = useState(defConfgs);

  useEffect(() => {
    setConfigs(defConfgs?.filter(e => !lsKeyDisable?.includes(e.title)));
  }, [lsKeyDisable?.length]);

  useEffect(() => {
    if (refTable.current) {
      ListeningResize(refTable.current, (e: number) => {
        setWidth(e);
      });
    }
  }, []);

  function getItemTable(
    configs: ITableConfigs[],
    isHeader: boolean = false,
    item = {}
  ): ReactElement[] {
    const lsHeader: ReactElement[] = [];

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
      { right: 0, total: 0 }
    );    let left = 0;
    let right = redu.right;
    const space = width - redu.total;

    configs.forEach((e, i) => {
      if (e.fixed === 'right') right = right - (e.width || DEFAULT_WIDTH);
      lsHeader.push(
        <div
          key={i}
          style={{
            left: e.fixed === 'left' ? left : undefined,
            right: e.fixed === 'right' ? right : undefined,
            width:
              i === configs.length - 1 && space > 0
                ? (e.width || DEFAULT_WIDTH) + space
                : e.width,
            zIndex: e.fixed && (isHeader ? 39 : 38),
          }}
          className={cn(
            `w-[125px] px-4 py-2 border-b border-theme-border-secondary whitespace-nowrap text-ellipsis transition-all`,
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
            }
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
        </div>
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
      ref={refTable}
      className={`w-full relative overflow-auto hover-scroll border border-collapse border-x-0 border-theme-border-secondary ${className}`}
    >
      {configs ? (
        <>
          <div
            style={{ zIndex: fixedHeader ? 50 : undefined }}
            className={`flex w-fit bg-theme-secondary ${
              fixedHeader ? 'sticky top-0 left-0' : ''
            }`}
          >
            {getItemTable(configs, true)}
          </div>
          {data && data?.length > 0 ? (
            data?.map((e, index) => (
              <div key={index} className="flex w-fit">
                {getItemTable(configs, false, e)}
              </div>
            ))
          ) : (
            <div className="w-full h-[500px]">
              <Empty />
            </div>
          )}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Table;
