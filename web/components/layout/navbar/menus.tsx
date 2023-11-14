import React, { ReactElement, useState } from 'react';
import { MdOutlineWindow } from 'react-icons/md';
import { HiChartBar } from 'react-icons/hi';
import { AiFillTags } from 'react-icons/ai';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { selectIsCollap, useSelector } from '@/store';
import { ContainerLink, ContainerLinkProps, changeRoute } from 'nextjs-progressloader';
import { usePathname } from 'next/navigation';
import { selectInfo } from '@/store/slices/authSlice/selectors';

export interface IMenu extends IBaseMenu {
    isActive: boolean;
    setIndex: (i: number) => void;
    index: number;
    path: string;
}

interface IBaseMenu {
    icon: ReactElement;
    text?: string;
    path: string;
}

const menus: IBaseMenu[] = [
    {
        icon: <MdOutlineWindow />,
        text: 'Dashboard',
        path: '/dashboard',
    },
    {
        icon: <HiChartBar />,
        text: 'Analytics',
        path: '/analytics',

    },
    {
        icon: <PiSuitcaseSimpleBold />,
        text: 'Projects',
        path: '/projects',

    },
    {
        icon: <AiFillTags />,
        text: 'All Issues',
        path: '/all-issues',
    },
];

const links: ContainerLinkProps["links"] = [
    {
        href: "/dashboard",
        nickname: "dashboard",
    },
    {
        href: "/analytics",
        nickname: "analytics",
    },
    {
        href: "/projects",
        nickname: "projects"
    },
    {
        href: "/all-issues",
        nickname: "all-issues"
    },
];

const MenuItem: React.FC<IMenu> = ({
    icon,
    text,
    isActive,
    setIndex,
    index,
    path
}) => {
    return (
        <div
            onClick={() => {
                setIndex(index);
                changeRoute(path);
            }}
            className={`mb-1 flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-theme-secondary rounded ${
                isActive
                    ? 'text-color-special-primary bg-color-special-secondary'
                    : ''
            }`}
        >
            {icon}
            {text && (
                <label className="cursor-pointer animate-showNav">{text}</label>
            )}
        </div>
    );
};

function getPathName(menus: any[],key:string, path:string){
    return menus.map((e)=>({...e,[key]:path + e[key]}))
}

const Menus = () => {
    const isCollap = useSelector(selectIsCollap);
    const [indexMenu, setIndexMenu] = useState(0);
    const info = useSelector(selectInfo);

    return (
        <div className="px-2">
            <ContainerLink links={getPathName(links, 'href', '/'+info?.workspace?.slug || '')} />
            {getPathName(menus, 'path', '/' + info?.workspace?.slug || '').map((item, index) => (
                <MenuItem
                    path={item.path}
                    index={index}
                    setIndex={setIndexMenu}
                    isActive={indexMenu == index}
                    key={index}
                    icon={item.icon}
                    text={isCollap ? undefined : item.text}
                />
            ))}
        </div>
    );
};

export default React.memo(Menus);
