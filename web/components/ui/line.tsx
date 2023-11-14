import React from 'react';

interface IProps {
    type?: 'primary' | 'secondary' | 'highligh';
}

const Line: React.FC<IProps> = ({ type = 'primary' }) => {
    return (
        <div
            className={`border-b mt-1 mb-1 border-theme-border-${type} w-full`}
        ></div>
    );
};

export default Line;
