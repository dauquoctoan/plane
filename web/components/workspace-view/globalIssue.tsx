'use client';
import React from 'react';
import TableIssue from '../issue/tableIssue';
import useSWR from 'swr';
import { SWR_KEY_ISSUE_VIEW } from '@/apiKey';
import issueService from '@/services/issue-services';
import { IData, IIssueViews, IParams } from '@/types';
import { useParams } from 'next/navigation';

const GlobalIssueWorkspaceView = () => {
  const params = useParams<IParams>();
  const { data: issueView } = useSWR(
    () => SWR_KEY_ISSUE_VIEW(params.issueViewId),
    () => issueService.findIssueViewById<IData<IIssueViews>>(params.issueViewId)
  );

  return <div>{issueView && <TableIssue {...issueView?.query} />}</div>;
};

export default GlobalIssueWorkspaceView;
