'use client';
import { IData, IIssue, IParams } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import TableIssueDND from '../projectIssue';
import IssueBoard from '../issueBoard';
import projectService from '@/services/project-services';
import useSWR from 'swr';

const TableModuleDetail = () => {
    const params = useParams<IParams>();
    const { data: moduleUserProperties } = useSWR(
        'cycle_user_properties',
        () => {
            return projectService.getModuleUserProperties(
                params.projectid,
                params.cycleid,
            );
        },
    );
    return (
        <>
            {moduleUserProperties?.display_filters.layout && (
                <IssueBoard
                    query={{ cycle_id: params.cycleid }}
                    layout={moduleUserProperties?.display_filters.layout}
                />
            )}
        </>
    );
};

export default TableModuleDetail;
