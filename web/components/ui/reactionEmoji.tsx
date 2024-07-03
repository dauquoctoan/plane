import React, { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import Popover from './popover';
import { renderEmoji } from '@/helpers';

const ReactionEmoji = ({ onChange }: { onChange: (e: string) => void }) => {
  const lsEmoji = ['129505', '128077', '128078', '128531', '128578', '128544'];

  return (
    <div className="z-10 p-1 rounded bg-color-special-secondary w-fit">
      <Popover
        placement="topLeft"
        className="w-fit"
        content={
          <div className="flex gap-2 items-center">
            {lsEmoji.map((e, i) => {
              return (
                <div
                  key={i}
                  className="cursor-pointer hover:bg-theme-secondary p-1 rounded"
                  onClick={() => {
                    onChange(e);
                  }}
                >
                  {renderEmoji(e)}
                </div>
              );
            })}
          </div>
        }
      >
        <BsEmojiSmile className="disable z-0" />
      </Popover>
    </div>
  );
};

export default ReactionEmoji;
