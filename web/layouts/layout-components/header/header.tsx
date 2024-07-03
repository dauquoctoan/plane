'use client';
import { useSelector } from '@/store';
import { selectIsCollap } from '@/store/slices/layoutSlice/selectors';
import React from 'react';

const Header = ({
  header: HeaderContent,
}: {
  header: string | JSX.Element | JSX.Element[];
}) => {
  const isCollap = useSelector(selectIsCollap);
  return (
    <div
      className={`${
        isCollap ? 'header-collap' : 'header'
      } transition-all h-[60px] sticky top-0 border-b border-theme-border-primary box-border w-[100%] bg-theme-primary z-40`}
    >
      <div className="items-center justify-between h-full px-3 box-border flex">
        <div className="flex-1">{HeaderContent}</div>
        <div className="hidden md:block">
          {/* <Tooltip
                    title={<div className="text-sm p-1">Notification</div>}
                >
                    <Popover
                        pxContent={0}
                        pyContent={0}
                        contentClassName="border"
                        placement="bottomRight"
                        content={<Notification />}
                        className="w-[40px] h-[40px] flex rounded-full bg-theme-secondary items-center justify-center cursor-pointer hover:bg-color-special-secondary text-xl"
                    >
                        <MdNotificationsNone />
                    </Popover>
                </Tooltip> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
