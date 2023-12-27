import { ISSUE_VIEWS_KEY } from '@/apiKey';
import issueService from '@/services/issue-services';
import { IData, IIssueViews } from '@/types';
import React from 'react';
import useSWR from 'swr';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { lsTabsIssues } from '@/constants';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { issueViewSlice, useDispatch, useSelector } from '@/store';
import { changeRoute } from 'nextjs-progressloader';

function createLink(slug: string = '', id: string = '') {
    return `/${slug}/workspace-views/${id}`;
}

const ListTableIssue = () => {
    const info = useSelector(selectInfo);
    const { data: issueViews } = useSWR(
        () => ISSUE_VIEWS_KEY,
        () => issueService.getIssueView<IData<IIssueViews[]>>(),
    );

    return (
        <div>
            {lsTabsIssues.map((e, i) => {
                return (
                    <ItemTab
                        href={createLink(info?.workspace?.slug, e.key)}
                        name={e.title}
                        key={e.key + i}
                    />
                );
            })}
            {info?.workspace?.slug &&
                issueViews &&
                issueViews.map((e, i) => {
                    return (
                        <ItemTab
                            key={i + e.name}
                            name={e.name}
                            href={createLink(info?.workspace?.slug || '', e.id)}
                        />
                    );
                })}
        </div>
    );
};

const ItemTab = ({ name, href }: { name: string; href: string }) => {
    const dispatch = useDispatch();
    return (
        <div
            className="px-4 hover:bg-theme-secondary cursor-pointer py-3 border-t border-theme-border-secondary text-sm font-medium flex gap-2 items-center"
            onClick={() => {
                setTimeout(() => {}, 100);
                changeRoute(href);
                dispatch(issueViewSlice.actions.setIsListIssue(false));
            }}
        >
            <RxOpenInNewWindow />
            <span className="font-bold select-none">{name}</span>
        </div>
    );
};

export default ListTableIssue;
