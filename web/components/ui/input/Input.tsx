import React, { useEffect } from 'react'
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form'
import Message from '../message';
import { createMessageForm } from '@/helpers/createMessageForm';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    label?: string;
    id?: string;
    placeholder?: string;
    error?: FieldValues;
    className?: string;
    sizeInput?: 'sm'|'md'|'lg';
    keyForm?:string; 
    typeInput?: string;
    wrClassName?: string;
    validator?: FieldValues;
    register?: UseFormRegister<FieldValues>
    defaultValue?: string;
    setValue?:UseFormSetValue<FieldValues>;
    nameForm?: string;
    onChangeCB?: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input:React.FC<Props> = ({label, id, placeholder, onChangeCB, defaultValue, setValue, error, nameForm, className, sizeInput='md', wrClassName, keyForm, register, validator, ...rest}) => {
  useEffect(()=>{
    if(defaultValue && setValue)setValue(keyForm ?? '', defaultValue);
  },[])

  return (
    <div className={`flex flex-col ${wrClassName}`}>
        {label && (<label className='font-semibold' htmlFor={id}>{label}</label>)}
        <input
          defaultValue={defaultValue}
          autoComplete='off'
          {...(register && register(keyForm ?? "", validator))}
          placeholder={placeholder} 
          id={id}
          onChange={(e)=> {
            register && register(keyForm || '').onChange(e);
            onChangeCB && onChangeCB(e);
          }}
          className={`border rounded ${(error && error[keyForm || '']) ?'border-color-warning' : ''}  outline-none p-1 ${sizeInput == 'sm' ? '' : sizeInput == 'md' ? '' : ''} ${className}`}
          {...rest}
        />
        {error && error[keyForm||''] && (<Message>{createMessageForm(nameForm || '',error[keyForm ||''])}</Message>)}
    </div>
  )
}

export default Input