import React from 'react';

interface IProps {
    children: React.ReactElement | string;
    size?: 'md' | 'sm' | 'lg';
    type?: 'warning';
    className?: string;
}

const Message: React.FC<IProps> = ({
    children,
    type = 'warning',
    className,
}) => {
    return (
        <div className={`text-color-warning text-sm ${className}`}>
            {children}
        </div>
    );
};

export default Message;
