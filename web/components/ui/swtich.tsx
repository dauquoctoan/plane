import React, { useEffect, useState } from 'react';

interface IProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    label?: string;
    onChange?: (i: boolean) => void;
}

interface IStyleOpeions {
    w: number | string;
    h: number | string;
    cw: number | string;
    ch: number | string;
    x: number | string;
}

const Swtich: React.FC<IProps> = ({ size = 'sm', label, onChange }) => {
    const [isChecked, setisChecked] = useState(false);

    const styleConfig: { [s: string]: IStyleOpeions } = {
        sm: {
            w: 'w-[40px]',
            h: 'h-[20px]',
            cw: 'w-[17px]',
            ch: 'h-[17px]',
            x: 'translate-x-[21px]',
        },
    };

    const { cw, h, w, x, ch } = styleConfig[size];

    useEffect(() => {
        onChange && onChange(isChecked);
    }, [isChecked]);

    return (
        <div
            className="flex items-center content-center gap-2"
            onClick={() => {
                setisChecked(!isChecked);
            }}
        >
            {label && <label className="select-none text-sm">{label}</label>}
            <div
                className={`${
                    isChecked
                        ? 'bg-color-special-primary'
                        : 'bg-theme-border-highligh'
                } box-border ${w} ${h} rounded-full border border-theme-border-primary relative cursor-pointer`}
            >
                <span
                    className={`absolute block ${
                        isChecked ? x : 'translate-x-[0]'
                    } duration-100 transition-all top-[50%] translate-y-[-50%] ${ch} ${cw} rounded-full bg-theme-primary box-border`}
                ></span>
            </div>
        </div>
    );
};

export default Swtich;
