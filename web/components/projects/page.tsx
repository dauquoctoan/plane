'use client';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import projectService from '@/services/project-services';
import { SWR_KEY_PROJECTS } from '@/apiKey';
import ProjectITem from './projectITem';
import { useSelector } from '@/store';
import React from 'react';
import useSWR from 'swr';

const Project = () => {
  const info = useSelector(selectInfo);
  const { data } = useSWR(SWR_KEY_PROJECTS(info?.last_workspace_id), () => {
    return projectService.getProjects(info?.last_workspace_id || '');
  });

  return (
    <div className="grid grid-cols-1 gap-2 box-border p-4 md:grid-cols-3 xl:grid-cols-4">
      {data && data.map((e, i) => <ProjectITem key={i} dataItem={e} />)}
    </div>
  );
};

export default Project;
