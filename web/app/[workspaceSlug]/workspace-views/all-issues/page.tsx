'use client';
import { LS_ALL_ISSUE } from '@/apiKey';
import IssueTable from '@/components/issue/issueTable';
import SelectStateTable from '@/components/issue/selectStateTable';
import Select from '@/components/ui/select/select';
import { ITableConfigs } from '@/components/ui/table';
import Table from '@/components/ui/table/table';
import { optionLevel } from '@/constants';
import { createMembeSelectOption } from '@/helpers';
import issueService from '@/services/issue-services';
import { IData, IIssue, IUser, Istate } from '@/types';
import { usePathname } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

const page = () => {
    const pathName = usePathname();
    const {
        data: issue,
        isLoading,
        isValidating,
    } = useSWR(pathName.split('/').pop(), (a) =>
        issueService.findIssues<IData<IIssue[]>>(),
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
                        issueService.updateIssue(item.id, { state_id: e })
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
                                priority: change,
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
            render: (assignees: IUser[]) => {
                return (
                    <Select
                        fontSize="text-[12px]"
                        options={createMembeSelectOption(assignees)}
                        isChildren={false}
                        defaultValue={assignees[0] && assignees[0].id}
                    />
                );
            },
        },
        {
            title: 'Label',
            dataIndex: 'id',
        },
        {
            title: 'Start Date',
            width: 200,
            dataIndex: 'start_date',
        },
        {
            title: 'Due Date',
            width: 200,
            dataIndex: 'target_date',
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
        },
        {
            title: 'Updated On',
            dataIndex: 'updatedAt',
        },
    ];

    return (
        <div>
            <Table configs={configs} data={issue} fixedHeader />
        </div>
    );
};

export default page;
