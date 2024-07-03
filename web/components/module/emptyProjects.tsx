import React, { FC } from 'react';
import Button from '../ui/button';

export interface IProps {
  title: string;
  desc: string;
  textBtn: string;
  cb: () => void;
}

const EmptyProjects: FC<IProps> = ({ title, desc, textBtn, cb }) => {
  return (
    <div className="px-20 py-10">
      <h2 className="text-xl font-bold text-center">{title}</h2>
      <p className="text-xs mt-2 text-center">{desc}</p>
      <div className="w-full flex justify-center mt-5">
        <Button
          typeBTN="primary"
          suffix={
            <span className="relative flex h-3 w-3">
              <span className="animate-pingDot absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          }
          text={textBtn}
          onClick={() => {
            cb && cb();
          }}
        />
      </div>
    </div>
  );
};

export default EmptyProjects;
