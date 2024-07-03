import React, { useEffect, useState } from 'react';
import { IoIosClose, IoIosSearch } from 'react-icons/io';
import Collapse from '../ui/collapse/collapse';
import { IItemSelected } from '../ui/treeSelect/treeSelect';
import { IItemData } from '../ui/treeSelect/popOver';

export interface IFillterQueryIssue {
  data: IItemData[];
  setItemSelected: React.Dispatch<React.SetStateAction<IItemSelected>>;
  itemSelected: IItemSelected;
}

export interface IStateDate {
  startDate?: IItemDate;
  dueDate?: IItemDate;
}

export interface IItemDate {
  from?: string;
  to?: string;
}
interface IItemQuerySelected {
  item: IItemData;
  setItemSelected: React.Dispatch<React.SetStateAction<IItemSelected>>;
}

const FillterQueryIssue: React.FC<IFillterQueryIssue> = ({
  data,
  setItemSelected,
  itemSelected,
}) => {
  const [search, setSearch] = useState('');

  function handleSearchData(data: IItemData[], search: string) {
    return data.reduce((data: IItemData[], item): IItemData[] => {
      if (item.children) {
        return [
          ...data,
          {
            ...item,
            children: handleSearchData(item.children, search),
          },
        ];
      } else {
        if (item.title.toLowerCase().includes(search.toLowerCase())) {
          return [...data, item];
        }
      }
      return data;
    }, []);
  }

  function handleSelect(item: IItemData) {
    if (item.value) {
      const newItem = { ...itemSelected };
      if (newItem[item.value]) {
        delete newItem[item.value];
      } else {
        newItem[item.value] = item;
      }
      setItemSelected(newItem);
    }
  }

  function sortByCount(data: IItemData[]) {
    return data.sort((a, b) => {
      if (a.children && b.children)
        return a.children?.length > b.children?.length ? -1 : 1;
      return 1;
    });
  }

  return (
    <div className="w-full h-full md:border-l md:pl-2 mt-6 md:mt-0">
      <div className="">
        <div className="pb-3">
          <div className="relative">
            <input
              value={search}
              onChange={e => {
                setSearch(e.target.value);
              }}
              className="outline-none border rounded-full px-2 py-1 w-full select-none"
              placeholder="search"
            />
            <IoIosSearch className="absolute top-[50%] right-0 text-xl translate-y-[-50%] mr-3" />
          </div>
        </div>
        <div className="max-h-[60vh] overflow-y-auto hover-scroll box-border px-2 py-1">
          <Collapse
            data={search ? sortByCount(handleSearchData(data, search)) : data}
            handleSelect={handleSelect}
            itemSelected={itemSelected}
          />
        </div>
      </div>
    </div>
  );
};

export const ItemSelected = ({
  dataSelected,
  handleRemoveChild,
  handleRemoveParent,
  placeholder,
}: {
  placeholder?: string;
  dataSelected: IItemData[];
  handleRemoveParent?: (e: string) => void;
  handleRemoveChild?: (e: string) => void;
}) => {
  return (
    <>
      {!dataSelected.length && <span>{placeholder}</span>}
      {dataSelected.map((item, i) => (
        <div
          key={i}
          className="flex border items-center rounded-full gap-2 w-fit px-2 select-none py-1 mt-2 mb-2 h-fit"
        >
          <div className="text-sm flex items-center gap-2 font-medium whitespace-nowrap w-fit">
            {item.title}:
          </div>
          <div className="flex gap-1 flex-wrap items-center rounded-full flex-1">
            {item.children?.map((e, i) => (
              <div
                key={i}
                className="text-[13px] bg-theme-secondary rounded-full px-1 flex items-center gap-1"
              >
                {e.icon}
                {(e.render && e.render()) || (
                  <span className="whitespace-nowrap">{e.title}</span>
                )}
                {handleRemoveChild && (
                  <IoIosClose
                    onClick={() => {
                      e.value && handleRemoveChild(e.value);
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          {handleRemoveParent && (
            <IoIosClose
              onClick={() => {
                item.value && handleRemoveParent(item.value);
              }}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default FillterQueryIssue;
