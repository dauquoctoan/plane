import React from 'react';
import Tab from '../ui/tab';
import { ContainerLink, LinkProps, changeRoute } from 'nextjs-progressloader';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import useSWR from 'swr';
import { ISSUE_VIEWS_KEY } from '@/apiKey';
import issueService from '@/services/issue-services';
import { IData, IIssueViews } from '@/types';

const TabsIssue = () => {
    const info = useSelector(selectInfo);
    const { data: issueViews } = useSWR(
        () => ISSUE_VIEWS_KEY,
        () => issueService.getIssueView<IData<IIssueViews[]>>(),
    );

    const issueViewMenus =
        issueViews?.map((e) => (
            <div className="text-base px-3 whitespace-nowrap w-fit">
                {e.name}
            </div>
        )) || [];

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
        ...lsLinks,
    ];

    const lsMenu = [
        <div className="text-base px-3 whitespace-nowrap w-fit">All issue</div>,
        <div className="text-base px-3 whitespace-nowrap w-fit">Assigned</div>,
        <div className="text-base px-3 whitespace-nowrap w-fit">Created</div>,
        <div className="text-base px-3 whitespace-nowrap w-fit">
            Subscribed
        </div>,
        ...issueViewMenus,
    ];

    return (
        <>
            <ContainerLink links={customeLink} />
            <Tab
                lsLabel={lsMenu}
                onChange={(e) => {
                    changeRoute(
                        customeLink[e - 1]
                            ? customeLink[e - 1].href
                            : `/${info?.workspace?.slug}/workspace-views/all-issues`,
                    );
                }}
            />
        </>
    );
};

export default TabsIssue;
