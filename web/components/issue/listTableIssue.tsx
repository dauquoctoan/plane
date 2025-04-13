'use client';
import issueService from '@/services/issue-services';
import { IData, IIssueViews } from '@/types';
import React from 'react';
import useSWR from 'swr';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { lsTabsIssues } from '@/constants';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { issueViewSlice, useDispatch, useSelector } from '@/store';
import { ContainerLink, LinkProps, changeRoute } from 'nextjs-progressloader';
import { createNickNameLink } from '@/helpers';
import { SWR_KEY_ISSUE_VIEWS } from '@/apiKey';

function createLink(slug: string = '', id: string = '') {
  return `/${slug}/workspace-views/${id}`;
}

const ListTableIssue = () => {
  const info = useSelector(selectInfo);
  const { data: issueViews } = useSWR(SWR_KEY_ISSUE_VIEWS, () =>
    issueService.getIssueView<IData<IIssueViews[]>>()
  );
  const lsLinks =
    issueViews?.map((e) => ({
      href: `/${info?.workspace?.slug}/workspace-views/${e.id}`,
      nickname: createNickNameLink(`workspace-views-${e.id}`),
    })) || [];
  const customeLink: LinkProps[] = [
    {
      href: `/${info?.workspace?.slug}/workspace-views/assigned`,
      nickname: createNickNameLink('workspace-views-assigned'),
    },
    {
      href: `/${info?.workspace?.slug}/workspace-views/created`,
      nickname: createNickNameLink('workspace-views-created'),
    },
    {
      href: `/${info?.workspace?.slug}/workspace-views/subscribed`,
      nickname: createNickNameLink('workspace-views-subscribed'),
    },
    ...lsLinks.reverse(),
  ];

  return (
    <div>
      <ContainerLink links={customeLink} />
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
