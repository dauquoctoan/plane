import React, { useState } from 'react';
import emojis from '../../constants/emoji.json';
import icons from '../../constants/icon.json';
import { renderEmoji } from '@/helpers/emoji';

interface IEmojiIconPicker {
  onChange?: (e: string | { name: string }) => void;
}

const EmojiIconPicker: React.FC<IEmojiIconPicker> = ({ onChange }) => {
  const [isEmoji, setisEmoji] = useState(true);
  const ls = isEmoji ? emojis : icons.material_rounded;
  return (
    <div className="pb-3">
      <div className="flex gap-2 text-sm px-2 py-2 cursor-pointer select-none">
        <div
          onClick={() => {
            setisEmoji(true);
          }}
          className={`border-color-special-primary px-2 py-1 ${
            isEmoji ? 'border-b-2' : ''
          }`}
        >
          emoji
        </div>
        <div
          onClick={() => {
            setisEmoji(false);
          }}
          className={`border-color-special-primary px-2 py-1 ${
            !isEmoji ? 'border-b-2' : ''
          }`}
        >
          icon
        </div>
      </div>
      <div className="max-h-[100px] overflow-auto">
        <div className="grid grid-cols-6 gap-2 px-2 py-2">
          {ls.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onChange && onChange(item);
              }}
              className="w-5 h-5 flex items-center justify-center cursor-pointer"
            >
              {renderEmoji(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmojiIconPicker;
