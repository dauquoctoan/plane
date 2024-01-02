'use client'
import Header from '@/layouts/layout-components/header/header'
import projectService from '@/services/project-services';
import { IData, IParams, IProjectMember } from '@/types';
import { useParams } from 'next/navigation';
import React, { FC } from 'react'
import useSWR from 'swr';
import IssueHeader from './issue';


export interface IPropsHeaderContent {
    me: IData<IProjectMember[]>;
    vlxx: string;
}

const ProjectLayout = ({
    children,
    header: HeaderContent
}: {
    children: React.ReactNode;
    header: FC<IPropsHeaderContent>;
}) => {
    const param = useParams<IParams>()

    const { data: me } = useSWR<IData<IProjectMember[]>>(
        'projectMember',
        () => {
            return projectService.getMemberByProjectMe<IProjectMember[]>(
                { projectId: param.projectid }
            );
        },
    );

    console.log('mesdf', me)

    return (
        <>
            <Header
                header={<IssueHeader me={me} vlxx='ssfjlsd' />}
            />
            <div className="main">{children}</div>
        </>
    )
}

export default ProjectLayout