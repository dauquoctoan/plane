'use client';
import LayoutSwitch from '@/components/module/layoutSwitch';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import projectService from '@/services/project-services';
import { IParams, IProjectMember, TLayout } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import useSWR, { mutate } from 'swr';
import lodash from 'lodash';
import { useDispatch } from 'react-redux';
import { issueViewSlice } from '@/store';
import { menuLayoutIssue } from '@/constants';
import RoadMap from '@/components/module/roadMap';

const IssueHeader = () => {
    const params = useParams<IParams>();
    const dispatch = useDispatch();
    
    const { data } = useSWR('PROJECT_VIEW' + params.projectid, () => {
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
        <div className="flex gap-2 items-center text-sm pr-2">
            <div className="flex items-center gap-2">
                <RoadMap
                    roads={[
                        {
                            title: 'Projects',
                            icon: <PiSuitcaseSimpleBold />,
                        },
                        {
                            title: 'Issue',
                        },
                    ]}
                />
            </div>

            <div className="md:flex hidden flex-1 justify-end overflow-x-auto items-center gap-2">
                <div className='w-fit'>
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
