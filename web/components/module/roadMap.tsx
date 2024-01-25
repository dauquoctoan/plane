import React, { FC, ReactElement, ReactNode } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IconType } from 'react-icons';

export interface IProps {
    roads: RoeadItem[];
}

export interface RoeadItem {
    title: string | ReactElement[];
    icon?: ReactElement | ReactNode;
}

const RoadMap: FC<IProps> = ({ roads }) => {
    return (
        <div className="flex gap-2 items-center text-base">
            {roads.map((e, i) => {
                return (
                    <>
                        <div className="flex gap-1 items-center">
                            {e?.icon}
                            {e.title}
                        </div>
                        {i != roads.length - 1 && (
                            <div>
                                <MdOutlineKeyboardArrowRight />
                            </div>
                        )}
                    </>
                );
            })}
        </div>
    );
};

export default RoadMap;
