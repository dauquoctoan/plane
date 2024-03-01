import React, { FC, ReactElement, useState } from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { MdCalendarMonth } from 'react-icons/md';

export interface ILayoutSwitch {
    defaultValue?: string;
    onChange: (e: any) => void;
    menuItems: IItemMenuLayoutSwitch[];
}

export interface IItemMenuLayoutSwitch {
    key: string;
    icon: ReactElement;
}

const LayoutSwitch: FC<ILayoutSwitch> = ({
    defaultValue,
    onChange,
    menuItems,
}) => {
    const [curentKey, setCurentKey] = useState(defaultValue);

    return (
        <div className="py-1 border px-2 rounded flex text-xl items-center gap-2 box-border bg-theme-secondary">
            {menuItems.map((e, i) => {
                return (
                    <div
                        key={i}
                        onClick={() => {
                            setCurentKey(e.key);
                            onChange(e.key);
                        }}
                        className={`px-1 border rounded cursor-pointer ${
                            e.key == curentKey
                                ? 'bg-color-special-secondary shadow-lg shadow-slate-300'
                                : 'bg-theme-primary'
                        }`}
                    >
                        {e.icon}
                    </div>
                );
            })}
        </div>
    );
};

export default LayoutSwitch;
