'use client';
import { IData, IIssue, IParams } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import TableIssueDND from '../projectIssue';
import useSWR from 'swr';
import projectService from '@/services/project-services';
import IssueBoard from '../issueBoard';

const TableCycleDetail = () => {
  const params = useParams<IParams>();
  const { data: cycleUserProperties } = useSWR('cycle_user_properties', () => {
    return projectService.getCycleUserProperties(
      params.projectid,
      params.cycleid
    );
  });

  return (
    <>
      {cycleUserProperties?.display_filters.layout && (
        <IssueBoard
          query={{ cycle_id: params.cycleid }}
          layout={cycleUserProperties?.display_filters.layout}
        />
      )}
    </>
  );
};

export default TableCycleDetail;
