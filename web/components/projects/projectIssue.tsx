'use client';
import React, { FC } from 'react';
import { useParams } from 'next/navigation';
import { IParams, IProjectMember } from '@/types';
import useSWR from 'swr';
import projectService from '@/services/project-services';
import IssueBoard from './issueBoard';

const TableIssueDND: FC = () => {
    const params = useParams<IParams>();
    const { data: projectMember } = useSWR('PROJECT_VIEW', () => {
        return projectService.getProjectViewByMember<IProjectMember>({
            projectId: params.projectid,
        });
    });

    return (
        <>
            {projectMember?.view_props.display_filters.layout && (
                <IssueBoard
                    layout={projectMember?.view_props.display_filters.layout}
                />
            )}
        </>
    );
};

export default TableIssueDND;
