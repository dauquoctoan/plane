import React from 'react'


interface Props{
    label?: string;
    id?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    size?: 'sm'|'md'|'lg';
    type?: string;
    wrClassName?: string;
}

const Input:React.FC<Props> = ({label, id, placeholder, error, className, size='md', wrClassName}) => {
  return (
    <div className={`flex flex-col ${wrClassName}`}>
        {label&&(<label className='font-semibold' htmlFor={id}>{label}</label>)}
        <input placeholder={placeholder} id={id} className={`border rounded outline-none p-1 ${size == 'sm' ? '' : size == 'md' ? '' : ''} ${className}`}/>
        {error &&(<div>{error}</div>)}
    </div>
  )
}

export default Input