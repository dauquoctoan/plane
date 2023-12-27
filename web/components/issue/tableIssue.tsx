'use client';
import issueService from '@/services/issue-services';
import { IData, IIssue, IUser, Istate, ILabel, IFillterIssue } from '@/types';
import React from 'react';
import useSWR from 'swr';
import { ITableConfigs } from '../ui/table';
import Table from '../ui/table/table';
import Select from '../ui/select/select';
import { optionLevel } from '@/constants/issue';
import SelectMemberTable from './selectMemberTable';
import SelectLabelsTable from './selectLabelsTable';
import DatepickerTable from './datepickerTable';
import moment from 'moment';
import FilterTableIssue from './filterTableIssue';
import { useSelector } from '@/store';
import {
    selectListIssue,
    selectlsDisableTable,
} from '@/store/slices/issueView/selectors';
import ListTableIssue from './listTableIssue';
import SelectState from '../module/selectState';

export interface IPropsTable extends IFillterIssue {
    keyApi: string;
}

const TableIssue: React.FC<IPropsTable> = ({ keyApi, ...res }) => {
    const isList = useSelector(selectListIssue);
    const DATE_FORMAT = 'MMMM Do, h:mm:ss a';
    const lsDisable = useSelector(selectlsDisableTable);

    const {
        data: issue,
        isLoading,
        isValidating,
    } = useSWR(keyApi, (e) => {
        return issueService.findIssues<IData<IIssue[]>>({ ...res });
    });

    const configs: ITableConfigs[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            fixed: 'left',
        },
        {
            title: 'Issue',
            dataIndex: 'name',
            fixed: 'left',
            width: 200,
            shadow: 'left',
        },
        {
            title: 'State',
            dataIndex: 'state_id',
            render: (stateId, item: Istate) => (
                <SelectState
                    projectId={item.project_id}
                    stateId={stateId?.toString()}
                    beforeUpdateValue={(e) =>
                        issueService.updateIssue(item.id, {
                            state_id: e as string,
                        })
                    }
                />
            ),
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            render: (priority, item: Istate) => {
                return (
                    <Select
                        options={optionLevel}
                        defaultValue={priority}
                        isIconCheck
                        fontSize="text-[12px]"
                        beforeUpdateValue={(change) => {
                            return issueService.updateIssue(item.id, {
                                priority: change as string,
                            });
                        }}
                        isChildren={false}
                    />
                );
            },
        },
        {
            title: 'Assignees',
            dataIndex: 'assignees',
            render: (assignees: IUser[], data: IIssue) => {
                return (
                    <SelectMemberTable
                        assigness={assignees?.map((e) => e.id) as string[]}
                        projectId={data.project_id}
                        beforeUpdateValue={(change: any) => {
                            return issueService.updateIssueAssign(
                                data.id || '',
                                change,
                            );
                        }}
                    />
                );
            },
        },
        {
            title: 'Label',
            dataIndex: 'labels',
            render(labels: ILabel[], data: IIssue) {
                return (
                    <SelectLabelsTable
                        projectId={data.project_id}
                        labels={labels?.map((e) => e.id) || []}
                        beforeUpdateValue={(change) => {
                            return issueService.updateIssueLabel(
                                change as string[],
                                data.id || '',
                            );
                        }}
                    />
                );
            },
        },
        {
            title: 'Start Date',
            width: 200,
            dataIndex: 'start_date',
            render(value: string, item: IIssue) {
                return (
                    <DatepickerTable
                        defaultDate={value}
                        name="Start Date"
                        beforeUpdateValue={(e) => {
                            return issueService.updateIssue(item.id, {
                                start_date: e
                                    ? moment(e).format()
                                    : (null as any),
                            });
                        }}
                    />
                );
            },
        },
        {
            title: 'Due Date',
            width: 200,
            dataIndex: 'target_date',
            render(value: string, item: IIssue) {
                return (
                    <DatepickerTable
                        defaultDate={value}
                        name="Due Date"
                        beforeUpdateValue={(e) => {
                            return issueService.updateIssue(item.id, {
                                target_date: e
                                    ? moment(e).format()
                                    : (null as any),
                            });
                        }}
                    />
                );
            },
        },
        {
            title: 'Estimate',
            width: 200,
            dataIndex: 'estimate_point',
        },
        {
            title: 'Created On',
            dataIndex: 'createdAt',
            width: 200,
            render(value: string) {
                return (
                    <div className="w-full overflow-hidden text-ellipsis">
                        {moment(value).format(DATE_FORMAT)}
                    </div>
                );
            },
        },
        {
            title: 'Updated On',
            dataIndex: 'updatedAt',
            render(value: string) {
                return (
                    <div className="w-full overflow-hidden text-ellipsis">
                        {moment(value).format(DATE_FORMAT)}
                    </div>
                );
            },
        },
    ];

    return (
        <div>
            {isList ? (
                <ListTableIssue />
            ) : (
                <div>
                    {Object.keys(res || {}).length > 0 && (
                        <div className="px-3 py-2 border-t">
                            <FilterTableIssue query={{ ...res }} />
                        </div>
                    )}
                    <Table
                        lsKeyDisable={lsDisable}
                        configs={configs}
                        data={issue}
                    />
                </div>
            )}
        </div>
    );
};

export default TableIssue;
