import React, { ReactElement, memo, useEffect, useRef, useState } from 'react';
import { ICurentFieldProps } from '../types/form';
import SelectPopup from './selectPopup';
import usePopUp from '@/hooks/popUp';
import { createPortal } from 'react-dom';
import { useNoti } from '@/hooks';
import ItemSelect from './itemSelect';
import Tooltip from '../tooltip';
import { mutate } from 'swr';

export type FontSize =
    | 'text-sm'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-[12px]';

export interface IProps extends ICurentFieldProps {
    children?: ReactElement | string;
    options?: IOptionItem[] | string[];
    defaultValue?: string | string[];
    iconActive?: ReactElement;
    isIconCheck?: boolean;
    placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
    onChange?: (value: string | string[]) => void;
    isSearch?: boolean;
    customeSelected?: (res: Item, loading?: boolean) => ReactElement | string;
    isClear?: boolean;
    className?: string;
    disableTooltip?: boolean;
    isMutiple?: boolean;
    isChildren?: boolean;
    fontSize?: FontSize;
    moreItem?: ReactElement;
    value?: string | string[];
    msgUpdateValueFail?: string;
    msgUpdateValueSuccess?: string;
    beforeUpdateValue?: (e: string | string[]) => Promise<any>;
    keyUpdate?: string;
    showMoreText?: boolean;
}

export interface IOptionItem {
    icon?: ReactElement;
    title: string;
    value?: string;
}

export type Item = IOptionItem | string;

export type ICurentField = IProps & ICurentFieldProps;

