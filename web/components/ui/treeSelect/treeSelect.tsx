'use client';
import usePopUp, { TPlacement } from '@/hooks/popUp';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Popover, { IItemData } from './popOver';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { ICurentFieldProps } from '../types';
import { forEach } from 'lodash';
import { reducer } from '@/store/rootReducer';

export interface ITreeSelect {
    placeMent?: TPlacement;
    isHover?: boolean;
    isChldrent?: boolean;
    children?: string | ReactElement;
    isMutiple?: boolean;
    data: IItemData[];
    onChange?: (e: string | (string | undefined)[]) => void;
    defaultValue?: string | string[];
    value?: string | string[];
    typeData?: 'list' | 'group';
}

export interface IItemSelected {
    [e: string]: IItemData;
}

const ItemSelected = ({
    data,
    handleRemoveSelect,
}: {
    data: IItemData;
    handleRemoveSelect: (e: IItemData) => void;
}) => {
    return (
        <div className="rounded-full px-1 flex items-center bg-theme-secondary gap-1 border">
            {(data?.render && data?.render()) || data.title}
            <div
                ref={(a) => {
                    a?.setAttribute('clear', 'true');
                }}
            >
                <IoCloseCircleOutline
                    onClick={(e: MouseEvent) => {
                        handleRemoveSelect(data);
                    }}
                />
            </div>
        </div>
    );
};

export interface IFN {
    filter: any;
    getValue: any;
}

export type IProps = ICurentFieldProps & ITreeSelect;

function getValues(itemSelected: IItemSelected) {
    return Object.keys(itemSelected).map((e) => {
        return itemSelected[e].value;
    });
}
function _filter(datas: IItemData[], key: string | string[]): IItemSelected {
    return datas.reduce((data: IItemSelected, item) => {
        let newData: IItemSelected = { ...data };

        if (item.value && typeof key !== 'string' && key.includes(item.value)) {
            newData[item.value] = item;
        }

        if (item.children)
            newData = { ...newData, ..._filter(item.children, key) };

        return newData;
    }, {});
}

function convertDataToArr(data: IItemData[]) {
    return data.reduce((data: IItemData[], item) => {
        let newData: IItemData[] = [...data, item];

        if (item.children)
            newData = newData.concat(convertDataToArr(item.children));

        return newData;
    }, []);
}

const TreeSelect: React.FC<IProps> = ({
    isHover = false,
    placeMent = 'left',
    isChldrent = false,
    children,
    isMutiple = false,
    data,
    onChange,
    value,
    error,
    disableMessage,
    defaultValue,
    typeData = 'list',
}) => {
    const fn: { [e: string]: IFN } = {
        list: {
            filter: _filter,
            getValue: getValues,
        },
        group: {
            filter: _filter,
            getValue: getValues,
        },
    };

    const { filter, getValue } = fn[typeData];

    const [itemSelected, setItemSelected] = useState<IItemSelected>(
        filter(data, defaultValue || []),
    );

    useEffect(() => {
        if (isMutiple) {
            onChange && onChange(getValue(itemSelected));
        }
    }, [itemSelected]);

    function handleSelect(item: IItemData) {
        if (item.value) {
            if (isMutiple) {
                const newItem = { ...itemSelected };
                if (newItem[item.value]) {
                    delete newItem[item.value];
                } else {
                    newItem[item.value] = item;
                }
                setItemSelected(newItem);
            } else {
                if (itemSelected[item.value].value !== item.value) {
                    const newItem: IItemSelected = {};
                    newItem[item.value] = item;
                    setItemSelected(newItem);
                }
            }
        }
    }

    function handleRemoveSelect(item: IItemData) {
        if (item.value) {
            const newItem = { ...itemSelected };
            delete newItem[item.value];
            setItemSelected(newItem);
        }
    }

    const refPopover = useRef<HTMLDivElement>(null);
    const refPopup = useRef<HTMLDivElement>(null);

    const {
        open,
        handleClose,
        handleWhenMouseLeave,
        handleWhenMouseDown,
        mouse,
        setOpen,
        style,
    } = usePopUp({
        refPopover,
        refPopup,
        placement: 'bottomCenter',
        isHover,
        isChildRen: isChldrent,
    });

    useEffect(() => {
        if (
            value !== undefined &&
            typeof value == 'object' &&
            Object.keys(value).length !== Object.keys(itemSelected).length
        ) {
            setItemSelected(filter(data, value || []));
        }
    }, [value]);

    return (
        <>
            <div
                ref={refPopover}
                className={`relative text-sm box-border error ? 'border border-color-error' : 'border'`}
            >
                <div className="border rounded select-none cursor-pointer p-1 flex flex-auto flex-wrap max-w-full gap-2">
                    {(Object.keys(itemSelected).length > 0 &&
                        Object.keys(itemSelected).map((e, i) => {
                            return (
                                <ItemSelected
                                    key={i}
                                    data={itemSelected[e]}
                                    handleRemoveSelect={handleRemoveSelect}
                                />
                            );
                        })) ||
                        children}
                </div>
                {open &&
                    (isChldrent ? (
                        <Popover
                            handleSelect={handleSelect}
                            selected={itemSelected}
                            isMutiple={isMutiple}
                            data={data}
                            style={style}
                            className="border px-2 rounded shadow-theme-primary absolute z-50 bg-theme-primary"
                            ref={refPopup}
                        />
                    ) : (
                        createPortal(
                            <Popover
                                handleSelect={handleSelect}
                                selected={itemSelected}
                                isMutiple={isMutiple}
                                data={data}
                                style={{ ...style, zIndex: 999 }}
                                className="border px-2 rounded shadow-theme-primary absolute z-50 bg-theme-primary"
                                ref={refPopup}
                            />,
                            document.body,
                        )
                    ))}
            </div>
            {!disableMessage && error && (
                <div className="text-color-error text-sm">{error}</div>
            )}
        </>
    );
};

export default TreeSelect;
