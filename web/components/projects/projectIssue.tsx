'use client';
import React, { FC } from 'react';
import Board, { IBoardIssues } from './dnd/board';
import { useParams, usePathname } from 'next/navigation';
import { IData, IIssue, IParams, IProjectMember, Istate } from '@/types';
import useSWR from 'swr';
import { ISSUES_BY_PROJECT_ID, STATES_KEY } from '@/apiKey';
import issueService from '@/services/issue-services';
import { getIcons } from '@/helpers';

export interface IProps {
    query?: {
        cycle_id: string;
    };
}

const TableIssueDND: FC<IProps> = ({ query = {} }) => {
    const params = useParams<IParams>();
    const pathName = usePathname();

    const { data: issues } = useSWR<IData<IIssue[]>>(pathName, () => {
        return issueService.findIssues<IIssue[]>({
            projects: [params.projectid],
            ...query,
        });
    });

    const { data: states } = useSWR(
        () => STATES_KEY(params.projectid),
        () => issueService.getState<IData<Istate[]>>(params.projectid),
    );

    function getDataBoard(states: Istate[], issues: IIssue[]): IBoardIssues[] {
        const stateParent: IBoardIssues[] = states.map((e) => {
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
            return newState.map((e) => {
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

    return (
        <div className="relative w-full">
            {issues && states && <Board data={getDataBoard(states, issues)} />}
        </div>
    );
};

export default TableIssueDND;
