'use client';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';
import PopoverDatePiker from './popoverDatePicker';
import { ICurrentFieldProps } from '../types/form';
import usePopUp, { TPlacement } from '@/hooks/popUp';
import { createPortal } from 'react-dom';
import { useNoti } from '@/hooks';

export interface IItemDate {
  date: number;
  month: number;
  year: number;
}
export type size = 'sm' | 'md' | 'lg' | 'xl';
export interface Iprops {
  onChange?: (res?: string) => void;
  defaultDate?: string;
  children?: ReactElement | string;
  value?: any;
  size?: size;
  border?: boolean;
  style?: React.CSSProperties;
  className?: string;
  placement?: TPlacement;
  formatDate?: formatDate;
  isChildren?: boolean;
  beforeUpdateValue?: (data?: string) => Promise<any>;
}

export type formatDate = 'DD/MM/YYY' | 'YYY/DD/MM' | 'MM/DD/YYY';

export type ICurentField = Iprops & ICurrentFieldProps;

export function formartDate(
  value: IItemDate | undefined,
  type: formatDate = 'DD/MM/YYY'
): string | undefined {
  if (!value) return value;
  switch (type) {
    case 'DD/MM/YYY':
      return `${value.date}/${value.month + 1}/${value.year}`;
    case 'MM/DD/YYY':
      return `${value.month + 1}/${value.date}/${value.year}`;
    case 'YYY/DD/MM':
      return `${value.year}/${value.date}/${value.month + 1}`;
  }
}

export function convertStringToDateObj(value: string): IItemDate {
  const curentDate = new Date(value);

  return {
    date: curentDate.getDate(),
    month: curentDate.getMonth(),
    year: curentDate.getFullYear(),
  };
}

const DatePicker: React.FC<ICurentField> = ({
  onChange,
  defaultDate,
  children,
  error,
  border = true,
  style: cssStyle,
  disableMessage,
  isChildren = true,
  value,
  className,
  beforeUpdateValue,
  placement = 'bottomRight',
  formatDate,
  size,
}) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [curentValue, setCurentValue] = useState<IItemDate | undefined>(
    ((value || defaultDate) && convertStringToDateObj(value || defaultDate)) ||
      undefined
  );
  const noti = useNoti();
  const refBtn = useRef<HTMLDivElement>(null);
  const refPopUp = useRef<HTMLDivElement>(null);
  const refClear = useRef<HTMLDivElement>(null);
  const { open, setOpen, style, handleClose } = usePopUp({
    refPopover: refBtn,
    refPopup: refPopUp,
    placement: placement,
    isChildRen: isChildren,
    refDisable: refClear,
  });

  function handleNextMonth(next: number) {
    const monthUpdate = month + next;

    if (monthUpdate < 0) {
      setMonth(11);
      setYear(year - 1);

      return 0;
    }

    if (monthUpdate > 11) {
      setMonth(1);
      setYear(year + 1);

      return 0;
    }

    setMonth(monthUpdate);
  }

  function handleResetDate() {
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
  }

  useEffect(() => {
    if (open) handleClose();
    onChange && onChange(formartDate(curentValue, formatDate));
  }, [curentValue]);

  useEffect(() => {
    if (!open && !curentValue) handleResetDate();
  }, [open]);

  function getItem(curentValue: IItemDate) {
    return (
      <div className="flex items-center gap-1">
        <span>{formartDate(curentValue, formatDate)}</span>
        <div ref={refClear}>
          <IoCloseCircleOutline
            style={{ zIndex: 100 }}
            onClick={function () {
              handleBeforeUpdate(undefined);
            }}
          />
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (value === '') {
      setCurentValue(undefined);
    }
  }, []);

  async function handleBeforeUpdate(newValue: IItemDate | undefined) {
    let result;
    if (beforeUpdateValue) {
      result = await beforeUpdateValue(formartDate(newValue, formatDate));
      if (!result) {
        noti?.error('An error occurred, please try again');

        return;
      }
      noti?.success('Update issue success');
    }
    setCurentValue(newValue);
  }

  return (
    <div style={cssStyle}>
      <div
        className={`relative w-full ${
          error ? 'border border-color-error' : border ? 'border' : ''
        } hover:bg-theme-secondary rounded select-none cursor-pointer text-sm font-medium`}
      >
        <div
          ref={refBtn}
          className={`w-full text-[12px] font-normal flex items-center py-[3px] gap-1 px-2 justify-between whitespace-nowrap ${
            className ? className : ''
          }`}
        >
          <AiOutlineCalendar />
          <span>{curentValue ? getItem(curentValue) : children}</span>
        </div>
        {open &&
          (isChildren ? (
            <PopoverDatePiker
              style={style}
              refPopover={refPopUp}
              handleResetDate={handleResetDate}
              handleClose={handleClose}
              curentValue={curentValue}
              handleNextMonth={handleNextMonth}
              month={month}
              setCurentValue={handleBeforeUpdate}
              year={year}
              size={size}
            />
          ) : (
            createPortal(
              <PopoverDatePiker
                style={style}
                refPopover={refPopUp}
                handleResetDate={handleResetDate}
                handleClose={handleClose}
                curentValue={curentValue}
                handleNextMonth={handleNextMonth}
                month={month}
                setCurentValue={handleBeforeUpdate}
                year={year}
                size={size}
              />,
              document.body
            )
          ))}
      </div>
      {!disableMessage && error && (
        <div className="text-color-error text-sm">{error}</div>
      )}
    </div>
  );
};

export default DatePicker;
