'use client';
import React from 'react';
import TableIssue from '../issue/tableIssue';
import useSWR from 'swr';
import { ISSUE_VIEW_KEY } from '@/apiKey';
import issueService from '@/services/issue-services';
import { IData, IIssueViews, IParams } from '@/types';
import { useParams } from 'next/navigation';

const GlobalIssueWorkspaceView = () => {
    const params = useParams<IParams>();

    const { data: issueView } = useSWR(
        () => ISSUE_VIEW_KEY(params.issueViewId),
        () =>
            issueService.findIssueViewById<IData<IIssueViews>>(
                params.issueViewId,
            ),
    );

    return <div>{issueView && <TableIssue {...issueView?.query} />}</div>;
};

export default GlobalIssueWorkspaceView;
