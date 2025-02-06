'use client';
import React, { FC, ReactElement, ReactNode } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoMdMenu } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { layoutSlice } from '@/store';

export interface IProps {
  roads: RoeadItem[];
}

export interface RoeadItem {
  title: string | ReactElement[];
  icon?: ReactElement | ReactNode;
}

const RoadMap: FC<IProps> = ({ roads }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <div
        onClick={() => {
          dispatch(layoutSlice.actions.setToggleCollap());
        }}
        className="cursor-pointer flex md:hidden w-7 h-7 rounded items-center justify-center bg-theme-secondary hover:bg-color-special-secondary hover:text-color-special-primary"
      >
        <IoMdMenu className="text-sm" />
      </div>
      <div className="flex gap-2 items-center">
        {roads.map((e, i) => {
          return (
            <React.Fragment key={i}> 
              <div className="flex gap-1 items-center text-sm">
                {e?.icon}
                {e.title}
              </div>
              {i != roads.length - 1 && (
                <MdOutlineKeyboardArrowRight className="text-sm" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default RoadMap;
