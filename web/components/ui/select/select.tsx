import React, { ReactElement, memo, useEffect, useRef, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { ICurentFieldProps } from '../types/form';
import SelectPopup from './selectPopup';

export type FontSize =
    | 'text-sm'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-[12px]';

export interface IProps extends ICurentFieldProps {
    children?: ReactElement | string;
    options?: IOptionItem[] | string[];
    defaultValue?: string;
    iconActive?: ReactElement;
    isIconCheck?: boolean;
    placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
    onChange?: (value: string | number) => void;
    isSearch?: boolean;
    customeSelected?: (res: Item) => ReactElement | string;
    isClear?: boolean;
    className?: string;
    fontSize?: FontSize;
    moreItem?: ReactElement;
    value?: string;
}

export interface IOptionItem {
    icon?: ReactElement;
    name: string;
    key?: string;
}

interface IItemSelect {
    item: Item;
    setValue?: (e: string) => void;
    isActive?: boolean;
    setOpen?: (e: boolean) => void;
    iconActive?: ReactElement;
    isIconCheck?: boolean;
    isClear?: boolean;
    className?: string;
    fontSize: FontSize;
}

export type Item = IOptionItem | string;

export type ICurentField = IProps & ICurentFieldProps;

export const ItemSelect: React.FC<IItemSelect> = ({
    item,
    setValue,
    isActive,
    iconActive,
    isIconCheck,
    isClear,
    className,
    fontSize,
}) => {
    return (
        <div
            onClick={() => {
                setValue &&
                    setValue(typeof item === 'string' ? item : item.key || '');
            }}
            className={`hover:bg-theme-secondary ${fontSize} mb-1 last:mb-0 gap-1 select-none ${
                className || ''
            } cursor-pointer flex items-center justify-between gap-2 px-2 py-1 ${
                isActive ? 'bg-color-special-secondary' : ''
            } rounded`}
        >
            {typeof item === 'string' ? (
                item
            ) : (
                <div className="flex-1 flex items-center gap-1 overflow-hidden">
                    {item?.icon && <div className="w-fit">{item.icon}</div>}
                    <div className="flex-1 cursor-pointer text-ellipsis overflow-hidden">
                        {item.name}
                    </div>
                </div>
            )}
            {isActive && isIconCheck && iconActive}
            {isClear && (
                <IoCloseCircleOutline
                    onClick={(e: MouseEvent) => {
                        e.stopPropagation();
                        setValue && setValue('');
                    }}
                    className={`cursor-pointer ${fontSize ? fontSize : ''}`}
                />
            )}
        </div>
    );
};

function getCurentItem(lsResult: Item[], value: string): Item | undefined {
    return lsResult.find((item) => {
        if (typeof item == 'string') return item === value;
        else return item.key === value;
    });
}

const Select: React.FC<ICurentField> = ({
    children,
    disableMessage,
    error,
    options,
    value,
    defaultValue,
    className,
    moreItem,
    iconActive,
    fontSize = 'text-lg',
    isIconCheck,
    placement,
    onChange,
    isSearch = false,
    isClear,
    customeSelected,
}) => {
    const [open, setOpen] = useState(false);
    const [curentValue, setCurentValue] = useState<string>(defaultValue || '');
    const [lsResult, setResult] = useState(options || []);
    const refBtn = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            onChange && onChange(curentValue);
        }, 200);
        setOpen(false);
    }, [curentValue]);

    useEffect(() => {
        options && setResult(options);
    }, [options]);

    useEffect(() => {
        defaultValue && setCurentValue(defaultValue);
    }, []);

    useEffect(() => {
        if (!open) {
            options && setResult(options);
        }
    }, [open]);

    useEffect(() => {
        if (value !== undefined && value !== curentValue) {
            setCurentValue(value);
        }
    }, [value]);

    const curentItemSelected = getCurentItem(options || [], curentValue);

    return (
        <div className="relative">
            <div
                onClick={() => {
                    setOpen(true);
                }}
                ref={refBtn}
                className={`${
                    error ? 'border border-color-error' : 'border'
                } rounded hover:bg-theme-secondary cursor-pointer`}
            >
                {(curentItemSelected &&
                    customeSelected &&
                    customeSelected(curentItemSelected)) ||
                    (curentItemSelected && (
                        <ItemSelect
                            fontSize={fontSize}
                            setValue={setCurentValue}
                            className={className}
                            isClear={isClear}
                            item={curentItemSelected}
                        />
                    )) ||
                    children || (
                        <div className="w-[70px] h-[24px] rounded bg-theme-primary cursor-default"></div>
                    )}
            </div>
            {!disableMessage && error && (
                <div className="text-color-error text-sm">{error}</div>
            )}
            {open && (lsResult.length > 0 || isSearch) && (
                <SelectPopup
                    fontSize={fontSize}
                    isSearch={isSearch}
                    lsResult={lsResult}
                    refBtn={refBtn}
                    setOpen={setOpen}
                    options={options}
                    setResult={setResult}
                    moreItem={moreItem}
                    iconActive={iconActive}
                    isClear={isClear}
                    isIconCheck={isIconCheck}
                    placement={placement}
                    className={className}
                    curentValue={curentValue}
                    defaultValue={defaultValue}
                    customeSelected={customeSelected}
                    disableMessage={disableMessage}
                    setCurentValue={setCurentValue}
                />
            )}
        </div>
    );
};

export default Select;
