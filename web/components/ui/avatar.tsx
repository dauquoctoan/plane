import React, { ReactElement } from 'react';
interface IProps {
    children: string;
    size?: 'sm'|'md'|'lg';
}

const Avatar: React.FC<IProps> = ({ children, size='md' }) => {
    const styleCofnigs={
        sm:'w-[22px] h-[22px] text-sm',
        md:'w-[26px] h-[26px] text-sm',
        lg:'w-[30px] h-[30px] text-sm'
    }
    const currentStyle = styleCofnigs[size];

    return (
        <div className={`flex items-center justify-center rounded bg-slate-800 text-center text-theme-secondary ${currentStyle}`}>
            {children[0]?.toUpperCase() || ''}
        </div>
    );
};

export default Avatar;
