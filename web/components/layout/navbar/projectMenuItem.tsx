import { selectIsCollap, useSelector } from '@/store';
import React, { ReactElement, memo, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import ProjectTools from './projectTools';
import Avatar from '../../ui/avatar';

interface IProjectMenuitem {
    text?: string;
    idProject?: number;
}

const ProjectMenuItem: React.FC<IProjectMenuitem> = ({ text, idProject }) => {
    const isCollap = useSelector(selectIsCollap);
    const [isExpan, setIsExpan] = useState(false);
    
    return (
        <div className={`${isCollap ? 'flex flex-col items-center' : ''}`}>
            {!isCollap && (
                <div className="flex items-center justify-between hover:bg-theme-secondary rounded px-2">
                    <span
                        onClick={() => {
                            setIsExpan(!isExpan);
                        }}
                        className="cursor-pointer select-none flex-1"
                    >
                        {text}
                    </span>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center text-center box-border pb-2 cursor-pointer">
                            ...
                        </div>
                        <BiChevronDown
                            onClick={() => {
                                setIsExpan(!isExpan);
                            }}
                            className={`text-xl cursor-pointer ${
                                isExpan && 'rotate-180'
                            } transition-all`}
                        />
                    </div>
                </div>
            )}
            {isCollap && (
                <div
                    className="cursor-pointer mb-1"
                    onClick={() => {
                        setIsExpan(!isExpan);
                    }}
                >
                    <Avatar>{text||''}</Avatar>
                </div>
            )}
            {isExpan && <ProjectTools idProject={idProject} />}
        </div>
    );
};

export default memo(ProjectMenuItem);
