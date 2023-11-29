import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';
import PopoverDatePiker from './popoverDatePicker';
import { ICurentFieldProps } from '../types/form';

export interface IItemDate{
    date: number;
    month: number;
    year: number;
}

export interface Iprops{
    onChange?:(res?:string)=> void
    defaultDate?: string;
    children?: ReactElement | string; 
    value?: any;
    formatDate?:formatDate;
}

type formatDate = 'DD/MM/YYY'|'YYY/DD/MM'|'MM/DD/YYY';

type ICurentField = Iprops & ICurentFieldProps;

export function formartDate(type: formatDate | undefined, value: IItemDate): string{
    switch (type) {
        case 'DD/MM/YYY':
            return `${value.date}/${value.month+1}/${value.year}`
        case 'MM/DD/YYY':
            return `${value.month+1}/${value.date}/${value.year}`
        case 'YYY/DD/MM':
            return `${value.year}/${value.date}/${value.month+1}`
        default:
            return `${value.date}/${value.month+1}/${value.year}`
    }
}

function convertStringToDateObj(value: string):IItemDate{
    debugger
    const curentDate = new Date(value)
    return {
        date: curentDate.getDate(),
        month: curentDate.getMonth(),
        year: curentDate.getFullYear(),
    };
}

const DatePicker:React.FC<ICurentField> = ({onChange, defaultDate, children, error, disableMessage, value, formatDate }) => {
    const [open, setOpen] = useState(false);
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [curentValue, setCurentValue] = useState<IItemDate | undefined>(defaultDate && convertStringToDateObj(defaultDate) || undefined);

    function handleNextMonth(next:number){
        const monthUpdate = month + next;

        if(monthUpdate < 0){
            setMonth(11);
            setYear(year - 1);
            return 0;
        }

        if(monthUpdate > 11){
            setMonth(1);
            setYear(year + 1);
            return 0;
        }

        setMonth(monthUpdate);
    }

    function handleClosePopUp(){
        if(open){
            setTimeout(()=>{
                setOpen(false);
            },10)
        }
    }

    function handleResetDate(){
        setMonth(new Date().getMonth());
        setYear(new Date().getFullYear());
    }

    useEffect(()=>{
        if(open) handleClosePopUp();
        onChange && onChange(curentValue && formartDate(formatDate, curentValue));
    },[curentValue])

    useEffect(()=>{
        if(!open && !curentValue) handleResetDate();
    },[open])

    function getItem(curentValue:IItemDate){
        return <div className='flex items-center gap-1'><span>{formartDate(formatDate, curentValue)}</span> <IoCloseCircleOutline onClick={(e:any)=>{ setCurentValue(undefined); e.stopPropagation()}}/></div>
    }

    useEffect(()=>{
        if(!value){
            setCurentValue(undefined)
        }
    },[value])
  return (
    <div>
        <div className={`relative w-fit ${error ? 'border border-color-warning' : 'border'} hover:bg-theme-secondary rounded select-none cursor-pointer px-2 text-sm font-medium`}>
            <div onClick={()=>{
                setOpen(!open);
            }} className={`w-full text-[12px] font-normal flex items-center py-[3px] gap-1`}><AiOutlineCalendar />{curentValue ? getItem(curentValue) : children}</div>
            {
                open && (
                    <PopoverDatePiker handleResetDate={handleResetDate} handleClose={handleClosePopUp} curentValue={curentValue} handleNextMonth={handleNextMonth} month={month} setCurentValue={setCurentValue} year={year} />
                )
            }
        </div>
        {!disableMessage && error && <div className="text-color-warning text-sm">{error}</div>}
    </div>
  )
}

export default DatePicker