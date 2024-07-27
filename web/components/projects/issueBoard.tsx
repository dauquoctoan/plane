'use client';
import React, { FC, useEffect, useState } from 'react';
import KanbanBoard, {
  IBoardIssues,
} from './layoutView/kanbanlayout/dnd/KanbanBoard';
import { useParams, usePathname } from 'next/navigation';
import { IIssue, IParams, IProjectMember, IState, TLayout } from '@/types';
import useSWR from 'swr';
import { SWR_KEY_STATES } from '@/apiKey';
import issueService from '@/services/issue-services';
import { getIcons } from '@/helpers';
import Drawer from '../ui/drawer';
import { drawerViewSlice, useSelector } from '@/store';
import {
  selectItemIssueSelected,
  selectShowDrawer,
} from '@/store/slices/drawerSlice/selectors';
import { useDispatch } from 'react-redux';
import { selectLayoutProjectView } from '@/store/slices/issueView/selectors';
import IssueDetail from './issueDetail/issueDetail';
import projectService from '@/services/project-services';
import ListBoard from './layoutView/listLayout/listBoard';
import Table from '../ui/table/table';
import { TableConfigs } from '@/constants';
import IssueBoardCalender from './layoutView/calender/IssueBoardCalender';

export interface IProps {
  query?: {
    cycle_id?: string;
    module_id?: string;
  };
  layout: TLayout;
}

const IssueBoard: FC<IProps> = ({ query = {}, layout: typeLayout }) => {
  const params = useParams<IParams>();
  const pathName = usePathname();
  const { data: projectMember } = useSWR('PROJECT_VIEW', () => {
    return projectService.getProjectViewByMember<IProjectMember>({
      projectId: params.projectid,
    });
  });

  const layout = useSelector(selectLayoutProjectView);

  const { data: issues } = useSWR(pathName, () => {
    return issueService.findIssues({
      projects: [params.projectid],
      ...query,
    });
  });

  const { data: states } = useSWR(
    () => SWR_KEY_STATES(params.projectid),
    () => issueService.getState(params.projectid)
  );

  function getDataBoard(states: IState[], issues: IIssue[]): IBoardIssues[] {
    const stateParent: IBoardIssues[] = states.map(e => {
      return {
        id: e.id,
        title: e.name || '',
        type: 'container',
        icon: getIcons(e.group, e.color),
        children: [],
      };
    });

    return issues.reduce((data: IBoardIssues[], item: IIssue) => {
      const newState = [...data];
      return newState.map(e => {
        const newStateItem = { ...e };
        if (e.id === item.state_id) {
          newStateItem.children &&
            newStateItem.children.push({
              id: item.id || '',
              title: item.name || '',
              type: 'item',
              data: item,
            });
          return newStateItem;
        }
        return e;
      });
    }, stateParent);
  }

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(document.body.clientWidth);
  }, []);

  TableConfigs[1].fixed = width > 768 ? 'left' : undefined;

  const Layouts: { [e: string]: any } = {
    kanban: states && issues && (
      <KanbanBoard data={getDataBoard(states, issues)} />
    ),
    list: issues && states && <ListBoard issues={issues} states={states} />,
    spreadsheet: <Table configs={TableConfigs} data={issues} />,
    calendar: <IssueBoardCalender data={issues} />,
  };

  return (
    <div className="relative w-full">
      {projectMember && Layouts[layout || typeLayout]}
    </div>
  );
};

export default IssueBoard;
