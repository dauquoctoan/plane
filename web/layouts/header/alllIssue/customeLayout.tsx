'use client';
import { issueViewSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { changeRoute } from 'nextjs-progressloader';
import React, { useState } from 'react';
import { BsListCheck } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';

const CustomeLayout = ({ isList = false }: { isList?: boolean }) => {
  const info = useSelector(selectInfo);
  return (
    <div
      className="relative flex overflow-hidden rounded bg-theme-secondary box-border cursor-pointer"
      onClick={() => {
        changeRoute(
          isList
            ? `/${info?.workspace?.slug}/workspace-views/all-issues`
            : `/${info?.workspace?.slug}/workspace-views`
        );
      }}
    >
      <div className="p-1 z-10 flex items-center">
        <CiViewList
          className={`text-base ${
            !isList ? 'text-color-special-primary' : 'text-theme-text-primary'
          }`}
        />
      </div>

      <div className="p-1 z-10 flex items-center">
        <BsListCheck
          className={`text-xl ${
            !isList ? 'text-theme-text-primary' : 'text-color-special-primary'
          }`}
        />
      </div>
      <div
        className={`absolute top-0 ${
          !isList ? 'translate-x-0' : 'translate-x-[100%]'
        } w-[50%] h-full rounded transition-all bg-color-special-secondary`}
      ></div>
    </div>
  );
};

export default CustomeLayout;
