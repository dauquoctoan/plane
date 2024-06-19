import { FC, useEffect, useRef, useState } from "react";

export interface ITabs{
    option: {
        name: string,
        value: string
    }[];
    onchange: (e:string)=>void;
    defaultTab?:number;
}

const TabAnimation:FC<ITabs> = ({defaultTab=1, option, onchange})=> {
    const box = useRef<HTMLDivElement>(null)
    const active = useRef<HTMLDivElement>(null)

    const [tab, setTab] = useState<{index:number, value:string}>({
        index:defaultTab,
        value:option[defaultTab].value
    });

    useEffect(()=>{
        if(box.current && active.current !== undefined){
            const width = (box.current.offsetWidth / option.length);
            // @ts-ignore: Unreachable code error
            active.current.style.width = `${Math.floor(100/option.length)}%`;
            // @ts-ignore: Unreachable code error
            active.current.style.transform = `translate(${tab.index}00%, 0%)`
        }
    },[tab.value, tab.index, option.length])


    useEffect(()=>{
        if(!option[tab.index] || option[tab.index].value != tab.value) {
            setTab({value:option[defaultTab].value, index:defaultTab})
            onchange(option[defaultTab].value)
        }
    })

    return <div className='p-1 rounded border'>
        <div ref={box} className='relative justify-between transition-all flex items-center'>{
            option.map((item,index)=>{
                return <div key={index} onClick={()=>{
                    onchange(item.value);
                    setTab({index:index, value:item.value});
                }} className={`${index == tab.index ? "text-color-special-primary":""} 
                    py-1 text-xs font-semibold flex items-center justify-center flex-1 cursor-pointer text-center`}>
                    {item.name}
                </div>
            })}
            <div ref={active} className='top-0 transition-all ease-in-out absolute h-full rounded bg-color-special-secondary'></div>
        </div>
    </div>
}

export default TabAnimation