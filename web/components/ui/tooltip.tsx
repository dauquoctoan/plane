import React, { ReactElement, useRef, useState } from 'react'
import { createPortal } from 'react-dom';


interface IProps{
    children: ReactElement|ReactElement[]|string;
    title: ReactElement|ReactElement[]|string;
}

const Tooltip:React.FC<IProps> = ({children, title}) => {
  const refTooltip = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<DOMRect | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div 
        ref={refTooltip}
        onMouseLeave={()=>{setOpen(false)}}
        onMouseOver={(e:any)=>{
           setPosition(e.target.getBoundingClientRect());
           setOpen(true);
        }}>
        {children}
        {open && createPortal(
            <div 
                className='px-2 absolute bg-theme-text-primary text-theme-primary rounded translate-x-[-100%]' 
                style={{top: position?.top && position?.top, left: position?.left}}
            >
                {title}
            </div>,
            document.body
        )}
    </div>
  )
}

export default Tooltip