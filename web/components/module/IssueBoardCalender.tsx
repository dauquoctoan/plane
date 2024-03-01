import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IPositionResult } from '@/hooks';
import { IItemDate, size } from '../ui/datepicker/datePicker';
import Line from '../ui/line';

interface IProps {
    curentValue?: IItemDate;
}

const IssueBoardCalendar: React.FC<IProps> = () => {
    const [curentValue, setCurentValue] = useState<IItemDate | undefined>(
        undefined,
    );
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
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

    return (
        <div className="rounded shadow-theme-primary bg-theme-primary w-full h-max-body flex flex-col">
            <div className="flex items-center p-2 justify-between text-base border-b border-r">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <FaChevronLeft
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                handleNextMonth(-1);
                            }}
                        />
                        <FaChevronRight
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                handleNextMonth(1);
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer select-none">
                        <span>{mos[month]}</span>
                        <span>{year}</span>
                    </div>
                </div>
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
                >
                    <div className="cursor-pointer p-2 bg-theme-secondary rounded text-sm select-none hover:bg-color-special-secondary">
                        Today
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-7 text-sm border-b box-border">
                {day.map((e, i) => (
                    <div
                        key={i}
                        className={`select-none box-border flex justify-end px-2 py-3 items-center cursor-pointer border-r ${
                            curentDate.getDay() == i &&
                            month == curentDate.getMonth() &&
                            year == curentDate.getFullYear()
                                ? 'bg-color-special-secondary'
                                : ''
                        }`}
                    >
                        {e}
                    </div>
                ))}
            </div>
            <div className="w-full grid grid-cols-7 text-sm flex-1">
                {getDate(month, year).map((item, index) => (
                    <div
                        key={index}
                        // onClick={() => {
                        //     setCurentValue(item);
                        // }}
                        className={`relative border-r border-b pt-4 px-2 box-border select-none`}
                    >
                        {curentValue &&
                            curentValue.date == item.date &&
                            curentValue.month == item.month &&
                            curentValue?.year == item.year && (
                                <div className="absolute rounded-full text-theme-primary top-1 left-1 w-[20px] h-[20px] flex items-center justify-center bg-color-special-primary">
                                    <FaCheck />
                                </div>
                            )}

                        <div className="flex cursor-pointer justify-end w-full">
                            {item.date}
                        </div>
                        <div></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IssueBoardCalendar;
