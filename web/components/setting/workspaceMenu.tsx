'use client';
import { createNickNameLink } from '@/helpers';
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

    const menus: IMenuItem[] = [
        { href: 'settings', nickname: 'General' },
        { href: 'members', nickname: 'members' },
        { href: 'billing', nickname: 'billing' },
        { href: 'exports', nickname: 'Exports' },
    ];

    return (
        <div className="">
            <ContainerLink
                links={menus.map((e) => {
                    return {
                        href: `/${info?.workspace?.slug}/settings/${e.href}`,
                        nickname: createNickNameLink(e.nickname + info?.workspace?.slug),
                    };
                })}
            />
            <div>
                <div className="text-[11px] text-color-text-sidebar font-bold mb-3">
                    SETTINGS
                </div>
                {menus.map((e, i) => {
                    return (
                        <div
                            key={i}
                            onClick={() => {
                                if (i == 0) {
                                    changeRoute(
                                        `/${info?.workspace?.slug}/settings`,
                                    );
                                } else {
                                    changeRoute(
                                        `/${info?.workspace?.slug}/settings/${e.href}`,
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
        </div>
    );
};

export default Menu;
