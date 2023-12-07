import React from 'react';
import Tab from '../ui/tab';
import { ContainerLink, LinkProps, changeRoute } from 'nextjs-progressloader';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';

const TabsIssue = () => {
    const info = useSelector(selectInfo);

    const customeLink: LinkProps[] = [
        {
            href: `/${info?.workspace?.name}/workspace-views/assigned`,
            nickname: 'workspace-views-assigned',
        },
        {
            href: `/${info?.workspace?.name}/workspace-views/created`,
            nickname: 'workspace-views-created',
        },
        {
            href: `/${info?.workspace?.name}/workspace-views/subscribed`,
            nickname: 'workspace-views-subscribed',
        },
    ];

    return (
        <>
            <ContainerLink links={customeLink} />
            <Tab
                lsLabel={[
                    <div className="text-base px-3">All issue</div>,
                    <div className="text-base px-3">Assigned</div>,
                    <div className="text-base px-3">Created</div>,
                    <div className="text-base px-3">Subscribed</div>,
                ]}
                onChange={(e) => {
                    changeRoute(
                        customeLink[e - 1]
                            ? customeLink[e - 1].href
                            : `/${info?.workspace?.name}/workspace-views/all-issues`,
                    );
                }}
            />
        </>
    );
};

export default TabsIssue;
