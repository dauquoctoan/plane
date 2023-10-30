import * as React from 'react'

type typeButton = 'primary' | 'default' | 'dashed' | 'disable' | 'text' | 'link';

interface IColoritem{
    bg: string;
    bgHover: string;
    border: string;
    text: string;
    opacity?: string;
}

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    typeBTN?: typeButton;
    disable?: boolean;
    text?: string;
    className?: string;
    wrClassName?:  string;
}

interface IColor{ 
    [key: string]: IColoritem 
};

const Button:React.FC<IProps> = ({text, disable = false, typeBTN='default', className, wrClassName,...rest}) => {
  const color:IColor = {
    primary:{
        bg: 'bg-color-special-primary',
        border:'border-color-special-primary',
        text: 'text-white',
        bgHover: disable ? '': 'hover:opacity-[0.9]',
        opacity: disable ? 'opacity-[.5]' : 'opacity-[1]'
    },
    default:{
        bg: 'bg-theme-secondary',
        border:'border-theme-secondary',
        text: '',
        bgHover: disable ? '': 'hover:opacity-[0.9]',
        opacity: disable ? 'opacity-[.5]' : 'opacity-[1]'
    },
    dashed:{
        bg: 'red',
        border:'red',
        text: 'red',
        bgHover: 'red',
    },
    disable:{
        bg: 'red',
        border:'red',
        text: 'red',
        bgHover: 'red',
    },
    text:{
        bg: 'red',
        border:'red',
        text: 'red',
        bgHover: 'red',
    },
    link:{
        bg: 'red',
        border:'red',
        text: 'red',
        bgHover: 'red',
    }
  }

  const {bg, bgHover, border, text:textColor, opacity} = color[typeBTN];

  const refBtn = React.useRef<HTMLDivElement>(null);

  function handleAppenChild(){
    const newItem = document.createElement('div');
    
    newItem.setAttribute('class', `absolute inset-0 animate-ping ${bg} z-0 rounded`)

    refBtn.current?.insertBefore(newItem, refBtn.current?.firstChild);

    setTimeout(()=>{
        newItem.remove();
    },1000)
  }

  return (
    <div 
        onClick={
        ()=>{
            if(!disable)handleAppenChild();
        }}
        ref={refBtn} className={`relative w-fit ${wrClassName}`}>
        <button
            type='submit'
            className={`${disable ? 'cursor-not-allowed' : 'cursor-pointer'} ${bg} ${bgHover} ${border} ${textColor} ${opacity} relative z-2 rounded px-3 py-1 border select-none ${className} m-0`} 
            {...rest}
        >
            {text}
        </button>
    </div>
  )
}

export default Button