import React from 'react';
import { IoIosLink } from 'react-icons/Io';
import {
    MdModeEditOutline,
    MdOutlineContentCopy,
    MdOutlineDeleteOutline,
} from 'react-icons/md';

const MoreToolls = () => {
    const lsMenuItem = [
        {
            text: 'Copy link',
            icon: <IoIosLink />,
        },
        {
            text: 'Edit issue',
            icon: <MdModeEditOutline />,
        },
        {
            text: 'Make a copy',
            icon: <MdOutlineContentCopy />,
        },
        {
            text: 'Delete issue',
            icon: <MdOutlineDeleteOutline />,
        },
    ];

    return (
        <div className="flex flex-col gap-1 text-[13px] min-w-[150px]">
            {lsMenuItem.map((e, i) => {
                return (
                    <div
                        key={i}
                        className="flex gap-2 items-center cursor-pointer rounded hover:bg-theme-secondary px-1 select-none"
                    >
                        {e.icon}
                        <div>{e.text}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default MoreToolls;
