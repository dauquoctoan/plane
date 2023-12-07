'use client';
import React, { useEffect, useId, useState, useRef } from 'react';
import {
    UseFormRegister,
    FieldValues,
    UseFormSetValue,
    RegisterOptions,
} from 'react-hook-form';
import Message from '../message';
import ListResult from './result';
import { createMessageForm } from '@/helpers/createMessageForm';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import FuzzySearch from 'fuzzy-search';

interface IProps {
    label?: string;
    id?: string;
    placeholder?: string;
    error?: FieldValues;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    type?: string;
    wrClassName?: string;
    data?: string[];
    nameForm?: string;
    keyForm?: string;
    setValue?: UseFormSetValue<any>;
    validator?: RegisterOptions<any, any>;
    register?: UseFormRegister<any>;
    defaultValue?: string;
}

const AutoComplete: React.FC<IProps> = ({
    label,
    id,
    placeholder,
    defaultValue,
    error,
    className,
    size = 'md',
    nameForm,
    setValue,
    wrClassName,
    data = [],
    register,
    keyForm,
    validator,
    ...rest
}) => {
    const [value, setValueInput] = useState<string>(defaultValue || '');
    const [isPopUp, setIsPopUp] = useState<boolean>(false);
    const [lsResult, setLsResult] = useState<string[]>(data || []);
    const [index, setIndex] = useState<number>(0);
    const uuid = useId();
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSearch(value: string) {
        setValueInput(value);
        const searcher = new FuzzySearch(data, [''], {});
        setLsResult(searcher.search(value));
    }

    function handleWhenClickBlur(e: any) {
        if (e.target.getAttribute('datatype') !== uuid) {
            setIsPopUp(false);
        }
    }

    useEffect(() => {
        if (defaultValue && setValue) setValue(keyForm || '', defaultValue);
        document.addEventListener('click', handleWhenClickBlur);
        return () => {
            document.removeEventListener('click', handleWhenClickBlur);
        };
    }, []);

    const handleUpdateAndClosePopUp = (content: string) => {
        setValue && setValue(keyForm || '', content);
        setValueInput(content);
        setTimeout(() => {
            setIsPopUp(false);
        }, 100);
    };

    return (
        <div className={`flex flex-col ${wrClassName}`}>
            <div>
                {label && (
                    <label className="font-semibold" htmlFor={id}>
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        ref={inputRef}
                        autoComplete="off"
                        {...rest}
                        {...(register && register(keyForm || '', validator))}
                        datatype={uuid}
                        onKeyDown={(e) => {
                            const length = lsResult.length;
                            if (length > 0) {
                                if (40 == e.keyCode)
                                    setIndex(
                                        index + 1 > length - 1 ? 0 : index + 1,
                                    );
                                if (38 == e.keyCode)
                                    setIndex(
                                        index - 1 < 0 ? length - 1 : index - 1,
                                    );
                                if (13 == e.keyCode) {
                                    handleUpdateAndClosePopUp(lsResult[index]);
                                }
                            }
                        }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            handleSearch(e.target.value);
                            register && register(keyForm || '').onChange(e);
                        }}
                        value={value}
                        onFocus={() => {
                            setIsPopUp(true);
                        }}
                        placeholder={placeholder}
                        id={id}
                        className={`w-full  border ${
                            error && error[keyForm ?? '']
                                ? 'border-color-error'
                                : ''
                        }  rounded outline-none p-1 ${
                            size == 'sm' ? '' : size == 'md' ? '' : ''
                        } ${className || ''}`}
                    />
                    {lsResult.length > 0 && isPopUp ? (
                        <FiChevronUp className="absolute right-2 top-[25%] animate-popUp" />
                    ) : (
                        <FiChevronDown className="absolute right-2 top-[25%] animate-popUp" />
                    )}
                    {lsResult.length > 0 && isPopUp && (
                        <ListResult
                            index={index}
                            handleUpdateAndClosePopUp={
                                handleUpdateAndClosePopUp
                            }
                            uuid={uuid}
                            lsResult={lsResult}
                        />
                    )}
                </div>
            </div>
            {error && error[keyForm ?? ''] && (
                <Message>
                    {createMessageForm(nameForm || '', error[keyForm ?? ''])}
                </Message>
            )}
        </div>
    );
};

export default AutoComplete;
