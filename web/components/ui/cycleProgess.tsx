import React, { FC } from 'react';
import { MdDone } from 'react-icons/md';

export interface IProps {
  percent: number;
}

const CycleProgess: FC<IProps> = ({ percent = 0 }) => {
  const ofset = 116 - 116 * (percent / 100);
  return (
    <div className="relative">
      <svg
        width="57"
        height="57"
        viewBox="-7.125 -7.125 71.25 71.25"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          r="18.5"
          cx="28.5"
          cy="28.5"
          fill="transparent"
          stroke="#e0e0e0"
          stroke-width="6"
          stroke-dasharray="116.18px"
          stroke-dashoffset="0"
        ></circle>
        <circle
          r="18.5"
          cx="28.5"
          cy="28.5"
          stroke={`${ofset == 116 ? '' : 'var(--color-special-primary)'}`}
          stroke-width="6"
          stroke-linecap="round"
          stroke-dashoffset={ofset}
          fill="transparent"
          stroke-dasharray="116.18px"
        ></circle>
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-[10px]">
        {percent == 100 ? (
          <MdDone className="text-sm" />
        ) : (
          <>
            {percent}
            <span className="text-[8px]">%</span>
          </>
        )}
      </div>
    </div>
  );
};

export default CycleProgess;
