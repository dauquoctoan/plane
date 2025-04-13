'use client';
import { IParams } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import IssueBoard from '../issueBoard';
import projectService from '@/services/project-services';
import useSWR from 'swr';

const TableModuleDetail = () => {
  const params = useParams<IParams>();
  const { data: moduleUserProperties } = useSWR(
    'module_user_properties',
    () => {
      return projectService.getModuleUserProperties(
        params.projectid,
        params.moduleid
      );
    }
  );

  return (
    <>
      {moduleUserProperties?.display_filters.layout && (
        <IssueBoard
          query={{ module_id: params.moduleid }}
          layout={moduleUserProperties?.display_filters.layout}
        />
      )}
    </>
  );
};

export default TableModuleDetail;
