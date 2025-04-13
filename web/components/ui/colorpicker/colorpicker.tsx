import React, { useEffect, useState } from 'react';
import { CgColorPicker } from 'react-icons/cg';
import { FiChevronDown } from 'react-icons/fi';
import { ICurrentFieldProps } from '../types';

export interface IPropsColorPicker extends ICurrentFieldProps {
  className?: string;
  onChange?: (res: string) => void;
  value?: string;
  defaultValue?: string;
}
const lsColor = [
  'rgb(255, 105, 0)',
  'rgb(252, 185, 0)',
  'rgb(123, 220, 181)',
  'rgb(0, 208, 132)',
  'rgb(142, 209, 252)',
  'rgb(6, 147, 227)',
  'rgb(171, 184, 195)',
  'rgb(235, 20, 76)',
  'rgb(247, 141, 167)',
  'rgb(153, 0, 239)',
];
const Colorpicker: React.FC<IPropsColorPicker> = ({
  className,
  onChange,
  value,
  defaultValue,
}) => {
  const [curentColor, setCurentColor] = useState<string>(
    defaultValue || lsColor[3]
  );
  const [choseColor, setChoseColor] = useState('rgb(0 0 0)');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) setOpen(false);

    setTimeout(() => {
      onChange && onChange(curentColor);
    }, 200);
  }, [curentColor]);

  useEffect(() => {
    if (value !== undefined && curentColor !== value) setCurentColor(value);
  }, [value]);

  return (
    <div
      className={`relative border bg-theme-secondary w-fit select-none cursor-pointer flex px-1 items-center rounded ${
        className || ''
      }`}
    >
      <div
        className="flex items-center"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="mr-1">Color</div>
        <div
          style={{ backgroundColor: curentColor }}
          className="w-4 h-4 rounded mr-1"
        ></div>
        <FiChevronDown />
      </div>
      {open && (
        <div className="z-50 absolute top-[100%] left-0 mt-[3px] animate-popUp origin-top-left border shadow-theme-primary bg-theme-primary w-max rounded flex p-2 gap-2">
          <div className="flex-1 grid grid-cols-5 gap-2">
            {lsColor.map((color, index) => {
              return (
                <div
                  key={index}
                  className={`w-10 h-10 rounded ${
                    color == curentColor
                      ? 'border-2 border-color-special-primary'
                      : ''
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setCurentColor(color);
                  }}
                ></div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 border-l pl-2">
            <div
              className={`w-10 h-10 rounded ${
                choseColor == curentColor
                  ? 'border-2 border-color-special-primary'
                  : ''
              }`}
              style={{ backgroundColor: choseColor }}
              onClick={() => {
                setCurentColor(choseColor);
              }}
            ></div>
            <div className="w-10 h-10 relative">
              <label
                className="absolute top-0 left-0 w-10 h-10 rounded-full hover:bg-theme-secondary flex items-center justify-center"
                htmlFor="chose-color"
              >
                <CgColorPicker />
              </label>
              <input
                id="chose-color"
                type="color"
                style={{ visibility: 'hidden' }}
                onChange={(e) => {
                  setChoseColor(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Colorpicker;
