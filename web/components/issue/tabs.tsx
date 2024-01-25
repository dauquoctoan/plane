'use client';
import { ContainerLink, LinkProps, changeRoute } from 'nextjs-progressloader';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { issueViewSlice, useSelector } from '@/store';
import { ISSUE_VIEWS_KEY } from '@/apiKey';
import issueService from '@/services/issue-services';
import { IData, IIssueViews } from '@/types';
import { lsTabsIssues } from '@/constants';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Tab, { ITabItem } from '../ui/tab';
import React from 'react';
import useSWR from 'swr';

const TabsIssue = () => {
    const info = useSelector(selectInfo);
    const dispatch = useDispatch();
    const { data: issueViews } = useSWR(
        () => ISSUE_VIEWS_KEY,
        () => issueService.getIssueView<IData<IIssueViews[]>>(),
    );

    const pathName = usePathname();
    const lsLinks =
        issueViews?.map((e) => ({
            href: `/${info?.workspace?.slug}/workspace-views/${e.id}`,
            nickname: `workspace-views-${e.id}`,
        })) || [];

    const customeLink: LinkProps[] = [
        {
            href: `/${info?.workspace?.slug}/workspace-views/assigned`,
            nickname: 'workspace-views-assigned',
        },
        {
            href: `/${info?.workspace?.slug}/workspace-views/created`,
            nickname: 'workspace-views-created',
        },
        {
            href: `/${info?.workspace?.slug}/workspace-views/subscribed`,
            nickname: 'workspace-views-subscribed',
        },
        ...lsLinks.reverse(),
    ];

    const lsTabs: ITabItem[] =
        issueViews?.map((e: IIssueViews) => ({
            title: e.name || '',
            key: e.id || '',
        })) || [];

    return (
        <>
            <ContainerLink links={customeLink} />
            {
                <Tab
                    active={pathName.split('/').pop()}
                    lsLabel={[...lsTabsIssues, ...(lsTabs || [])]}
                    onChange={(e) => {
                        changeRoute(
                            `/${info?.workspace?.slug}/workspace-views/${e}`,
                        );
                        dispatch(issueViewSlice.actions.setIsListIssue(false));
                    }}
                />
            }
        </>
    );
};

export default TabsIssue;
