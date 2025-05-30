import React, { ReactElement } from 'react';
import { FontSize, Item } from './select';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { VscLoading } from 'react-icons/vsc';

interface IItemSelect {
  item: Item;
  setValue?: (e: string) => void;
  updateValue: (e: string) => void;
  isActive?: boolean;
  iconActive?: ReactElement;
  isIconCheck?: boolean;
  isClear?: boolean;
  loading?: boolean;
  className?: string;
  fontSize: FontSize;
  isItem?: boolean;
  moreValue?: string[];
  handleClear?: () => void;
  refClear?: React.RefObject<HTMLDivElement>;
  showMoreText?: boolean;
}

export const ItemSelect: React.FC<IItemSelect> = ({
  item,
  setValue,
  isActive,
  iconActive,
  isIconCheck,
  updateValue,
  isClear,
  className,
  fontSize,
  loading,
  moreValue,
  showMoreText = true,
  isItem = false,
  handleClear,
  refClear,
}) => {
  return (
    <div
      onClick={() => {
        isItem &&
          updateValue(typeof item === 'string' ? item : item.value || '');
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
        <div
          className={`flex-1 flex items-center ${
            showMoreText ? 'gap-1' : ''
          } overflow-hidden`}
        >
          {item?.icon && <div className="w-fit">{item.icon}</div>}
          <div className="flex-1 cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap">
            {showMoreText && item.title}
          </div>
        </div>
      )}
      {isActive && isIconCheck && iconActive}
      {loading && <VscLoading className="animate-spin" />}
      {moreValue && moreValue.length > 1 && <div>+{moreValue.length - 1}</div>}
      {isClear && (
        <div ref={refClear}>
          <IoCloseCircleOutline
            onClick={(e: any) => {
              e.stopPropagation();
              setValue && setValue('');
              handleClear && handleClear();
            }}
            className={`cursor-pointer close ${fontSize ? fontSize : ''}`}
          />
        </div>
      )}
    </div>
  );
};

export default ItemSelect;
