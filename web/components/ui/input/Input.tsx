'use client';
import React, { useEffect, memo, ReactElement } from 'react';
import {
    UseFormRegister,
    FieldValues,
    UseFormSetValue,
    RegisterOptions,
    FieldErrors,
    FieldError,
    Merge,
    FieldErrorsImpl,
} from 'react-hook-form';
import Message from '../message';
import { createMessageForm } from '@/helpers/createMessageForm';

interface Props
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
        HTMLInputElement | HTMLTextAreaElement
    > {
    isTextArea?: boolean;
    label?: string;
    id?: string;
    placeholder?: string;
    error?: FieldErrors<FieldValues>;
    className?: string;
    sizeInput?: 'sm' | 'md' | 'lg';
    keyForm?: string;
    typeInput?: string;
    wrClassName?: string;
    validator?: RegisterOptions<FieldValues, string>;
    register?: UseFormRegister<any>;
    defaultValue?: string;
    setValue?: UseFormSetValue<any>;
    nameForm?: string;
    onChangeCB?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    suffix?: () => ReactElement;
}

const Input: React.FC<Props> = ({
    label,
    id,
    placeholder,
    onChangeCB,
    isTextArea = false,
    defaultValue,
    setValue,
    error,
    nameForm,
    className,
    sizeInput = 'md',
    wrClassName,
    keyForm,
    register,
    validator,
    suffix,
    ...rest
}) => {
    useEffect(() => {
        if (defaultValue && setValue) setValue(keyForm ?? '', defaultValue);
    }, []);
    const err:
        | FieldError
        | Merge<FieldError, FieldErrorsImpl<any>>
        | undefined = error && error[keyForm || ''];

    return (
        <div className={`relative flex flex-col ${wrClassName}`}>
            {label && (
                <label className="font-semibold" htmlFor={id}>
                    {label}
                </label>
            )}
            {isTextArea ? (
                <textarea
                    defaultValue={defaultValue}
                    autoComplete="off"
                    {...(register && register(keyForm ?? '', validator))}
                    placeholder={placeholder}
                    id={id}
                    onChange={(e: any) => {
                        register && register(keyForm || '').onChange(e);
                        onChangeCB && onChangeCB(e);
                    }}
                    className={`select-none border rounded ${error && error[keyForm || '']
                        ? 'border-color-error'
                        : ''
                        } outline-none p-1 ${sizeInput == 'sm' ? '' : sizeInput == 'md' ? '' : ''
                        } ${className}`}
                    {...(rest as any)}
                />
            ) : (
                <input
                    defaultValue={defaultValue}
                    autoComplete="off"
                    {...(register && register(keyForm ?? '', validator))}
                    placeholder={placeholder}
                    id={id}
                    onChange={(e) => {
                        register && register(keyForm || '').onChange(e);
                        onChangeCB && onChangeCB(e);
                    }}
                    className={`select-none border rounded ${error && error[keyForm || '']
                        ? 'border-color-error'
                        : ''
                        }  outline-none p-1 ${sizeInput == 'sm' ? '' : sizeInput == 'md' ? '' : ''
                        } ${className}`}
                    {...(rest as any)}
                />
            )}
            {err && keyForm && (
                <Message>{createMessageForm(keyForm, err) || ''}</Message>
            )}
            {suffix && suffix()}
        </div>
    );
};

export default memo(Input);
