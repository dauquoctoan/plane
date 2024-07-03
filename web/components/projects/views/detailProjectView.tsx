'use client';
import { KEY_PROJECT_VIEW_DETAIL } from '@/apiKey';
import Table from '@/components/ui/table/table';
import { TableConfigs } from '@/constants';
import issueService from '@/services/issue-services';
import projectService from '@/services/project-services';
import { IParams } from '@/types';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

const DetailProjectView = () => {
  const params = useParams<IParams>();
  const pathName = usePathname();

  const { data } = useSWR(KEY_PROJECT_VIEW_DETAIL(params.projectviewid), () => {
    return projectService.findOneProjectView(params.projectviewid);
  });

  const { data: issues } = useSWR(data && pathName, () => {
    return issueService.findIssues({ ...data?.query });
  });

  return <Table configs={TableConfigs} data={issues} />;
};

export default DetailProjectView;
