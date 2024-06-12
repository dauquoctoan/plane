'use client';
import React, { ReactElement, useId } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsCircleHalf } from 'react-icons/bs';
import { MdViewModule } from 'react-icons/md';
import { MdOutlineViewSidebar } from 'react-icons/md';
import { CgStack } from 'react-icons/cg';
import { GrDocumentText } from 'react-icons/gr';
import { layoutSlice, selectIsCollap, useSelector } from '@/store';
import { changeRoute, ContainerLink } from 'nextjs-progressloader';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { usePathname } from 'next/navigation';
import { checkIsMobile, createNickNameLink } from '@/helpers';
import { useDispatch } from 'react-redux';
import { IProject } from '@/types';

export interface LinkProps {
    href: string;
    nickname?: string;
}

interface CustomeLink extends LinkProps {
    icon: ReactElement;
    name: string;
}

const links: CustomeLink[] = [
    {
        icon: <CgStack />,
        name: 'Issues',
        href: 'issues',
        nickname: 'ProjectToolIssues',
    },
    {
        icon: <BsCircleHalf />,
        name: 'Cycles',
        nickname: 'ProjectToolCycles',
        href: 'cycles',
    },
    {
        icon: <MdViewModule />,
        name: 'Modules',
        nickname: 'ProjectToolModules',
        href: 'modules',
    },
    {
        icon: <MdOutlineViewSidebar />,
        name: 'Views',
        nickname: 'ProjectToolViews',
        href: 'views',
    },
    {
        icon: <GrDocumentText />,
        name: 'Pages',
        nickname: 'ProjectToolPages',
        href: 'pages',
    },
    {
        icon: <AiOutlineSetting />,
        name: 'Settings',
        nickname: 'ProjectToolSettings',
        href: 'settings',
    },
];

interface IProjectTools {
    Project?: IProject;
}

const ProjectTools: React.FC<IProjectTools> = ({ Project }) => {
    const info = useSelector(selectInfo);
    const isCollap = useSelector(selectIsCollap);
    const curentLink: CustomeLink[] = info
        ? getLink(links, Project?.id || '')
        : [];
    const dispatch = useDispatch();

    const pathName = usePathname()

    function getLink(links: CustomeLink[], id: string) {
        return links.map((e) => ({
            ...e,
            nickname: createNickNameLink((e.nickname as string) + id),
            href: `/${info?.workspace?.slug}/projects/${id}/${e.href}`,
        }));
    }

    return (
        <div
            className={`${!isCollap ? 'pl-4' : ''
                } text-sm mb-2 animate-fadeMenu overflow-y-hidden`}
        >
            <ContainerLink links={curentLink} />
            {curentLink.map((e, i) => (
                <div
                    onClick={() => {
                        changeRoute(e.href);
                        if(checkIsMobile()){
                            dispatch(layoutSlice.actions.setToggleCollap(true));
                        }
                    }}
                    key={i}
                    className={`flex ${pathName.includes(e.href) ? 'text-color-special-primary bg-color-special-secondary' : ''} ${isCollap ? 'justify-center' : ''
                        } items-center gap-2 cursor-pointer px-3 py-1 hover:bg-color-special-secondary rounded`}
                >
                    {e.icon}
                    {!isCollap && <div className="text-xs">{e.name}</div>}
                </div>
            ))}
        </div>
    );
};

export default ProjectTools;
