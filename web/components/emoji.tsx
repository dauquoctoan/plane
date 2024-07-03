import EmojiPicker from 'emoji-picker-react';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Emoji = () => {
  return (
    <div className="relative w-fit h-auto shadow-sm">
      <AiOutlineClose className="absolute top-0 right-0 mb-2 z-[999] mt-1 mr-1" />
      <EmojiPicker height={300} width={250} lazyLoadEmojis={true} />
    </div>
  );
};

export default Emoji;
