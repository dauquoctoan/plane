import Popover from '@/components/ui/popover';
import React from 'react';
import { PiTableThin } from 'react-icons/pi';
import CustomTable from './customTable';
import CustomeLayout from './customeLayout';
import Tooltip from '@/components/ui/tooltip';

const HeaderAllIssue = () => {
  return (
    <div className="flex-1 flex justify-end items-center gap-3 px-2">
      <Tooltip
        placement="bottomCenter"
        title={<div className="text-sm p-1">Layout</div>}
      >
        <CustomeLayout />
      </Tooltip>

      <Tooltip
        placement="bottomCenter"
        title={<div className="text-sm p-1">Custome table</div>}
      >
        <Popover
          pxContent={0}
          pyContent={0}
          placement="bottomRight"
          wrClassName="w-fit"
          content={
            <div className="p-3">
              <CustomTable />
            </div>
          }
        >
          <div className="relative cursor-pointer w-[30px] h-[30px] rounded hover:bg-theme-secondary flex justify-center items-center">
            <div className="w-full h-full z-20"></div>
            <PiTableThin className="text-2xl absolute z-0" />
          </div>
        </Popover>
      </Tooltip>
    </div>
  );
};

export default HeaderAllIssue;
