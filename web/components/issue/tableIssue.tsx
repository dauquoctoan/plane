'use client';
import issueService from '@/services/issue-services';
import { IData, IIssue, IUser, Istate, ILabel, IFillterIssue } from '@/types';
import { usePathname } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import { ITableConfigs } from '../ui/table';
import Table from '../ui/table/table';
import SelectStateTable from './selectStateTable';
import Select from '../ui/select/select';
import { optionLevel } from '@/constants';
import SelectMemberTable from './selectMemberTable';
import SelectLabelsTable from './selectLabelsTable';
import DatepickerTable from './datepickerTable';
import moment from 'moment';

const TableIssue: React.FC<IFillterIssue> = ({
    assignees,
    projects,
    createBys,
}) => {
    const pathName = usePathname();
    const DATE_FORMAT = 'MMMM Do, h:mm:ss a';

    const {
        data: issue,
        isLoading,
        isValidating,
    } = useSWR(pathName.split('/').pop(), (a) =>
        issueService.findIssues<IData<IIssue[]>>({
            assignees,
            projects,
            createBys,
        }),
    );

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
                <SelectStateTable
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
            <Table configs={configs} data={issue} fixedHeader />
        </div>
    );
};

export default TableIssue;
