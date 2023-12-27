'use client';
import React from 'react';
import Tooltip from './ui/tooltip';

const Test = () => {
    return (
        <div className="w-[200vw] h-[200vh]">
            <div className="pl-[100vw] pt-[100vh]">
                <div>
                    <Tooltip
                        placement="rightCenter"
                        title={<div className="">sdfsdfsd sdfsd</div>}
                    >
                        <div className="bg-red-600 box-border w-fit">dfsd</div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Test;
