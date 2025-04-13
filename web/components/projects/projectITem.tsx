'use client';
import { renderEmoji } from '@/helpers';
import { IParams, IProject } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react';
import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai';
import moment from 'moment';
import { BiSolidEditAlt } from 'react-icons/bi';
import Popover from '../ui/popover';
import { IoStarOutline } from 'react-icons/io5';
import { CiLink } from 'react-icons/ci';
import projectService from '@/services/project-services';
import { useNoti } from '@/hooks';
import { mutate } from 'swr';
import { useSelector } from 'react-redux';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import Confirm from '../ui/confirm';
import { changeRoute } from 'nextjs-progressloader';
import { useParams } from 'next/navigation';
import { SWR_KEY_PROJECTS } from '@/apiKey';

interface IPropsProjectItem {
  dataItem: IProject;
}

const ProjectITem: React.FC<IPropsProjectItem> = ({ dataItem }) => {
  const noti = useNoti();
  const info = useSelector(selectInfo);

  return (
    <div className="rounded cursor-pointer bg-theme-secondary border shadow-theme-secondary">
      <div className="h-32 relative">
        <Image
          layout="fill"
          src={dataItem.cover_image || ''}
          alt={`Default project cover image`}
          objectFit="cover"
          className="w-full h-full rounded-tl rounded-tr"
        />
        <div
          className="absolute left-0 bottom-0 mb-4 ml-4 bg-green-500 px-2 py-[2px] select-none text-theme-primary text-sm rounded z-20"
          onClick={async () => {
            if (!dataItem.is_member) {
              mutate<IProject[]>(
                SWR_KEY_PROJECTS(info?.last_workspace_id),
                async (data) => {
                  const res = await projectService.joinProject({
                    projectId: dataItem.id || '',
                  });
                  if (res) {
                    noti?.success('join project success');

                    return data?.filter((e: any) => e.id != dataItem.id);
                  } else {
                    noti?.error('join project error');

                    return data;
                  }
                }
              );
            }
          }}
        >
          {dataItem.is_member ? 'Join' : 'Select to join'}
        </div>
      </div>
      <div className="h-40 px-4 py-3 flex flex-col">
        <div className="flex-1">
          <div className="flex gap-2 items-center w-full overflow-hidden text-ellipsis">
            <h2 className="font-bold text-xl whitespace-nowrap text-ellipsis overflow-hidden">
              {dataItem.name}
            </h2>
            {renderEmoji(dataItem.emoji || '')}
          </div>
          <h4 className="font-medium whitespace-nowrap text-ellipsis overflow-hidden mt-4">
            {dataItem.description}
          </h4>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AiOutlineCalendar />
            <span>{moment(dataItem.createdAt).format('ll')}</span>
          </div>
          <div className="flex items-center gap-2 select-none text-lg">
            <BiSolidEditAlt
              onClick={() => {
                changeRoute(
                  `/${info?.workspace?.slug}/projects/${dataItem.id}/settings`
                );
              }}
              className="hover:scale-110"
            />
            <Popover
              contentClassName="border shadow-theme-primary"
              placement="bottomLeft"
              content={<ProjectMenuPopover dataItem={dataItem} />}
            >
              <div className="hover:scale-110 p-1 pb-0">...</div>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IProjectMenuPopover {
  dataItem: IProject;
}

export const ProjectMenuPopover: FC<IProjectMenuPopover> = ({ dataItem }) => {
  const noti = useNoti();
  const info = useSelector(selectInfo);
  const typeF = dataItem.is_favorite ? 'Remove' : 'Add';
  const handleDeleteProject = async () => {
    const res = await projectService.deleteProject(dataItem.id || '');
    if (res) {
      changeRoute(`/${info?.workspace?.slug}/projects`);
      mutate<IProject[]>(SWR_KEY_PROJECTS(info?.last_workspace_id), (data) => {
        return data?.filter((e) => {
          return e.id != dataItem.id;
        });
      });
      noti?.success('Delete project success');
    } else {
      noti?.error('Delete project error');
    }
  };

  return (
    <div>
      <div className="flex hover:bg-theme-secondary items-center gap-2 cursor-pointer rounded p-1 select-none">
        <AiOutlineDelete />
        <Confirm
          title="Delete the project"
          desc="Are you sure to delete this project ?"
          onConfirm={() => {
            handleDeleteProject();
          }}
        >
          <span className="text-sm font-medium">Delete Project</span>
        </Confirm>
      </div>
      <div
        onClick={async () => {
          const result = await (dataItem.is_favorite
            ? projectService.removeProjectFavorite(dataItem.id || '')
            : projectService.addProjectFavorite(dataItem.id || ''));
          if (result) {
            mutate<IProject[]>(
              SWR_KEY_PROJECTS(info?.last_workspace_id),
              (projects) => {
                return projects?.map((e) => {
                  if (e.id === dataItem.id) e.is_favorite = !e.is_favorite;

                  return e;
                });
              }
            );
            noti?.success(typeF + ' favorite success');
          } else {
            noti?.error(typeF + ' favorite error');
          }
        }}
        className="flex hover:bg-theme-secondary items-center gap-2 cursor-pointer rounded p-1 select-none"
      >
        <IoStarOutline />
        <span className="text-sm font-medium">{typeF} to favorites</span>
      </div>
      <div
        onClick={() => {
          try {
            navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_HOST}/${info?.workspace?.slug}/projects/${dataItem.id}/settings`
            );
            noti?.success('Copy link success');
          } catch (error) {
            noti?.error('Copy link error');
          }
        }}
        className="flex hover:bg-theme-secondary items-center gap-2 cursor-pointer rounded p-1 select-none"
      >
        <CiLink />
        <span className="text-sm font-medium">Coppy project link</span>
      </div>
    </div>
  );
};

export default ProjectITem;
