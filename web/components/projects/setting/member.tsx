'use client';
import { SWR_KEY_PROJECTS, SWR_KEY_MEMBER_BY_PROJECT } from '@/apiKey';
import SelectMemberTable from '@/components/module/selectMember';
import Avatar from '@/components/ui/avatar';
import Line from '@/components/ui/line';
import { MEMBER_ROLE_KEY } from '@/constants';
import projectService from '@/services/project-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IData, IParams, IProject, IProjectMember, IUser } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

const Member = () => {
  const params = useParams<IParams>();

  const { data: members } = useSWR(
    () => SWR_KEY_MEMBER_BY_PROJECT(params.projectid),
    () =>
      projectService.getMemberByProject<IProjectMember[]>({
        projectId: params.projectid || '',
      })
  );

  const { data: project } = useSWR(params.projectid, () => {
    return projectService.findOneProject(params.projectid);
  });

  return (
    <div>
      <div>
        <div className="pb-2">Defaults</div>
        <Line />
        <div className="flex">
          <div className="flex-1">
            <div className="text-[12px]">Default assign</div>
            {project && (
              <div>
                <SelectMemberTable
                  style={{ width: '100%' }}
                  assigness={[project?.default_assignee || 'none']}
                  isMutiple={false}
                  border={false}
                  isOptionItem
                  projectId={params.projectid}
                  beforeUpdateValue={(change: any) => {
                    return projectService.updateProject(
                      params?.projectid || '',
                      {
                        default_assignee: change == 'none' ? null : change,
                      }
                    );
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="text-[12px]">Project Lead</div>
            {project && (
              <div>
                <SelectMemberTable
                  style={{ width: '100%' }}
                  isOptionItem
                  assigness={[project?.project_lead || 'none']}
                  isMutiple={false}
                  border={false}
                  projectId={params.projectid}
                  beforeUpdateValue={(change: any) => {
                    return projectService.updateProject(
                      params?.projectid || '',
                      {
                        project_lead: change == 'none' ? null : change,
                      }
                    );
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="pb-2">Members</div>
        <Line />
        <div>
          {members?.map((e, i) => {
            return (
              <div
                key={i}
                className="hover:bg-theme-secondary cursor-pointer border-b flex justify-between px-4"
              >
                <div className="flex gap-3 px-2 py-3 items-center">
                  <Avatar>{e.user.first_name || ''}</Avatar>
                  <div className="">
                    <div className="font-semibold">
                      {e.user.first_name + ' ' + e.user.last_name}
                    </div>
                    <div className="text-[12px]">{e.user.email}</div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-[11px] font-semibold">
                    {MEMBER_ROLE_KEY[e.role]}
                  </div>
                  {/* <IoIosCloseCircleOutline className="text-color-error" /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Member;
