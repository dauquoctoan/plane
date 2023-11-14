'use client';
import React, { memo, useEffect, useState } from 'react';

interface IPropsTabs {
    lsLabel: any[];
    onChange: (n: number) => void;
}

const Tab: React.FC<IPropsTabs> = ({ lsLabel = [], onChange }) => {
    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        onChange(tabIndex);
    }, [tabIndex, onChange]);

    return (
        <div className="flex text-sm items-center gap-2">
            {lsLabel.map((text, index) => (
                <div
                    key={index}
                    onClick={() => {
                        setTabIndex(index);
                    }}
                    className={`cursor-pointer pb-1 select-none ${
                        tabIndex == index
                            ? 'text-color-special-primary border-b-2 border-color-special-primary border-w'
                            : ''
                    }`}
                >
                    {text}
                </div>
            ))}
        </div>
    );
};

export default memo(Tab);
