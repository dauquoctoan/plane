import FuzzySearch from 'fuzzy-search';
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { BsCheck2 } from 'react-icons/bs';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface ISelect{
    children?: ReactElement | string;
    options: IOptionItem[] | string[];
    defaultValue?: IOptionItem | string;
    iconActive?: ReactElement;
    isIconCheck?: boolean;
    placement?: 'bottomLeft'|'bottomRight'|'topLeft'|'topRight';
    onChange?: (value: IOptionItem | string)=> void;
    isSearch?: boolean;
    isClear?: boolean;
}

export interface IOptionItem {
    icon: ReactElement;
    value: string;
    key?: string | number;
}

interface IItemSelect{
    item: IOptionItem | string;
    setValue?: (e:IOptionItem | string)=>void
    isActive?: boolean;
    setOpen?:(e:boolean)=>void;
    iconActive?: ReactElement;
    isIconCheck?:boolean;
    isClear?: boolean;
}

const ItemSelect:React.FC<IItemSelect>=({item, setValue, isActive, setOpen, iconActive, isIconCheck, isClear})=>{
    return (
        <div 
            onClick={()=>{setValue && setValue(item)}} 
            className={`hover:bg-theme-secondary flex items-center justify-between gap-2 px-2 py-1 ${isActive?'bg-color-special-secondary':''} rounded`}
        >
            {typeof item === 'string' ? item : (
                <div className='flex items-center gap-2'>{item.icon}<label>{item.value}</label></div>
            )}
            {isActive && isIconCheck && iconActive}
            {isClear && <IoCloseCircleOutline onClick={(e: MouseEvent)=>{
                e.stopPropagation();
                setValue && setValue('');
            }} className="cursor-pointer"/>}
        </div>
    )
}

const Select:React.FC<ISelect> = ({children, options, defaultValue, iconActive = <BsCheck2/>, isIconCheck, placement='bottomLeft', onChange, isSearch=false, isClear}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<IOptionItem | string>(defaultValue || '');
  const [lsResult, setResult] = useState(options);
  const refLsREsult = useRef<HTMLDivElement>(null);
  const refBtn = useRef<HTMLDivElement>(null);


  function checkActive(item:IOptionItem | string, curent:IOptionItem | string){
    if(typeof item==='string' || typeof curent=='string' ) return item === curent;
    else return item.value === curent.value
  }
  

  const handleSearch = (search:string)=>{
    const searcher = new FuzzySearch([...options], ['', 'value'], {
        caseSensitive: true,
    });
    setResult(searcher.search(search) as any);
  }

  const styleOptions = {
    bottomLeft:'top-[100%] left-0 mt-1',
    bottomRight:'top-[100%] right-0 mt-1',
    topRight:'bottom-[100%] right-0 mb-1',
    topLeft:'bottom-[100%] left-0 mb-1',
  }

  useEffect(()=>{
    onChange && onChange(value);
    setOpen(false);
  },[value])

  const handleClickOverlay = (e:any)=>{
    if(refBtn.current?.contains(e.target)){
        setOpen(true);
        return;
    }

    if(!refLsREsult.current?.contains(e.target as any)){
        setOpen(false); 
        return;
    }
  }

  useEffect(()=>{
    document.addEventListener('click', handleClickOverlay)
    return ()=>{
        document.removeEventListener('click', handleClickOverlay)
    }
  },[])

  const curentStyle = styleOptions[placement];

  return (
    <div className='relative'>
        <div
            ref={refBtn}
            className='border rounded hover:bg-theme-secondary'
        >
            {(value && <ItemSelect setValue={setValue} isClear={isClear} item={value}/>) || children || <ItemSelect setValue={setValue} isClear={isClear} item={options[0]}/>}
        </div>
        {open && (
            <div ref={refLsREsult} className={`bg-theme-primary border px-2 py-1 absolute rounded animate-pop-up z-50 ${curentStyle}`}>
                {
                    isSearch && (
                        <div className='py-2'>
                            <input placeholder='Type to search' onChange={(e)=>{handleSearch(e.target.value)}} className='outline-none border rounded'/>
                        </div>
                    )
                }
                {lsResult.map((item, index)=>(
                    <ItemSelect 
                        isIconCheck={isIconCheck} 
                        iconActive={iconActive} 
                        setOpen={setOpen} 
                        isActive={value ? checkActive(item, value) : index == 0 } 
                        setValue={setValue} key={index} 
                        item={item}
                    />
                ))}
            </div>
        )}
    </div>                      
  )
}

export default Select