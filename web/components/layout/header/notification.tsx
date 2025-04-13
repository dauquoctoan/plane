import React from 'react';
import { MdOutlineMarkUnreadChatAlt } from 'react-icons/md';
import { GrRefresh } from 'react-icons/gr';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Line from '@/components/ui/line';
import Tab from '@/components/ui/tab';

const Notification = () => {
  return (
    <div className="w-[400px] h-[350px] flex flex-col">
      <div className="flex items-center justify-between px-1 py-1">
        <h1 className="select-none">Notifications</h1>
        <div className="flex items-center gap-3 text-[13px] font-normal">
          <GrRefresh className="cursor-pointer" />
          <MdOutlineMarkUnreadChatAlt className="cursor-pointer" />
          <BiDotsVerticalRounded className="cursor-pointer" />
        </div>
      </div>
      <Line />
      <div className="flex-1 overflow-x-hidden overflow-y-auto px-2 py-1 flex flex-col">
        <Tab
          lsLabel={[
            { title: 'Created by me', key: 'creted' },
            {
              title: 'My Issues',
              key: 'issue',
            },
            {
              title: 'Subscribed',
              key: 'sdf',
            },
          ]}
          onChange={(e) => {
            console.log(e);
          }}
        />
        <div className="flex-1 flex items-center justify-center">
          <img src="/notification.2dbe8957.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default Notification;
