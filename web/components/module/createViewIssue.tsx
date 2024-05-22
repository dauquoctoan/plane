import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/input/Input';
import Button from '../ui/button';
import issueService from '@/services/issue-services';
import FillterQueryIssue, {
    IStateDate,
    ItemSelected,
} from '../issue/fillterQueryIssue';
import { TCalBackChangeDate, useDataFilter, useNoti } from '@/hooks';
import { mutate } from 'swr';
import { ISSUE_VIEWS_KEY, KEY_PROJECT_VIEW } from '@/apiKey';
import moment from 'moment';
import { IItemData, IItemSelected } from '../ui/collapse/collapse';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { useSelector } from '@/store';

interface ICreateForm {
    title: string;
    desc: string;
    query: string[];
}

export interface IQueryForm {
    [e: string]: string[];
}

function getdataBinddingForm(dataSelected: IItemData[]): IQueryForm {
    return dataSelected.reduce((data: IQueryForm, item) => {
        let newData = { ...data };

        if (item.value && item.children && item.children?.length > 0) {
            const key = item.value.split('::').pop();
            newData[key || ''] = item.children?.map(
                (e) => e.value?.split('::').pop() || '',
            );
        }

        return newData;
    }, {});
}

function handleCheckDataBeforeSubmit(
    customDate: IStateDate,
    dataSelected: IItemData[],
) {
    let query = {
        ...getdataBinddingForm(dataSelected),
    };

    if (customDate.startDate?.from || customDate.startDate?.to) {
        query.startCustomFrom = moment(
            customDate.startDate?.from,
        ).format() as any;

        query.startCustomTo = moment(customDate.startDate?.to).format() as any;
        delete query.startDate;
    } else {
        if (query.startDate)
            query.startDate = query.startDate.pop() as any
    }

    if (customDate.dueDate?.from || customDate.dueDate?.to) {
        query.dueCustomFrom = moment(customDate.dueDate?.from).format() as any;

        query.dueCustomTo = moment(customDate.dueDate?.to).format() as any;
        delete query.dueDate;
    } else {
        if (query.dueDate)
            query.dueDate = query.dueDate.pop() as any
    }

    return query;
}

function handleRemoveChildItem(lsItemSelected: IItemSelected, value: string) {
    const newData = { ...lsItemSelected };
    if (newData[value]) delete newData[value];
    return newData;
}

function handleRemoveParentItem(lsItemSelected: IItemSelected, value: string) {
    const newData = { ...lsItemSelected };
    Object.keys(lsItemSelected).forEach((e) => {
        if (newData[e].parentKey === value) {
            delete newData[e];
        }
    });
    return newData;
}

export function filterSelected(
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

const CreateViewIssue = ({
    setIsOpenCreateIssue,
    projectId
}: {
    setIsOpenCreateIssue: (e: boolean) => void;
    projectId?:string;
}) => {
    const [loading, setLoading] = useState(false);
    const info = useSelector(selectInfo)
    const noti = useNoti();
    const [customeDate, setCustomeDate] = useState<IStateDate>({});
    const [itemSelected, setItemSelected] = useState<IItemSelected>({});

    const setDate: TCalBackChangeDate = (type, name, date) => {
        setCustomeDate({
            ...customeDate,
            [name]: {
                ...customeDate.dueDate,
                [type]: date,
            },
        });
    };

    const { data } = useDataFilter(setDate);

    const dataSelected = filterSelected(data, itemSelected);

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
            query: [],
            title: '',
            desc: '',
        },
    });

    return (
        <form
            className="w-full box-border md:min-w-[600px] md:max-w-[900px] md:h-fit overflow-y-auto no-scrool h-screen"
            onSubmit={handleSubmit(async (data) => {
                if (loading) return;

                const query = handleCheckDataBeforeSubmit(
                    customeDate,
                    dataSelected,
                );

                mutate(
                    projectId?KEY_PROJECT_VIEW(projectId):ISSUE_VIEWS_KEY,
                    async (issueView: any) => {
                        setLoading(true);
                        const result = await issueService.createIssueView({
                            name: data.title,
                            description: data.desc,
                            query: query,
                            project_id: projectId,
                        });
                        setLoading(false);
                        if (result) {
                            noti?.success('Create views issue success');
                            setIsOpenCreateIssue(false);
                            return [{...result, creator: {
                                username: info?.username
                            }},...issueView];
                        } else {
                            noti?.error('Create views issue error');
                        }
                        return [...issueView];
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
            <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
                <div className="flex-1 flex w-full flex-col md:max-[70%]">
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

                    <div className="w-full min-h-max border rounded p-2 flex gap-2 flex-wrap overflow-y-auto">
                        <div className='w-full h-auto flex flex-wrap gap-1'>
                            <ItemSelected
                                placeholder="Filter"
                                dataSelected={dataSelected}
                                handleRemoveParent={(value: string) => {
                                    setItemSelected(
                                        handleRemoveParentItem(itemSelected, value),
                                    );
                                }}
                                handleRemoveChild={(value: string) => {
                                    setItemSelected(
                                        handleRemoveChildItem(itemSelected, value),
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[400px]">
                    <FillterQueryIssue
                        setItemSelected={setItemSelected}
                        itemSelected={itemSelected}
                        data={data}
                    />
                </div>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
                <Button
                    typeBTN="text"
                    type="button"
                    text="Cancel"
                    onClick={() => {
                        setTimeout(() => {
                            setIsOpenCreateIssue(false);
                        });
                    }}
                />
                <Button typeBTN="primary" type="submit" text="Create View" />
            </div>
        </form>
    );
};

export default CreateViewIssue;
