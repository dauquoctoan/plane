'use client';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IParams } from '@/types';
import { useParams, usePathname } from 'next/navigation';
import { ContainerLink, changeRoute } from 'nextjs-progressloader';
import React from 'react';
interface IMenuItem {
    href: string;
    nickname: string;
}
const Menu = () => {
    const pathName = usePathname();
    const info = useSelector(selectInfo);
    const params = useParams<IParams>();

    const menus: IMenuItem[] = [
        { href: 'settings', nickname: 'General' },
        { href: 'members', nickname: 'Members' },
        { href: 'features', nickname: 'Features' },
        { href: 'states', nickname: 'States' },
        { href: 'labels', nickname: 'Labels' },
        { href: 'integrations', nickname: 'Integrations' },
        { href: 'estimates', nickname: 'Estimates' },
        { href: 'automations', nickname: 'Automations' },
    ];

    return (
        <div className="">
            <ContainerLink
                links={menus.map((e) => {
                    return {
                        href: `/${info?.workspace?.slug}/projects/${params.projectid}/settings/${e.href}`,
                        nickname: e.nickname + params.projectid,
                    };
                })}
            />
            {menus.map((e, i) => {
                return (
                    <div
                        onClick={() => {
                            if (i == 0) {
                                changeRoute(
                                    `/${info?.workspace?.slug}/projects/${params.projectid}/settings`,
                                );
                            } else {
                                changeRoute(
                                    `/${info?.workspace?.slug}/projects/${params.projectid}/settings/${e.href}`,
                                );
                            }
                        }}
                        className={`px-3 text-[12px] ${
                            e.href == pathName.split('/').pop()
                                ? 'bg-color-special-secondary text-color-special-primary'
                                : 'hover:bg-theme-secondary'
                        } py-1 rounded select-none cursor-pointer mb-1 `}
                    >
                        {e.nickname}
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
