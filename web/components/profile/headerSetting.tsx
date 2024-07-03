'use client';
import { icons } from '@/constants';
import { layoutSlice } from '@/store';
import React from 'react';
import { useDispatch } from 'react-redux';

const HeaderSetting = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-theme-primary z-40 sticky md:hidden p-4 top-0 left-0 h-60px border-b">
      <div
        className="w-7 cursor-pointer h-7 rounded flex items-center bg-theme-secondary justify-center"
        onClick={() => {
          dispatch(layoutSlice.actions.setToggleCollapProfileSetting(false));
        }}
      >
        {icons.menu}
      </div>
    </div>
  );
};

export default HeaderSetting;
