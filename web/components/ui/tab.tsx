'use client';
import React, { memo, useEffect, useState } from 'react';

interface IPropsTabs {
    lsLabel: ITabItem[];
    active?: string;
    onChange: (n: string) => void;
}

export interface ITabItem {
    title: string;
    key: string;
}

const Tab: React.FC<IPropsTabs> = ({ lsLabel, onChange, active }) => {
    const [tab, setTab] = useState<string>();

    function handleChangeTabIndex(index: string) {
        setTab(index);
        onChange(index);
    }

    useEffect(() => {
        if (active && active !== tab) {
            setTab(active);
        }
    }, [active]);

    return (
        <div className="flex text-sm items-center gap-2 overflow-x-auto hover-scroll">
            {lsLabel.map((item, index) => (
                <div
                    key={index}
                    onClick={() => {
                        handleChangeTabIndex(item.key);
                    }}
                    className={`cursor-pointer w-fit select-none py-2 ${
                        tab == item.key
                            ? 'text-color-special-primary border-b-2 border-color-special-primary border-w'
                            : ''
                    }`}
                >
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default memo(Tab);
