import FuzzySearch from 'fuzzy-search';
import React, { ReactElement, memo, useEffect, useRef, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { ICurentFieldProps } from '../types/form';

type FontSize = 'text-sm' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-[12px]';

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

type Item = IOptionItem | string;

type ICurentField = IProps & ICurentFieldProps;

const ItemSelect: React.FC<IItemSelect> = ({
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
    iconActive = <BsCheck2 />,
    fontSize = 'text-lg',
    isIconCheck,
    placement = 'bottomLeft',
    onChange,
    isSearch = false,
    isClear,
    customeSelected,
}) => {
    const [open, setOpen] = useState(false);
    const [curentValue, setCurentValue] = useState<string>(defaultValue || '');
    const [lsResult, setResult] = useState(options || []);
    const refLsREsult = useRef<HTMLDivElement>(null);
    const refBtn = useRef<HTMLDivElement>(null);

    function checkActive(item: IOptionItem | string, curent: Item) {
        if (typeof item === 'string') return item === curent;
        else if (typeof item === 'object') {
            return item.key === curent;
        }
        return false;
    }

    const handleSearch = (search: string) => {
        if (options) {
            const searcher = new FuzzySearch(
                [...options],
                ['', 'name', 'key'],
                {
                    caseSensitive: false,
                },
            );
            setResult(searcher.search(search) as any[]);
        }
    };

    const styleOptions = {
        bottomLeft: 'top-[100%] left-0 mt-1',
        bottomRight: 'top-[100%] right-0 mt-1',
        topRight: 'bottom-[100%] right-0 mb-1',
        topLeft: 'bottom-[100%] left-0 mb-1',
    };

    useEffect(() => {
        setTimeout(() => {
            onChange && onChange(curentValue);
        }, 200);
        setOpen(false);
    }, [curentValue]);

    useEffect(() => {
        options && setResult(options);
    }, [options]);

    const handleClickOverlay = (e: any) => {
        if (refBtn.current?.contains(e.target)) {
            setOpen(true);
            return;
        }

        if (!refLsREsult.current?.contains(e.target as any)) {
            setOpen(false);
            return;
        }
    };

    useEffect(() => {
        defaultValue && setCurentValue(defaultValue);
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClickOverlay);
        return () => {
            document.removeEventListener('click', handleClickOverlay);
        };
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

    const curentStyle = styleOptions[placement];
    const curentItemSelected = getCurentItem(options || [], curentValue);
    return (
        <div className="relative">
            <div
                ref={refBtn}
                className={`${
                    error ? 'border border-color-warning' : 'border'
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
                <div className="text-color-warning text-sm">{error}</div>
            )}
            {open && (lsResult.length > 0 || isSearch) && (
                <div
                    ref={refLsREsult}
                    className={`bg-theme-primary border py-1 absolute rounded origin-top-left shadow-theme-primary animate-pop-up z-50 ${curentStyle} w-max`}
                >
                    {isSearch && (
                        <div className="py-2 px-2">
                            <input
                                placeholder="Type to search"
                                onChange={(e) => {
                                    handleSearch(e.target.value);
                                }}
                                className={
                                    'outline-none border rounded px-2 py-1 ' +
                                    fontSize
                                }
                            />
                        </div>
                    )}
                    <div className="w-full max-h-[300px] hover-scroll overflow-y-auto px-1">
                        {lsResult.map((item, index) => (
                            <ItemSelect
                                fontSize={fontSize}
                                isIconCheck={isIconCheck}
                                iconActive={iconActive}
                                setOpen={setOpen}
                                isActive={
                                    curentValue
                                        ? checkActive(item, curentValue)
                                        : false
                                }
                                setValue={setCurentValue}
                                key={index}
                                item={item}
                            />
                        ))}
                    </div>
                    <div className="px-2">{moreItem}</div>
                </div>
            )}
        </div>
    );
};

export default Select;
