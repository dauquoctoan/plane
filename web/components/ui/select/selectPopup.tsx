import React, { useEffect, useRef } from 'react';
import FuzzySearch from 'fuzzy-search';
import { FontSize, IOptionItem, IProps, Item } from './select';
import { BsCheck2 } from 'react-icons/bs';
import { IPositionResult } from '@/hooks';
import ItemSelect from './itemSelect';

interface ISelectPopup extends IProps {
    setOpen: (e: boolean) => void;
    refBtn: React.RefObject<HTMLDivElement>;
    isSearch: boolean;
    fontSize: FontSize;
    lsResult: IOptionItem[] | string[];
    curentValue?: string;
    setCurentValue?: (e: string) => void;
    setResult: (e: IOptionItem[] | string[]) => void;
    refPopUp: React.RefObject<HTMLDivElement>;
    style: IPositionResult;
    updateValue: (e: string) => void;
    moreValue: string[];
}

function checkActive(item: IOptionItem | string, curent: string | string[]) {
    if (typeof item === 'string')
        return typeof curent == 'string'
            ? item === curent
            : curent.includes(item);
    else if (typeof item === 'object') {
        return typeof curent == 'string'
            ? item.key === curent
            : curent.includes(item.key as string);
    }
    return false;
}

const SelectPopup: React.FC<ISelectPopup> = ({
    setOpen,
    setResult,
    isSearch,
    fontSize,
    isIconCheck,
    iconActive = <BsCheck2 />,
    curentValue,
    lsResult,
    isMutiple,
    moreValue,
    setCurentValue,
    moreItem,
    options,
    refPopUp,
    style,
    updateValue,
}) => {
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

    return (
        <div
            ref={refPopUp}
            style={style}
            className={`bg-theme-primary border py-1 absolute rounded origin-top-left shadow-theme-primary animate-popUp z-50 w-max`}
        >
            {isSearch && (
                <div className="py-2 px-2">
                    <input
                        placeholder="Type to search"
                        onChange={(e) => {
                            handleSearch(e.target.value);
                        }}
                        className={
                            'outline-none border rounded px-2 py-1 ' + fontSize
                        }
                    />
                </div>
            )}
            <div className="w-full max-h-[300px] hover-scroll overflow-y-auto px-1">
                {lsResult.map((item, index) => (
                    <ItemSelect
                        isItem
                        updateValue={updateValue}
                        fontSize={fontSize}
                        isIconCheck={isIconCheck}
                        iconActive={iconActive}
                        setOpen={setOpen}
                        isActive={
                            curentValue
                                ? checkActive(
                                      item,
                                      isMutiple ? moreValue : curentValue,
                                  )
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
    );
};

export default SelectPopup;
