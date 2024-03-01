'use client';
import LayoutSwitch from '@/components/module/layoutSwitch';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import projectService from '@/services/project-services';
import { IParams, IProjectMember, TLayout } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import { AiOutlineTable } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import {
    MdCalendarMonth,
    MdOutlineKeyboardArrowRight,
    MdOutlineViewKanban,
} from 'react-icons/md';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import useSWR, { mutate } from 'swr';
import lodash from 'lodash';
import { LuGanttChartSquare } from 'react-icons/lu';
import { BiSpreadsheet } from 'react-icons/bi';
import { LiaThListSolid } from 'react-icons/lia';
import { useDispatch } from 'react-redux';
import { issueViewSlice } from '@/store';
import { menuLayoutIssue } from '@/constants';

const IssueHeader = () => {
    const params = useParams<IParams>();
    const dispatch = useDispatch();
    const { data } = useSWR('PROJECT_VIEW', () => {
        return projectService.getProjectViewByMember<IProjectMember>({
            projectId: params.projectid,
        });
    });

    let changeLayout = lodash.debounce(function (id, viewProps) {
        projectService.updateProjectMember(id, {
            view_props: viewProps,
        });
    }, 1000);

    return (
        <div className="flex gap-2 items-center justify-between text-sm pr-2">
            <div className="flex items-center gap-2">
                <PiSuitcaseSimpleBold />
                <span>Projects</span>
                <div>
                    <MdOutlineKeyboardArrowRight />
                </div>
                <span>Issue</span>
            </div>

            <div className="flex items-center gap-2">
                <div>
                    {data && (
                        <LayoutSwitch
                            defaultValue={
                                data.view_props.display_filters.layout
                            }
                            menuItems={menuLayoutIssue}
                            onChange={async (e: TLayout) => {
                                dispatch(
                                    issueViewSlice.actions.setLayoutProjectView(
                                        e,
                                    ),
                                );

                                const viewProps = {
                                    ...data.view_props,
                                    display_filters: {
                                        ...data.view_props.display_filters,
                                        layout: e,
                                    },
                                };
                                changeLayout(data.id, viewProps);
                            }}
                        />
                    )}
                </div>
                <div className="border rounded px-3 py-1 h-fit select-none cursor-pointer">
                    fillter
                </div>
                <div className="border rounded px-3 py-1 h-fit select-none cursor-pointer">
                    display
                </div>
            </div>
        </div>
    );
};

export default IssueHeader;
