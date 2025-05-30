import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import React, { useState } from 'react';
import imagesDef from '../../../constants/images.json';
import Image from 'next/image';

interface IChangeCover {
  onChange?: (e: string) => void;
}

const ChangeCover: React.FC<IChangeCover> = ({ onChange }) => {
  const tabs = ['Unsplash', 'Images', 'Upload'];
  const [images, setImages] = useState(imagesDef);

  return (
    <div className="w-full max-h-[90vh] overflow-y-auto hidden-scroll md:min-w-[400px] md:h-[400px]">
      {/* <div className="py-2 bg-theme-secondary flex mt-2 rounded px-3">
                {tabs.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            settypeUpload(index);
                        }}
                        className={`rounded px-2 py-1 ${
                            typeUpload == index
                                ? 'bg-color-special-primary text-theme-primary'
                                : ''
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div> */}
      {/* {typeUpload == 0 && (
                <div className="px-3 flex py-2 gap-2 justify-between">
                    <Input
                        placeholder="Search for images"
                        wrClassName="flex-1"
                        onKeyDown={(e) => {
                            if (e.keyCode == 13) e.preventDefault();
                        }}
                    />
                    <Button text="Search" typeBTN="primary" type="button" />
                </div>
            )} */}
      <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 md:h-full overflow-auto px-3 py-3">
        {images.map((e, i) => (
          <div
            onClick={() => {
              onChange && onChange(e);
            }}
            key={i}
            className="relative aspect-video md:col-span-1 px-3 box-border"
          >
            <Image
              layout="fill"
              src={e}
              alt={`Default project cover image-${i}`}
              className="cursor-pointer rounded absolute top-0 left-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangeCover;
