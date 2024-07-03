import React, { useState } from 'react';
import Avatar from '../../ui/avatar';
import { BsCheck2 } from 'react-icons/bs';
import { HiOutlinePlusSmall } from 'react-icons/hi2';
import { authSlice, layoutSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { ContainerLink, LinkProps, changeRoute } from 'nextjs-progressloader';
import workspaceService from '@/services/workspace-services';
import { IData, IProject, IWorkspace } from '@/types';
import authService from '@/services/auth-services';
import { VscLoading } from 'react-icons/vsc';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useFetch } from '@/hooks/fetch';
import useSWR from 'swr';
import { checkIsMobile } from '@/helpers';

const WorkspacePopover = () => {
  const info = useSelector(selectInfo);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const pathName = usePathname();
  // const { data: workspaces } = useFetch<IData<IWorkspace[]>>(
  //     workspaceService.getAllWorkSpaces as any,
  // );

  const { data: workspaces } = useSWR('workspaces', () => {
    return workspaceService.getWorkspaceByUser<IWorkspace[]>();
  });

  const handleChangeWorkspace = async (id: string) => {
    setLoading(true);
    await authService.upDateUser({ last_workspace_id: id });
    dispatch(authSlice.actions.clearInfo());
    setLoading(false);
    changeRoute('/');
  };

  const links: LinkProps[] = [
    {
      href: '/',
      nickname: 'home',
    },
  ];

  const colap = () => {
    if (checkIsMobile()) {
      dispatch(layoutSlice.actions.setToggleCollap(true));
    }
  };

  return (
    <div className="w-[300px] text-sm">
      <div className="py-2 px-3 flex justify-between items-center">
        <span>Workspace</span>
        {loading && <VscLoading className="animate-spin" />}
      </div>
      <div className="border-b border-theme-border-secondary"></div>
      <div className="py-2 px-3 select-none">
        <ContainerLink links={links} />
        {workspaces && workspaces.length > 0 ? (
          workspaces.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  item.id && handleChangeWorkspace(item.id);
                }}
                className="py-1 px-2 flex rounded justify-between items-center hover:bg-theme-secondary cursor-pointer"
              >
                <div className="flex items-center">
                  <Avatar>{item?.name || ''}</Avatar>
                  <span className="ml-2">{item?.name || ''}</span>
                </div>
                {info?.last_workspace_id === item.id && <BsCheck2 />}
              </div>
            );
          })
        ) : (
          <div className="py-1 px-2 flex rounded h-10 justify-between items-center bg-theme-secondary cursor-pointer"></div>
        )}
        <div
          onClick={() => {
            changeRoute('/create-workspace');
          }}
          className="py-1 px-2 flex rounded hover:bg-theme-secondary cursor-pointer items-center"
        >
          <HiOutlinePlusSmall />
          <span className="ml-2">Create Workspace</span>
        </div>
      </div>

      <div className="border-b border-theme-border-secondary"></div>

      <div className="py-2 px-3">
        <div
          onClick={() => {
            colap();
            changeRoute(`/${info?.workspace?.slug}/settings`);
          }}
          className="py-1 px-2 hover:bg-theme-secondary font-medium select-none rounded cursor-pointer"
        >
          Workspace Settings
        </div>
        <div
          className="py-1 px-2 hover:bg-theme-secondary font-medium select-none rounded cursor-pointer"
          onClick={() => {
            colap();
            changeRoute(`/invitations`);
          }}
        >
          Workspace Invites
        </div>
        <div
          onClick={() => {
            colap();
            changeRoute(
              `/${info?.workspace?.slug}/profile/${info?.workspace?.id}`
            );
          }}
          className="py-1 px-2 hover:bg-theme-secondary font-medium select-none rounded cursor-pointer"
        >
          My Profile
        </div>
      </div>

      <div className="border-b border-theme-border-secondary"></div>

      <div
        onClick={() => {
          // dispatch(layoutSlice.actions.setToggleCollap())
          router.push(`/?next=${pathName}`);
          authService.logOut();
        }}
        className="py-2 px-3 text-color-error"
      >
        <div className="py-1 px-2 hover:bg-theme-secondary  font-medium select-none rounded cursor-pointer">
          Sign out
        </div>
      </div>
    </div>
  );
};

export default WorkspacePopover;