function getCurentItem(lsResult: Item[], value: string): Item | undefined {
    return lsResult.find((item) => {
        if (typeof item == 'string') return item === value;
        else return item.value === value;
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
    isMutiple = false,
    placement,
    onChange,
    isSearch = false,
    isClear,
    customeSelected,
    keyUpdate,
    showMoreText = true,
    beforeUpdateValue,
    msgUpdateValueSuccess,
    msgUpdateValueFail,

    disableTooltip = false,
}) => {
    const [curentValue, setCurentValue] = useState<string>(
        defaultValue
            ? typeof defaultValue === 'string'
                ? defaultValue
                : defaultValue[0]
            : '',
    );
    const [loading, setLoading] = useState(false);
    const [lsResult, setResult] = useState(options || []);
    const refBtn = useRef<HTMLDivElement>(null);
    const refPopUp = useRef<HTMLDivElement>(null);
    const refClear = useRef<HTMLDivElement>(null);
    const noti = useNoti();

    const [moreValue, setMoreValue] = useState<string[]>(
        typeof defaultValue == 'object' ? defaultValue : [],
    );

    const { open, setOpen, style, handleClose } = usePopUp({
        refPopover: refBtn,
        refPopup: refPopUp,
        refDisable: refClear,
    });

    async function confirm(value: string | string[]) {
        if (beforeUpdateValue) {
            if (keyUpdate) {
                mutate(
                    keyUpdate,
                    async (state: any) => {
                        const result = await beforeUpdateValue(value);
                        if (result) {
                            noti?.success(
                                msgUpdateValueSuccess || 'Update success',
                            );
                            return [result, ...state];
                        } else {
                            noti?.error(msgUpdateValueFail || 'Update error!');
                            return [...state];
                        }
                    },
                    { revalidate: false },
                );
            } else {
                setLoading(true);
                const result = await beforeUpdateValue(value);
                setLoading(false);

                if (result) {
                    noti?.success(msgUpdateValueSuccess || 'Update success');
                } else {
                    noti?.error(msgUpdateValueFail || 'Update error!');
                }
                return result;
            }
        }
    }

    const handleBeforeUpdate = async (value: string) => {
        if (loading) return;
        if (isMutiple) {
            if (moreValue.includes(value)) {
                let isSetData;
                const newData: string[] = moreValue.filter((e) => {
                    return e !== value;
                });

                if (beforeUpdateValue) {
                    isSetData = await confirm(newData);
                }

                if (isSetData || !beforeUpdateValue) {
                    setMoreValue(newData);
                    handleOnChange(newData);
                    newData.length > 0
                        ? setCurentValue(newData[0])
                        : setCurentValue('');
                }
            } else {
                let isSetData;
                const newData = [value, ...moreValue];

                if (beforeUpdateValue) {
                    isSetData = await confirm(newData);
                }

                if (isSetData || !beforeUpdateValue) {
                    setMoreValue(newData);
                    setCurentValue(value);
                    handleOnChange(newData);
                }
            }
        } else {
            if (value !== curentValue && beforeUpdateValue) {
                const result = await confirm(value);
                handleOnChange(value);
                if (!result) return;
            }
            setCurentValue(value);
        }
    };

    async function handeClearField() {
        if (beforeUpdateValue) {
            setLoading(true);
            let result = await beforeUpdateValue(isMutiple ? [] : '');
            setLoading(false);
            if (result) noti?.success('Update success');
            else {
                noti?.error('Update error!');
                return;
            }
        }
        setCurentValue('');
        isMutiple && setMoreValue([]);
    }

    function handleOnChange(value: any) {
        onChange && onChange(value);
        !isMutiple && open && handleClose();
    }

    useEffect(() => {
        options && setResult(options);
    }, [options]);

    useEffect(() => {
        defaultValue &&
            setCurentValue(
                typeof defaultValue == 'string'
                    ? defaultValue
                    : defaultValue[0],
            );
    }, []);

    useEffect(() => {
        if (!open) {
            options && setResult(options);
        }
    }, [open]);

    useEffect(() => {
        if (isMutiple) {
            if (typeof value == 'object' && value.length !== moreValue.length) {
                setCurentValue(value[0] || '');
                setMoreValue(value);
            }
        } else {
            if (
                value !== undefined &&
                value !== curentValue &&
                typeof value === 'string'
            ) {
                setCurentValue(value);
            }
        }
    }, [value]);

    const curentItemSelected = getCurentItem(options || [], curentValue);

    const isOpen = open && (lsResult.length > 0 || isSearch);

    const itemSelected = () => {
        return lsResult.filter((e) => {
            if (typeof e === 'string') {
                return moreValue.includes(e);
            } else {
                return moreValue.includes(e.value || '');
            }
        });
    };

    return (

        <div className="relative">
            <Tooltip
                placement="topCenter"
                title={
                    <div className="text-sm flex p-1 group/pr">
                        {itemSelected().map((e, i) => {
                            return (
                                <div key={i} className="ml-1 group/item group-first/pr:ml-0">
                                    {typeof e == 'string' ? e : e.title}
                                    <span className="group-last/item:hidden">
                                        ,
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                }
                disable={disableTooltip || moreValue.length > 1 ? false : true}
            >
                <div
                    onClick={() => {
                        setOpen(true);
                    }}
                    ref={refBtn}
                    className={`${error ? 'border border-color-error' : 'border'
                        } rounded hover:bg-theme-secondary cursor-pointer`}
                >
                    {(curentItemSelected &&
                        customeSelected &&
                        customeSelected(curentItemSelected, loading)) ||
                        (curentItemSelected && (
                            <ItemSelect
                                updateValue={handleBeforeUpdate}
                                fontSize={fontSize}
                                setValue={setCurentValue}
                                className={className}
                                isClear={isClear}
                                refClear={refClear}
                                moreValue={moreValue}
                                loading={loading}
                                showMoreText={showMoreText}
                                handleClear={handeClearField}
                                item={curentItemSelected}
                            />
                        )) ||
                        children || (
                            <div className="w-[70px] h-[24px] rounded bg-theme-primary cursor-default"></div>
                        )}
                </div>
            </Tooltip>
            {!disableMessage && error && (
                <div className="text-color-error text-sm">{error}</div>
            )}
            {isOpen &&
                createPortal(
                    <SelectPopup
                        moreValue={moreValue}
                        updateValue={handleBeforeUpdate}
                        fontSize={fontSize}
                        isSearch={isSearch}
                        lsResult={lsResult}
                        isMutiple={isMutiple}
                        refBtn={refBtn}
                        refPopUp={refPopUp}
                        style={style}
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
                    />,
                    document.body,
                )}
        </div>
    );
};

export default Select;
