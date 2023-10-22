import { removeListener } from 'process';
import React, { useEffect, useState } from 'react';
import fuzzysort from 'fuzzysort'

interface IProps{
    label?: string;
    id?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    size?: 'sm'|'md'|'lg';
    type?: string;
    wrClassName?: string;
}

interface IItem{
    name: string,
    value: string;
}

interface IItemFuzzysort{
    target: string,
}

const DefaultLsResult:IItem[] = [
    {
        name: 'item 1',
        value: '1'
    },
    {
        name: 'item 2',
        value: '2'
    },
    {
        name: 'item 3',
        value: '3'
    },
    {
        name: 'item 1',
        value: '1'
    },
    {
        name: 'item 2',
        value: '2'
    },
    {
        name: 'item 3',
        value: '3'
    },
    {
        name: 'item 1',
        value: '1'
    },
    {
        name: 'item 2',
        value: '2'
    },
    {
        name: 'item 3',
        value: '3'
    },
    {
        name: 'item 1',
        value: '1'
    },
    {
        name: 'item 2',
        value: '2'
    },
    {
        name: 'item 3',
        value: '3'
    },
]

const AutoComplete: React.FC<IProps> = ({label, id, placeholder, error, className, size='md', wrClassName}) => {
  
  const [value, setValue] = useState<string>('');
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [lsResult, setLsResult] = useState<IItem[]>(DefaultLsResult)

  function handleSearch(value: string){
    setValue(value);
    const filterData = DefaultLsResult.filter((e:IItem)=>e.name.includes(value))
    // const results:KeyResults<IItem> = fuzzysort.go(value, DefaultLsResult, {key:'name'})
    // console.log(results)
    setLsResult(filterData);
  }

  function handleBlur(e:any){
    if(e.target.getAttribute('datatype')!=='select'){
        setIsPopUp(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click', handleBlur);
    return ()=>{ document.removeEventListener('click', handleBlur) }
  },[])

  return (
    <div className={`relative flex flex-col ${wrClassName}`}>
        {label&&(<label className='font-semibold' htmlFor={id}>{label}</label>)}
        <div>
            <input datatype="select" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleSearch(e.target.value)}} value={value} onFocus={()=>{setIsPopUp(true)}} placeholder={placeholder} id={id} className={`w-full border rounded outline-none p-1 ${size == 'sm' ? '' : size == 'md' ? '' : ''} ${className}`}/>
            {
                lsResult.length > 0 && 
                (<div datatype="select" className={`max-h-[200px] overflow-y-auto cursor-pointer bg-theme-primary rounded-md box-border border absolute top-[106%] shadow-theme-primary left-0 right-0 ${isPopUp ? 'block' : 'hidden'} animate-pop-up`}>
                    {
                        lsResult.map((item, index)=><div key={index} datatype="select" onClick={()=>{
                            setValue(item.name)
                        }} className='overflow-x-hidden select-none itemselect p-1 hover:bg-theme-secondary'>{item.name}</div>)
                    }
                </div>)
            }
        </div>
        {error &&(<div>{error}</div>)}
    </div>
  )
}

export default AutoComplete