import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/input/Input';
import Button from '../ui/button';
import { IItemData } from '../ui/treeSelect/popOver';
import issueService from '@/services/issue-services';
import FillterQueryIssue from './fillterQueryIssue';
import { IItemSelected } from '../ui/collapse/collapse';
import { IoIosClose } from 'react-icons/Io';
import { useNoti } from '@/hooks';
import useSWR, { mutate } from 'swr';
import { IData, Istate } from '@/types';
import { optionLevel } from '@/constants';
import { convertDataOptions } from '@/helpers';
import { ISSUE_VIEWS_KEY } from '@/apiKey';

interface ICreateForm {
    title: string;
    desc: string;
    query: string[];
}

interface IItemQuerySelected {
    item: IItemData;
    setItemSelected: React.Dispatch<React.SetStateAction<IItemSelected>>;
}

interface IQueryForm {
    [e: string]: string[];
}

function _getValues(itemSelected: IItemSelected) {
    return Object.keys(itemSelected);
}

function _filter(datas: IItemData[], key: string[]): IItemSelected {
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

function filterSelected(
    datas: IItemData[],
    itemSelected: IItemSelected,
): IItemData[] {
    return datas.reduce((data: IItemData[], item) => {
        let newData: IItemData[] = [...data];
        let itemChild: IItemData[] = [];

        if (item.children) {
            itemChild = filterSelected(item.children, itemSelected);
        }

        if (!(item.value && itemSelected[item.value]) && !itemChild.length) {
            return [...newData];
        }

        if (itemChild.length > 0) {
            return [...newData, { ...item, children: itemChild }];
        }

        return [...newData, item];
    }, []);
}

const CreateViewIssue = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
        control,
        watch,
    } = useForm<ICreateForm>({
        defaultValues: {
            query: ['0-1'],
            title: '',
            desc: '',
        },
    });

    const {
        data: state,
        isLoading,
        isValidating,
    } = useSWR('DEFAULT_STATE', (a) =>
        issueService.getDefaultState<IData<Istate[]>>(),
    );

    const noti = useNoti();

    // projects?: string[];
    // userId?: string;
    // states?: string[];
    // labels?: string[];
    // priorities?: string[];
    // createBys?: string[];
    // assignees?: string[];
    // subscribers?: string[];
    // startDate?: string;
    // dueDate?: string;

    const convertData = (keys: string[], data?: any[]) => {
        return (
            data?.map((e) => {
                return {
                    title: e[keys[0]],
                    value: e[keys[1]],
                    icon: e.icon,
                };
            }) || []
        );
    };

    const data: IItemData[] = [
        {
            title: 'State',
            value: 'states',
            children: convertDataOptions(state, 1) as IItemData[],
        },
        {
            title: 'Priority',
            value: 'priorities',
            children: convertData(['name', 'key'], optionLevel),
        },
    ];

    const [itemSelected, setItemSelected] = useState<IItemSelected>(
        _filter(data, []),
    );

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

    const dataSelected = filterSelected(data, itemSelected);

    function getdataBinddingForm(dataSelected: IItemData[]): IQueryForm {
        return dataSelected.reduce((data: IQueryForm, item) => {
            let newData = { ...data };

            if (item.value && item.children && item.children?.length > 0) {
                newData[item.value] = item.children?.map((e) => e.value || '');
            }
            return newData;
        }, {});
    }

    return (
        <form
            className="w-[1000px]"
            onSubmit={handleSubmit(async (data) => {
                if (loading) return;
                mutate(
                    ISSUE_VIEWS_KEY,
                    async (issueView: any) => {
                        setLoading(true);
                        const result = await issueService.createIssueView({
                            name: data.title,
                            description: data.desc,
                            query: { ...getdataBinddingForm(dataSelected) },
                        });

                        setLoading(false);

                        if (result) {
                            noti?.success('Create views issue success');
                            return [...issueView, result];
                        } else {
                            noti?.error('Create views issue error');
                        }
                    },
                    { revalidate: false },
                );
            })}
        >
            <div>
                <h2 className="text-base font-bold mb-1 select-none">
                    Create View
                </h2>
            </div>
            <div className="flex justify-between gap-2">
                <div className="flex-1">
                    <Input
                        placeholder="Title"
                        nameForm="Title"
                        keyForm="title"
                        wrClassName="mb-4"
                        error={errors}
                        register={register}
                        validator={{ required: true }}
                        setValue={setValue}
                    />

                    <Input
                        wrClassName="mb-4"
                        keyForm="desc"
                        nameForm="Description"
                        error={errors}
                        register={register}
                        validator={{ required: false }}
                        placeholder="Description"
                        setValue={setValue}
                    />
                    <div className="w-full min-h-[50px] border rounded p-2 flex flex-auto gap-2 flex-wrap">
                        {!dataSelected.length && <span>Filter</span>}
                        {dataSelected.map((item) => (
                            <ItemSelected
                                item={item}
                                setItemSelected={setItemSelected}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <FillterQueryIssue
                        data={data}
                        handleSelect={handleSelect}
                        itemSelected={itemSelected}
                    />
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
                <Button typeBTN="text" type="button" text="Cancel" />
                <Button typeBTN="primary" type="submit" text="Create View" />
            </div>
        </form>
    );
};

const ItemSelected: React.FC<IItemQuerySelected> = ({
    item,
    setItemSelected,
}) => {
    function handleRemoveChild(value: string) {
        setItemSelected((data) => {
            const newData = { ...data };
            if (newData[value]) delete newData[value];
            return newData;
        });
    }

    function handleRemoveParent(value: string) {
        setItemSelected((data) => {
            const newData = { ...data };
            Object.keys(data).forEach((e) => {
                if (newData[e].parentKey === value) {
                    delete newData[e];
                }
            });
            return newData;
        });
    }

    return (
        <div className="flex border rounded-full items-center gap-2 w-fit px-2 select-none py-1">
            <div className="text-sm flex items-center gap-2 font-medium">
                {item.title}:
            </div>
            <div className="flex gap-1 flex-auto items-center rounded-full">
                {item.children?.map((e) => (
                    <div className="text-[13px] bg-theme-secondary rounded-full px-1 flex flex-auto items-center gap-1">
                        {e.icon}
                        {(e.render && e.render()) || (
                            <span className="whitespace-nowrap">{e.title}</span>
                        )}
                        <IoIosClose
                            onClick={() => {
                                e.value && handleRemoveChild(e.value);
                            }}
                        />
                    </div>
                ))}
            </div>
            <IoIosClose
                onClick={() => {
                    item.value && handleRemoveParent(item.value);
                }}
            />
        </div>
    );
};

export default CreateViewIssue;
