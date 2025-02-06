'use client';

import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { ICurrentFieldProps } from '../types/form';
import SelectPopup from './selectPopup';
import usePopUp from '@/hooks/popUp';
import { createPortal } from 'react-dom';
import { useNoti } from '@/hooks';
import ItemSelect from './itemSelect';
import Tooltip from '../tooltip';
import { mutate } from 'swr';
import { IState } from '@/types';

export type FontSize =
  | 'text-sm'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-[12px]';

export interface IProps extends ICurrentFieldProps {
  children?: ReactElement | string;
  options?: IOptionItem[] | string[];
  border?: boolean;
  defaultValue?: string | string[];
  iconActive?: ReactElement;
  isIconCheck?: boolean;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
  onChange?: (value: string | string[]) => void;
  isSearch?: boolean;
  customSelected?: (res: Item, loading?: boolean) => ReactElement | string;
  isClear?: boolean;
  className?: string;
  disableTooltip?: boolean;
  isMutiple?: boolean;
  style?: React.CSSProperties;
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
  title: string | undefined;
  value?: string | null;
}

export type Item = IOptionItem | string;
export type ICurrentField = IProps & ICurrentFieldProps;

function getCurrentItem(lsResult: Item[], value: string): Item | undefined {
  return lsResult.find(item => {
    if (typeof item == 'string') return item === value;
    else return item.value === value;
  });
}

const Select: React.FC<ICurrentField> = ({
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
  border = true,
  isClear,
  customSelected,
  keyUpdate,
  showMoreText = true,
  beforeUpdateValue,
  msgUpdateValueSuccess,
  msgUpdateValueFail,
  style: cssStyle,
  disableTooltip = false,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(
    defaultValue
      ? typeof defaultValue === 'string'
        ? defaultValue
        : defaultValue[0]
      : ''
  );
  const [loading, setLoading] = useState(false);
  const [lsResult, setResult] = useState(options || []);
  const refBtn = useRef<HTMLDivElement>(null);
  const refPopUp = useRef<HTMLDivElement>(null);
  const refClear = useRef<HTMLDivElement>(null);
  const noti = useNoti();  const [moreValue, setMoreValue] = useState<string[]>(
    typeof defaultValue == 'object' ? defaultValue : []
  );  const { open, setOpen, style, handleClose } = usePopUp({
    refPopover: refBtn,
    refPopup: refPopUp,
    refDisable: refClear,
  });

  async function confirm(value: string | string[]) {
    if (beforeUpdateValue) {
      if (keyUpdate) {
        mutate<IState[]>(
          keyUpdate,
          async (state) => {
            const result = await beforeUpdateValue(value);
            if (result) {
              noti?.success(msgUpdateValueSuccess || 'Update success');

              return [result, ...(state||[])];
            } else {
              noti?.error(msgUpdateValueFail || 'Update error!');

              return state;
            }
          },
          { revalidate: false }
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
        const newData: string[] = moreValue.filter(e => {
          return e !== value;
        });

        if (beforeUpdateValue) {
          isSetData = await confirm(newData);
        }

        if (isSetData || !beforeUpdateValue) {
          setMoreValue(newData);
          handleOnChange(newData);
          newData.length > 0 ? setCurrentValue(newData[0]) : setCurrentValue('');
        }
      } else {
        let isSetData;
        const newData = [value, ...moreValue];

        if (beforeUpdateValue) {
          isSetData = await confirm(newData);
        }

        if (isSetData || !beforeUpdateValue) {
          setMoreValue(newData);
          setCurrentValue(value);
          handleOnChange(newData);
        }
      }
    } else {
      if (value !== currentValue && beforeUpdateValue) {
        const result = await confirm(value);
        handleOnChange(value);
        if (!result) return;
      }
      setCurrentValue(value);
      handleOnChange(value);
    }
  };

  async function handleClearField() {
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
    setCurrentValue('');
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
      setCurrentValue(
        typeof defaultValue == 'string' ? defaultValue : defaultValue[0]
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
        setCurrentValue(value[0] || '');
        setMoreValue(value);
      }
    } else {
      if (
        value !== undefined &&
        value !== currentValue &&
        typeof value === 'string'
      ) {
        setCurrentValue(value);
      }
    }
  }, [value]);

  const currentItemSelected = getCurrentItem(options || [], currentValue);  const isOpen = open && (lsResult.length > 0 || isSearch);  const itemSelected = () => {
    return lsResult.filter(e => {
      if (typeof e === 'string') {
        return moreValue.includes(e);
      } else {
        return moreValue.includes(e.value || '');
      }
    });
  };

  return (
    <div className="relative" style={cssStyle}>
      <Tooltip
        placement="topCenter"
        title={
          <div className="text-sm flex p-1 group/pr">
            {itemSelected().map((e, i) => {
              return (
                <div key={i} className="ml-1 group/item group-first/pr:ml-0">
                  {typeof e == 'string' ? e : e?.title}
                  <span className="group-last/item:hidden">,</span>
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
          className={`${
            error ? 'border border-color-error' : border ? 'border' : ''
          } rounded hover:bg-theme-secondary cursor-pointer`}
        >
          {(currentItemSelected &&
            customSelected &&
            customSelected(currentItemSelected, loading)) ||
            (currentItemSelected && (
              <ItemSelect
                updateValue={handleBeforeUpdate}
                fontSize={fontSize}
                setValue={setCurrentValue}
                className={className}
                isClear={isClear}
                refClear={refClear}
                moreValue={moreValue}
                loading={loading}
                showMoreText={showMoreText}
                handleClear={handleClearField}
                item={currentItemSelected}
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
            currentValue={currentValue}
            defaultValue={defaultValue}
            customSelected={customSelected}
            disableMessage={disableMessage}
            setCurrentValue={setCurrentValue}
          />,
          document.body
        )}
    </div>
  );
};

export default Select;
