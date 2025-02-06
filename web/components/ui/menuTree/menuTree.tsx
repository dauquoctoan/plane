import { title } from 'process';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdChevronLeft } from 'react-icons/md';

export interface IMenuTree {
  children?: ReactElement | string | ReactElement[];
  data: IConfigs;
  onClick?: (key: string) => void;
  style?: React.CSSProperties;
}

export interface IPropsMenuItem {
  data: IConfigs;
  onClick?: (key: string) => void;
  style?: React.CSSProperties;
  placement: string;
}

export type TPlacement =
  | 'bottomLeft'
  | 'bottomRight'
  | 'topLeft'
  | 'topRight'
  | 'left'
  | 'right';

export interface IConfigs {
  isRoot?: boolean;
  placement?: TPlacement;
  children?: IConfigs[];
  title?: ReactElement | string | ReactElement[];
  icon?: ReactElement;
  key?: string;
  style?: React.CSSProperties;
}

const MenuPopUp: React.FC<IPropsMenuItem> = ({
  data,
  onClick,
  style,
  placement,
}) => {
  return (
    <div
      onClick={e => {
        e.stopPropagation();
      }}
      className={
        'absolute border bg bg-theme-primary box-border rounded w-max shadow-theme-primary animate-popUp ' +
        placement
      }
    >
      {data.children?.map((e, index) => {
        return (
          <MenuTree key={index} onClick={onClick} data={e} style={style} />
        );
      })}
    </div>
  );
};const MenuTree: React.FC<IMenuTree> = ({ children, data, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const refMenuItem = useRef<HTMLDivElement>(null);

  function handleCLick(e: any) {
    if (refMenuItem.current?.contains(e.target as any)) setIsOpen(true);
    else setIsOpen(false);
  }

  useEffect(() => {
    document?.addEventListener('click', handleCLick);

    return () => document?.removeEventListener('click', handleCLick);
  }, []);

  const placements: { [e: string]: string } = {
    bottomLeft: 'top-[100%] mt-1 right-[0] origin-top-right',
    left: 'top-0 mr-1 right-[100%] origin-top-right',
    right: 'top-0 ml-1 left-[100%] origin-top-left',
    /* ex */
    bottomRight: 'top-[100%] mt-1 right-[0] origin-top-right',
    topLeft: 'top-[100%] mt-1 right-[0] origin-top-right',
    topRight: 'top-[100%] mt-1 right-[0] origin-top-right',
  };  const curentPlacement = placements[data.placement || 'left'];

  return (
    <div
      style={data.style}
      ref={refMenuItem}
      className={`relative rounded cursor-pointer select-none px-2 py-1 hover:bg-theme-secondary flex items-center ${
        data.isRoot ? 'border' : ''
      }`}
      onClick={() => {
        if (data.key) onClick && onClick(data.key);
      }}
    >
      {children ? (
        typeof children == 'string' ? (
          <div className={`w-fit flex items-center rounded px-2 py-1`}>
            {children}
            <IoIosArrowDown className="ml-1" />
          </div>
        ) : (
          children
        )
      ) : (
        <>
          {!data.key && <MdChevronLeft className="mr-1" />}
          {data.key && data.icon && <div className="mr-1">{data.icon}</div>}
          <span className="text-sm">data.title</span>
        </>
      )}
      {isOpen && (
        <MenuPopUp placement={curentPlacement} onClick={onClick} data={data} />
      )}
    </div>
  );
};

export default MenuTree;

// const data: IConfigs = {
//     placement: 'bottomLeft',
//     isRoot: true,
//     style: { padding: 0 },
//     children: [
//         {
//             style: { minWidth: 200 },
//             title: 'I item 1',
//             children: [
//                 {
//                     title: 'I item 1',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 1',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 1',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 1',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 1',
//                     key: '45',
//                 },
//             ],
//         },
//         {
//             title: 'I item 2',
//             children: [
//                 {
//                     style: { minWidth: 200 },
//                     title: 'I item 2',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 2',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 2',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 2',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 2',
//                     key: '45',
//                 },
//             ],
//         },
//         {
//             title: 'I item 3',
//             style: { minWidth: 200 },
//             children: [
//                 {
//                     title: 'I item 3',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 3',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 3',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 3',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 3',
//                     key: '45',
//                 },
//             ],
//         },
//         {
//             title: 'I item 4',
//             children: [
//                 {
//                     title: 'I item 4',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 4',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 4',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 4',
//                     key: '45',
//                 },
//                 {
//                     title: 'I item 4',
//                     key: '45',
//                 },
//             ],
//         },
//         {
//             title: 'I item 5',
//             children: [
//                 {
//                     style: { minWidth: 200 },
//                     title: 'I item 5',
//                     icon: <CiCircleChevLeft className="text-red-500" />,
//                     key: '5',
//                 },
//                 {
//                     title: 'I item 5',
//                     icon: <CiCircleChevLeft className="text-red-500" />,
//                     key: '25',
//                 },
//                 {
//                     title: 'I item 5',
//                     icon: <CiCircleChevLeft className="text-red-500" />,
//                     key: '35',
//                 },
//                 {
//                     title: 'I item 5',
//                     icon: <CiCircleChevLeft className="text-red-500" />,
//                     key: '35',
//                 },
//                 {
//                     title: 'I item 5',
//                     icon: <CiCircleChevLeft className="text-red-500" />,
//                     key: '45',
//                 },
//             ],
//         },
//     ],
// };
