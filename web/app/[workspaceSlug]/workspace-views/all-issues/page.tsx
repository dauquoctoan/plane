'use client';
import { LS_ALL_ISSUE } from '@/apiKey';
import IssueTable from '@/components/issue/issueTable';
import SelectStateTable from '@/components/issue/selectStateTable';
import Select from '@/components/ui/select/select';
import { ITableConfigs } from '@/components/ui/table';
import Table from '@/components/ui/table/table';
import issueService from '@/services/issue-services';
import { IData, IIssue, Istate } from '@/types';
import React from 'react';
import useSWR from 'swr';

const page = () => {
    const {
        data: issue,
        isLoading,
        isValidating,
    } = useSWR(LS_ALL_ISSUE, (a) => issueService.findIssues<IData<IIssue[]>>());

    const configs: ITableConfigs[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (e) => <div>{e}</div>,
            fixed: 'left',
        },
        {
            title: 'Issue',
            dataIndex: 'name',
            render: (e) => <div>{e}</div>,
            fixed: 'left',
            width: 200,
            shadow: 'left',
        },
        {
            title: 'State',
            dataIndex: 'id',
            render: (e, item: Istate) => (
                <SelectStateTable
                    projectId={item.project_id}
                    stateId={item?.id?.toString()}
                    onChange={(e) => {
                        console.log(e);
                    }}
                />
            ),
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            render: (e) => <div>{e}</div>,
        },
        {
            title: 'Assignees',
            dataIndex: 'id',
            render: (e) => <div>{e}</div>,
        },
        {
            title: 'Label',
            dataIndex: 'id',
            render: (e) => <div>{e}</div>,
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
