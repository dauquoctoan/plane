'use client';

import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

const IssueHeader = ({ info, vlxx }: any) => {
    return (
        <div className="flex gap-2 items-center justify-between text-sm pr-2">
            <div className="flex items-center gap-2">
                <PiSuitcaseSimpleBold />
                <span>Projects</span>
                <div>
                    <MdOutlineKeyboardArrowRight />
                </div>
                <span>Issue</span>
            </div>

            <div className="flex items-center gap-2">
                <div className="border rounded px-3 py-1 h-fit select-none cursor-pointer">
                    fillter
                </div>
                <div className="border rounded px-3 py-1 h-fit select-none cursor-pointer">
                    display
                </div>
            </div>
        </div>
    );
};

export default IssueHeader;
