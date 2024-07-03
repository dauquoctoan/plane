'use client';
import React, { FC, useEffect, useState } from 'react';
import Popover from '../ui/popover/popover';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import moment from 'moment';
import useSWR from 'swr';
import overviewService from '@/services/overview-service';
import Select, { IOptionItem } from '../ui/select/select';
import TabAnimation from '../ui/tabAnimation';
import { END_DATE_QUERY, STATE_QUERY, TYPE_DATE_QUERY } from '@/constants';
import issueService from '@/services/issue-services';
import { Istate } from '@/types';
import AssignedByState from './AssignedByState';
import AssignedToYou from './AssignedToYou';
import AssignedByPriority from './AssignedByPriority';

export interface IIssueConsum {
  title: string;
  isTab?: boolean;
  Content: FC<IContent>;
  defaultTab?: number;
  defaultDate?: number;
  type?: 'assignees' | 'createBys' | 'state' | 'priority';
}

export interface IContent {
  date: string;
  option: string;
  state: Istate[];
  type?: 'assignees' | 'createBys' | 'state' | 'priority';
}

const Dashboard = () => {
  const info = useSelector(selectInfo);
  const dayAndNight =
    moment().hours() <= 12 && moment().hours() >= 0
      ? {
          text: 'Good morning',
        }
      : {
          text: 'Good afternoon',
        };

  const { data: overView, isLoading } = useSWR('overview', () =>
    overviewService.getDashboardOverview()
  );
  return (
    <div className="w-full h-auto">
      <div>
        <h2 className="font-bold text-xl">
          {dayAndNight.text}, {info?.first_name + ' ' + info?.last_name}
        </h2>
        <span className="">
          🌤️ {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </span>
      </div>
      <div>
        <Popover />
      </div>
      <div className="mt-5 border rounded flex xl:flex-col h-fit">
        <div className="grid grid-cols-2 flex-1">
          <div className="h-48 p-3 box-border border-r">
            <div className="text-sm">Issues Assignee</div>
            <div className="font-bold text-xl ">{overView?.issueAssignee}</div>
          </div>
          <div className="h-48 p-3 box-border">
            <div className="text-sm">Issues Completed</div>
            <div className="font-bold text-xl">{overView?.issueCompleted}</div>
          </div>
          <div className="h-48 p-3 box-border border-r border-t">
            <div className="text-sm">Issues Created</div>
            <div className="font-bold text-xl">{overView?.issueCreated}</div>
          </div>
          <div className="h-48 p-3 box-border border-t">
            <div className="text-sm">Issues Overdue</div>
            <div className="font-bold text-xl">{overView?.issueOverdue}</div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        <IssueConsum isTab title="Assigned to you" Content={AssignedToYou} />
        <IssueConsum
          isTab
          title="Created by you"
          type="createBys"
          Content={AssignedToYou}
        />
        <IssueConsum title="Assigned by state" Content={AssignedByState} />
        <IssueConsum
          title="Assigned by priority"
          Content={AssignedByPriority}
        />
      </div>
    </div>
  );
};

const IssueConsum: FC<IIssueConsum> = ({
  type,
  title,
  isTab = false,
  Content,
  defaultTab = 0,
  defaultDate = 1,
}) => {
  const selects = [
    { value: END_DATE_QUERY + ':all', title: 'All time' },
    { value: END_DATE_QUERY + ':today', title: 'Due today' },
    { value: END_DATE_QUERY + ':week', title: 'Due this week' },
    { value: END_DATE_QUERY + ':month', title: 'Due this month' },
    { value: END_DATE_QUERY + ':year', title: 'Due this year' },
  ];

  const tabs = [
    { value: TYPE_DATE_QUERY + ':gte', name: 'Upcoming' },
    { value: TYPE_DATE_QUERY + ':lte', name: 'Overdue' },
    { value: STATE_QUERY + ':completed', name: 'Maked completed' },
  ];

  const tabAllTime = [
    { value: STATE_QUERY + ':backlog;unstarted;started', name: 'Pending' },
    { value: STATE_QUERY + ':completed', name: 'Maked completed' },
  ];

  const [query, setQuery] = useState({
    date: selects[defaultDate].value,
    option: tabs[defaultTab].value,
  });

  const curentTab = query.date != selects[0].value ? tabs : tabAllTime;

  useEffect(() => {
    if (query.date == selects[0].value) {
      if (
        !curentTab.find(e => {
          e.value === query.option;
        })
      ) {
        setQuery({ ...query, option: curentTab[0].value });
      }
    }
  }, [query.date]);

  const { data: state } = useSWR('DEFAULT_STATE', () => {
    return issueService.getDefaultState();
  });

  return (
    <div className="flex gap-5 mt-4 flex-col transition-all w-full rounded border">
      <div className="flex items-center justify-between p-3">
        <div className="text-lg font-semibold">{title}</div>
        <Select
          options={selects as IOptionItem[]}
          isIconCheck
          onChange={value => {
            setQuery({
              ...query,
              date: value as string,
            });
          }}
          placement="bottomRight"
          defaultValue={selects[defaultDate].value}
          fontSize="text-sm"
        />
      </div>
      {isTab && (
        <div className="p-3">
          <TabAnimation
            onchange={value => {
              setQuery({
                ...query,
                option: value as string,
              });
            }}
            defaultTab={defaultTab}
            option={curentTab}
          />
        </div>
      )}
      {state && (
        <Content
          type={type}
          state={state}
          date={query.date}
          option={query.option}
        />
      )}
    </div>
  );
};

export default Dashboard;
