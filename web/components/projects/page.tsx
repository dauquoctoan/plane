'use client';
import { LS_PROJECT_KEY } from '@/apiKey/project';
import projectService from '@/services/project-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IData, IProject } from '@/types';
import React from 'react';
import useSWR from 'swr';
import ProjectITem from './projectITem';

const Project = () => {
    const info = useSelector(selectInfo);

    const { data } = useSWR<IData<IProject[]>>(
        LS_PROJECT_KEY(info?.last_workspace_id),
        () => {
            return projectService.getProjects<IData<IProject[]>>(
                info?.last_workspace_id || '',
            );
        },
    );

    return (
        <div className="grid grid-cols-4 gap-2 box-border p-4 lg:grid-cols-2 md:grid-cols-1">
            {data && data.map((e, i) => <ProjectITem dataItem={e} />)}
        </div>
    );
};

export default Project;
