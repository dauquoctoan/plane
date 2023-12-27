'use client';
import Notification from '@/components/layout/header/notification';
import Popover from '@/components/ui/popover';
import Tooltip from '@/components/ui/tooltip';
import { useSelector } from '@/store';
import { selectIsCollap } from '@/store/slices/layoutSlice/selectors';
import React, { ReactElement } from 'react';
import { MdNotificationsNone } from 'react-icons/md';

const Header = ({ header }: { header: ReactElement }) => {
    const isCollap = useSelector(selectIsCollap);
    return (
        <div
            className={`${
                isCollap ? 'header-collap' : 'header'
            } transition-all h-[60px] sticky top-0 border-b border-theme-border-primary box-border sm:w-[100%!important] bg-theme-primary z-10`}
        >
            <div className="flex items-center justify-between h-full px-3 box-border">
                <div className="flex-1">{header}</div>
                <Tooltip
                    title={<div className="text-sm p-1">Notification</div>}
                >
                    <Popover
                        pxContent={0}
                        pyContent={0}
                        contentClassName="border"
                        placement="bottomRight"
                        content={<Notification />}
                        className="w-[40px] h-[40px] rounded-full bg-theme-secondary flex items-center justify-center cursor-pointer hover:bg-color-special-secondary text-xl"
                    >
                        <MdNotificationsNone />
                    </Popover>
                </Tooltip>
            </div>
        </div>
    );
};

export default Header;
