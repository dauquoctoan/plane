import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/Io';
import Collapse from '../ui/collapse/collapse';
import { IItemSelected } from '../ui/treeSelect/treeSelect';
import { IItemData } from '../ui/treeSelect/popOver';

export interface IFillterQueryIssue {
    data: IItemData[];
    itemSelected: IItemSelected;
    handleSelect: (e: IItemData) => void;
}

const FillterQueryIssue: React.FC<IFillterQueryIssue> = ({
    data,
    handleSelect,
    itemSelected,
}) => {
    const [search, setSearch] = useState('');
    return (
        <div className="w-full h-full overflow-y-auto overflow-x-hidden border-l pl-2">
            <div className="">
                <div className="relative">
                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        className="outline-none border rounded-full px-2 py-1 w-full select-none"
                        placeholder="search"
                    />
                    <IoIosSearch className="absolute top-[50%] right-0 text-xl translate-y-[-50%] mr-3" />
                </div>
                <div>
                    <Collapse
                        data={data}
                        handleSelect={handleSelect}
                        itemSelected={itemSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default FillterQueryIssue;
