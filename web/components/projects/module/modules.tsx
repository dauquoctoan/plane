'use client';
import { SWR_KEY_MODULES_BY_PROJECT } from '@/apiKey';
import CycleProgess from '@/components/ui/cycleProgess';
import projectService from '@/services/project-services';
import { modalSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IData, IModule, IParams } from '@/types';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { ContainerLink, changeRoute } from 'nextjs-progressloader';
import React from 'react';
import { IoIosMore } from 'react-icons/io';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { LuInfo } from 'react-icons/lu';
import useSWR, { mutate } from 'swr';
import { createNickNameLink } from '@/helpers';
import EmptyProjects from '@/components/module/emptyProjects';
import { useDispatch } from 'react-redux';
import Popover from '@/components/ui/popover';
import MoreToolls from '@/components/module/moreTools';
import { icons } from '@/constants';
import { useNoti } from '@/hooks';
import APP_CONFIG from '@/configs';
import Link from 'next/link';

const ModulesTable = () => {
  const params = useParams<IParams>();
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const { data: modules, isLoading } = useSWR<IData<IModule[]>>(
    SWR_KEY_MODULES_BY_PROJECT(params.projectid),
    () => {
      return projectService.findAllModulesByProject<IData<IModule[]>>(
        params.projectid
      );
    }
  );

  return (
    <div>
      {modules && modules?.length > 0 ? (
        <div className="">
          <ContainerLink
            links={
              modules?.map((e, i) => ({
                href: `/${info?.workspace?.slug}/projects/${params.projectid}/modules/${e.id}`,
                nickname: createNickNameLink(`module` + i),
              })) || []
            }
          />
          {modules?.map((e, i) => <ModulesItem key={i} data={e} />)}
        </div>
      ) : (
        <EmptyProjects
          cb={() => {
            dispatch(modalSlice.actions.togleProjetModule());
          }}
          textBtn="Build your first module"
          title="Map your project milestones to Modules and track aggregated work easily."
          desc="A group of issues that belong to a logical, hierarchical parent form a module. Think of them as a way to track work by project milestones. They have their own periods and deadlines as well as analytics to help you see how close or far you are from a milestone."
        />
      )}
    </div>
  );
};
const ModulesItem = ({ data }: { data: IModule }) => {
  const params = useParams<IParams>();
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const pathName = usePathname();
  const noti = useNoti();
  const link = pathName + '/' + data.id;

  return (
    <div className="border-b border-theme-border-secondary px-3 flex items-center text-sm cursor-pointer hover:bg-theme-secondary group select-none">
      <div
        onClick={() => {
          changeRoute(
            `/${info?.workspace?.slug}/projects/${params.projectid}/modules/${data.id}`
          );
        }}
        className="flex-1 flex items-center gap-2"
      >
        <CycleProgess
          percent={data.total && Math.ceil((data.done / data.total) * 100)}
        />
        <div className="w-3 h-3 border border-theme-text-primary rounded-full"></div>
        <div>{data.name}</div>
        <LuInfo className="text-gray-400 hidden group-hover:block" />
      </div>
      <div className="flex items-center gap-6">
        <div className="px-6 py-1 bg-color-special-secondary rounded text-[11px]">
          Draft
        </div>
        <div className="p-2 rounded-full border">
          <BsFillPersonLinesFill />
        </div>
        <Popover
          content={
            <MoreToolls
              data={[
                {
                  text: 'Edit',
                  icon: icons.edit,
                  cb: () => {
                    dispatch(modalSlice.actions.setModule(data));
                    dispatch(modalSlice.actions.togleProjetModule());
                  },
                },
                {
                  icon: icons.newTab,
                  render: () => {
                    return (
                      <Link href={link} target="_blank">
                        Open new tab
                      </Link>
                    );
                  },
                },
                {
                  text: 'Copy link',
                  icon: icons.copyLink,
                  cb: () => {
                    try {
                      navigator.clipboard.writeText(
                        APP_CONFIG.DOMAIN_URL + link
                      );
                      noti?.success('Copy link success');
                    } catch (error) {
                      noti?.success('Copy link error');
                    }
                  },
                },
                {
                  text: 'Delete',
                  icon: icons.delete,
                  cb: async () => {
                    const result = await projectService.deleteModule(
                      data.id || ''
                    );
                    if (result) {
                      noti?.success('Delete module success');
                      mutate<IModule[]>(
                        SWR_KEY_MODULES_BY_PROJECT(params.projectid),
                        (e) => {
                          return e?.filter(
                            (itemModule) => itemModule.id != data.id
                          );
                        }
                      );
                    } else noti?.error('Delete module error');
                  },
                },
              ]}
            />
          }
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="p-2 font-semibold text-sm rounded-full hover:bg-color-special-secondary"
          >
            <IoIosMore />
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default ModulesTable;
