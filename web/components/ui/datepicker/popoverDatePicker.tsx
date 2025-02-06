import React, { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Line from '../line';
import { IItemDate, size } from './datePicker';
import { IPositionResult } from '@/hooks';

interface IProps {
  handleNextMonth: (a: number) => void;
  setCurentValue: (a: IItemDate) => void;
  month: number;
  year: number;
  curentValue?: IItemDate;
  handleClose: () => void;
  size?: size;
  handleResetDate: () => void;
  refPopover: React.RefObject<HTMLDivElement>;
  style: IPositionResult;
}

const PopoverDatePiker: React.FC<IProps> = ({
  handleNextMonth,
  month,
  year,
  setCurentValue,
  curentValue,
  handleResetDate,
  refPopover,
  style,
  size = 'sm',
}) => {
  const curentDate = new Date();
  const mos = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Novemeber',
    'Decemeber',
  ];
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  function getDate(month: number, year: number) {
    const firstDay = new Date(year, month, 1);
    const firstNextDay = new Date(year, month + 1, 1);
    const lastPrevDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1, 0);

    function getObCurentDate(first: number, last: number): IItemDate[] {
      const arr = [];
      for (let i = first; i <= last; i++) {
        arr.push({
          date: i,
          month,
          year,
        });
      }

      return arr;
    }

    function getPrevDate(day: number): IItemDate[] {
      if (day == 6) return [];

      let prevDate = lastPrevDay.getDate();
      const arr = [];
      for (let i = 0; i <= day; i++) {
        arr.unshift({
          date: prevDate,
          month: lastPrevDay.getMonth(),
          year: lastPrevDay.getFullYear(),
        });
        prevDate--;
      }

      return arr;
    }

    function getNextDate(day: number): IItemDate[] {
      if (day == 0) return [];

      let curentDay = 1;
      const arr = [];
      for (let i = day; i <= 6; i++) {
        arr.push({
          date: curentDay,
          month: firstNextDay.getMonth(),
          year: firstNextDay.getFullYear(),
        });
        curentDay++;
      }

      return arr;
    }

    return [
      ...getPrevDate(lastPrevDay.getDay()),
      ...getObCurentDate(firstDay.getDate(), lastDay.getDate()),
      ...getNextDate(firstNextDay.getDay()),
    ];
  }

  const styles = {
    sm: {
      fontSize: 12,
      tittleFontSize: 14,
      fontWeith: 500,
      tittleFontWeith: 500,
      padding: 4,
    },
    md: {
      fontSize: 12,
      tittleFontSize: 16,
      fontWeith: 500,
      tittleFontWeith: 500,
      padding: '',
    },
    lg: {
      fontSize: 12,
      tittleFontSize: 16,
      fontWeith: 500,
      tittleFontWeith: 500,
      padding: '',
    },
    xl: {
      fontSize: 12,
      tittleFontSize: 16,
      fontWeith: 500,
      tittleFontWeith: 500,
      padding: '',
    },
  };  const curentStyle = styles[size];

  return (
    <div
      style={style}
      ref={refPopover}
      className="z-50 absolute top-[100%] w-max left-0 mt-1 rounded border shadow-theme-primary bg-theme-primary animate-popUp origin-top-left"
    >
      <div
        style={{ padding: curentStyle.padding }}
        className="flex items-center p-2 justify-between text-base"
      >
        <FaChevronLeft
          style={{
            fontSize: curentStyle.fontSize,
            fontWeight: curentStyle.fontWeith,
            cursor: 'pointer',
          }}
          onClick={() => {
            handleNextMonth(-1);
          }}
        />
        <div
          style={{
            fontSize: curentStyle.tittleFontSize,
            fontWeight: curentStyle.tittleFontWeith,
          }}
          className="flex items-center gap-2"
        >
          <span>{mos[month]}</span>
          <span>{year}</span>
        </div>
        <FaChevronRight
          style={{
            fontSize: curentStyle.fontSize,
            fontWeight: curentStyle.fontWeith,
            cursor: 'pointer',
          }}
          onClick={() => {
            handleNextMonth(1);
          }}
        />
      </div>
      <Line />
      <div
        style={{ padding: curentStyle.padding }}
        className="w-full grid grid-cols-7 p-2 gap-2 text-sm"
      >
        {day.map((e, i) => (
          <div
            key={i}
            className={`select-none w-8 h-8 flex justify-center items-center cursor-pointer ${
              curentDate.getDay() == i &&
              month == curentDate.getMonth() &&
              year == curentDate.getFullYear()
                ? 'border-b-2 border-color-special-primary'
                : ''
            }`}
          >
            {e}
          </div>
        ))}

        {getDate(month, year).map((item, index) => (
          <div
            key={index}
            style={{
              fontSize: curentStyle.fontSize,
              fontWeight: curentStyle.fontWeith,
            }}
            onClick={() => {
              setCurentValue(item);
            }}
            className={`${
              new Date().getMonth() != item.month
                ? 'text-color-text-sidebar'
                : ''
            } w-8 h-8 flex rounded cursor-pointer justify-center items-center ${
              curentValue &&
              curentValue.date == item.date &&
              curentValue.month == item.month &&
              curentValue?.year == item.year &&
              new Date().getMonth() == item.month
                ? 'bg-color-special-primary text-theme-primary'
                : 'hover:bg-theme-secondary'
            }`}
          >
            {item.date}
          </div>
        ))}
      </div>
      <Line />
      <div
        onClick={() => {
          const date = new Date();
          handleResetDate();
          setCurentValue({
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
          });
        }}
        style={{ padding: curentStyle.padding }}
        className="w-full flex items-center justify-center p-2 hover:bg-theme-secondary"
      >
        <div
          style={{
            fontSize: curentStyle.tittleFontSize,
            fontWeight: curentStyle.tittleFontWeith,
          }}
          className="cursor-pointer"
        >
          Today
        </div>
      </div>
    </div>
  );
};

export default PopoverDatePiker;
