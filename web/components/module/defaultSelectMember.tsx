import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const DefaultSelectMember = ({ showMoreText = true }: { showMoreText?: boolean }) => {
    return (
        <div className="px-2 py-[3px] cursor-pointer select-none border-theme-border-primary rounded flex items-center gap-1 text-[12px]">
            <BsFillPersonLinesFill />
            <span>{showMoreText && 'Assignee'}</span>
        </div>
    );
};

export default DefaultSelectMember;
