import React, { ReactElement, memo, useEffect, useRef, useState } from 'react';
import { ICurentFieldProps } from '../types/form';
import SelectPopup from './selectPopup';
import usePopUp from '@/hooks/popUp';
import { createPortal } from 'react-dom';
import { useNoti } from '@/hooks';
import ItemSelect from './itemSelect';

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
    customeSelected?: (res: Item, loading?: boolean) => ReactElement | string;
    isClear?: boolean;
    className?: string;
    isChildren?: boolean;
    fontSize?: FontSize;
    moreItem?: ReactElement;
    value?: string;
    msgUpdateValueFail?: string;
    msgUpdateValueSuccess?: string;
    beforeUpdateValue?: (e: string) => Promise<any>;
}

export interface IOptionItem {
    icon?: ReactElement;
    name: string;
    key?: string;
}

export type Item = IOptionItem | string;

export type ICurentField = IProps & ICurentFieldProps;

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
    isChildren = true,
    isSearch = false,
    isClear,
    customeSelected,
    beforeUpdateValue,
    msgUpdateValueSuccess,
    msgUpdateValueFail,
}) => {
    const [curentValue, setCurentValue] = useState<string>(defaultValue || '');
    const [loading, setLoading] = useState(false);
    const [lsResult, setResult] = useState(options || []);
    const refBtn = useRef<HTMLDivElement>(null);
    const refPopUp = useRef<HTMLDivElement>(null);
    const noti = useNoti();

    const { open, setOpen, style, handleClose } = usePopUp(
        refBtn,
        refPopUp,
        'left',
        undefined,
        isChildren,
    );

    const handleBeforeUpdate = async (value: string) => {
        if (loading) return;
        if (value !== curentValue) {
            if (beforeUpdateValue) {
                setLoading(true);
                const result = await beforeUpdateValue(value);
                setLoading(false);
                if (result)
                    noti?.success(msgUpdateValueSuccess || 'Update success');
                else {
                    noti?.error(msgUpdateValueFail || 'Update error!');
                    return;
                }
            }
            setCurentValue(value);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            onChange && onChange(curentValue);
        }, 200);
        open && handleClose();
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
    const isOpen = open && (lsResult.length > 0 || isSearch);

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
                    customeSelected(curentItemSelected, loading)) ||
                    (curentItemSelected && (
                        <ItemSelect
                            updateValue={handleBeforeUpdate}
                            fontSize={fontSize}
                            setValue={setCurentValue}
                            className={className}
                            isClear={isClear}
                            loading={loading}
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
            {isOpen &&
                (isChildren ? (
                    <SelectPopup
                        fontSize={fontSize}
                        isSearch={isSearch}
                        lsResult={lsResult}
                        refBtn={refBtn}
                        updateValue={handleBeforeUpdate}
                        refPopUp={refPopUp}
                        style={style}
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
                ) : (
                    createPortal(
                        <SelectPopup
                            updateValue={handleBeforeUpdate}
                            fontSize={fontSize}
                            isSearch={isSearch}
                            lsResult={lsResult}
                            refBtn={refBtn}
                            refPopUp={refPopUp}
                            style={style}
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
                        />,
                        document.body,
                    )
                ))}
        </div>
    );
};

export default Select;
