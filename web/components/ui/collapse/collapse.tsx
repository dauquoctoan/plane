import React, { ReactElement, useState } from 'react';
import { IoIosCheckbox, IoIosCheckboxOutline } from 'react-icons/Io';
import { FaAngleDown } from 'react-icons/fa';

export interface IItemData {
    value?: string;
    title: string;
    icon?: ReactElement;
    children?: IItemData[];
    render?: () => ReactElement;
    disable?: boolean;
    parentKey?: string;
}
export interface IItemSelected {
    [e: string]: IItemData;
}

export interface ICollapse {
    data: IItemData[];
    itemSelected: IItemSelected;
    handleSelect: (e: IItemData) => void;
}

export interface IItemCollapse {
    item: IItemData;
    handleSelect: (e: IItemData) => void;
    itemSelected: IItemSelected;
    parentKey?: string;
}

const Checked = ({ isChecked }: { isChecked: boolean }) => {
    return <>{isChecked ? <IoIosCheckbox /> : <IoIosCheckboxOutline />}</>;
};

const ItemCollapse: React.FC<IItemCollapse> = ({
    item,
    handleSelect,
    itemSelected,
    parentKey,
}) => {
    const [open, setOpen] = useState(true);
    return (
        <div
            className={`${
                item.children && item.children?.length > 0
                    ? 'border-b last:border-b-0 py-2'
                    : ''
            }`}
        >
            <div className="flex justify-between">
                <div
                    onClick={() => {
                        !item.children &&
                            handleSelect({ ...item, parentKey: parentKey });
                    }}
                    className="select-none flex items-center gap-2"
                >
                    {!item.children && (
                        <Checked
                            isChecked={
                                item.value && itemSelected[item.value]
                                    ? true
                                    : false
                            }
                        />
                    )}
                    {item.icon}
                    <div>{(item.render && item.render()) || item.title}</div>
                </div>
                {item.children && (
                    <div
                        className="p-1 w-fit cursor-pointer rounded hover:bg-theme-secondary"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <FaAngleDown
                            className={`transition-all ${
                                open ? 'rotate-180' : ''
                            }`}
                        />
                    </div>
                )}
            </div>
            {open && item.children && (
                <div className="ml-3 text-sm">
                    {item.children.map((e) => (
                        <ItemCollapse
                            parentKey={item.value}
                            itemSelected={itemSelected}
                            handleSelect={handleSelect}
                            item={e}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const Collapse: React.FC<ICollapse> = ({
    data,
    handleSelect,
    itemSelected,
}) => {
    return (
        <div className="w-full h-[auto]">
            {data.map((item) => (
                <ItemCollapse
                    itemSelected={itemSelected}
                    handleSelect={handleSelect}
                    item={item}
                    parentKey={item.value}
                />
            ))}
        </div>
    );
};

export default Collapse;
