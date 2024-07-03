import React, { memo, useState } from 'react';
import ProjectMenuItem from '../../../components/layout/navbar/projectMenuItem';
import { selectIsCollap, useSelector } from '@/store';
import { HiPlusSm } from 'react-icons/hi';
import Modal from '@/components/ui/modal';
import AddProject from './addProject';
import projectService from '@/services/project-services';
import { IProject } from '@/types';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import useSWR, { useSWRConfig } from 'swr';
import { LS_PROJECT_KEY } from '@/apiKey/project';
import { useNoti } from '@/hooks';

const MenuProject = () => {
  const noti = useNoti();
  const { mutate } = useSWRConfig();
  const isCollap = useSelector(selectIsCollap);
  const info = useSelector(selectInfo);
  const [open, setOpen] = useState(false);

  const { data } = useSWR(LS_PROJECT_KEY(info?.last_workspace_id), () =>
    projectService.getProjects(info?.last_workspace_id || '')
  );

  async function handleCreateProject(data: IProject) {
    mutate(LS_PROJECT_KEY(info?.last_workspace_id), async (project: any) => {
      const result = await projectService.createProject<IProject>(data);
      if (result) {
        setOpen(false);
        noti?.success('Create project success');
        return [...project, { ...result, is_member: true }];
      }
      return [...project];
    });
  }

  return (
    <>
      <div className="px-2 py-2">
        {!isCollap && (
          <div className="font-bold text-sm flex items-center justify-between pr-2">
            <h3>Projects</h3>
            <HiPlusSm
              onClick={() => {
                setOpen(true);
              }}
              className={`cursor-pointer text-lg ${
                open ? 'rotate-45' : ''
              } transition-all`}
            />
          </div>
        )}
        <div>
          {data
            ?.filter(item => item.is_member)
            .map((item, index: number) => (
              <ProjectMenuItem
                key={item.id}
                project={item}
                emoji={item.emoji}
                text={item?.name}
              />
            ))}
        </div>
      </div>
      <Modal
        isPadding={false}
        isOpen={open}
        handleClose={() => {
          setOpen(false);
        }}
        content={
          <AddProject
            handleCreateProject={handleCreateProject}
            setOpen={setOpen}
          />
        }
      />
    </>
  );
};

export default memo(MenuProject);
