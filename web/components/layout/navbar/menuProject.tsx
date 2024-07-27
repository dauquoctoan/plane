import React, { memo, ReactElement, useState } from 'react';
import ProjectMenuItem from '../../../components/layout/navbar/projectMenuItem';
import { selectIsCollap, useSelector } from '@/store';
import { HiPlusSm } from 'react-icons/hi';
import Modal from '@/components/ui/modal';
import AddProject from './addProject';
import projectService from '@/services/project-services';
import { IProject } from '@/types';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import useSWR, { useSWRConfig } from 'swr';
import { SWR_KEY_PROJECTS } from '@/apiKey';
import { useNoti } from '@/hooks';

interface ISliceProject { project: IProject[], projectFavorite: IProject[] }

function sliceProject(data: IProject[]): ISliceProject {
  const dataResult: ISliceProject = {
    project: [],
    projectFavorite: []
  }
  data?.forEach((e) => {
    if (!e.is_member) return;
    if (e.is_favorite) {
      dataResult.projectFavorite.push(e)
    } else {
      dataResult.project.push(e)
    }
  })
  return dataResult
}

const MenuProject = () => {
  const noti = useNoti();
  const { mutate } = useSWRConfig();
  const isCollap = useSelector(selectIsCollap);
  const info = useSelector(selectInfo);
  const [open, setOpen] = useState(false);

  const { data } = useSWR(SWR_KEY_PROJECTS(info?.last_workspace_id), () =>
    projectService.getProjects(info?.last_workspace_id || '')
  );

  async function handleCreateProject(data: IProject) {
    mutate(SWR_KEY_PROJECTS(info?.last_workspace_id), async (project: any) => {
      const result = await projectService.createProject<IProject>(data);
      if (result) {
        setOpen(false);
        noti?.success('Create project success');
        return [...project, { ...result, is_member: true }];
      }
      return [...project];
    });
  }
  const { project, projectFavorite } = sliceProject(data || [])

  return (
    <>
      {projectFavorite.length > 0 && <MenuProjectItem tittle={<p className='font-bold text-sm text-color-text-sidebar pr-2'>Favorite <span className='text-[11px]'>{`(${projectFavorite.length})`}</span></p>} data={projectFavorite} isCollap={isCollap} open={open} setOpen={setOpen} />}
      <MenuProjectItem tittle={<div className="font-bold text-sm flex items-center justify-between pr-2">
        <div>Project <span className='text-[11px]'>{`(${project.length})`}</span></div>
        <HiPlusSm
          onClick={() => {
            setOpen(true);
          }}
          className={`cursor-pointer text-lg ${open ? 'rotate-45' : ''
            } transition-all`}
        />
      </div>} data={project} isCollap={isCollap} open={open} setOpen={setOpen} />
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

interface IMenuProjectItem {
  isCollap: boolean;
  data: IProject[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  tittle: ReactElement
}

const MenuProjectItem = ({ isCollap, tittle, setOpen, open, data }: IMenuProjectItem) => {
  return (
    <div className="px-2 py-2">
      {!isCollap && (
        <>{ tittle }</>
      )}
      <div>
        {data.map((item) => (
            <ProjectMenuItem
              key={item.id}
              project={item}
              emoji={item.emoji}
              text={item?.name}
            />
          ))}
      </div>
    </div>
  )
}

export default memo(MenuProject);
