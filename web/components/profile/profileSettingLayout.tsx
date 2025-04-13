'use client';
import workspaceService from '@/services/workspace-services';
import { IWorkspace } from '@/types';
import { usePathname } from 'next/navigation';
import { ContainerLink, changeRoute } from 'nextjs-progressloader';
import React, { useEffect, useRef } from 'react';
import { IoMdPersonAdd } from 'react-icons/io';
import { BiSolidPlusSquare } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaAngleLeft, FaRegHeart } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import useSWR from 'swr';
import Avatar from '../ui/avatar';
import { layoutSlice, selectIsCollapProfile, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { useDispatch } from 'react-redux';
import { checkIsMobile } from '@/helpers';

const ProfileSettingLayout = () => {
  const path = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const acounts = [
    {
      icons: <CgProfile />,
      text: 'Profile',
      href: '/profile',
      nickname: 'profileSetting',
    },
    {
      icons: <FiActivity />,
      text: 'Activity',
      href: '/profile/activity',
      nickname: 'activitySetting',
    },
    {
      icons: <FaRegHeart />,
      text: 'Preferences',
      href: '/profile/preferences/theme',
      nickname: 'preferencesSettingTheme',
    },
  ];
  const more = [
    {
      icons: <BiSolidPlusSquare />,
      text: 'Create workspace',
      href: '/create-workspace',
    },
    {
      icons: <IoMdPersonAdd />,
      text: 'Invitations',
      href: '/invitations',
    },
  ];
  const info = useSelector(selectInfo);
  const isCollap = useSelector(selectIsCollapProfile);
  const dispatch = useDispatch();
  const { data: workspaces } = useSWR('workspaces', () => {
    return workspaceService.getWorkspaceByUser<IWorkspace[]>();
  });

  useEffect(() => {
    if (checkIsMobile()) {
      dispatch(layoutSlice.actions.setToggleCollapProfileSetting(true));
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`md:w-auto fixed md:static z-50 top-0 left-0 ${isCollap ? 'w-auto ' : 'w-full'}  bg-color-modal-overlay  h-[100vh]`}
      onClick={(e) => {
        if (ref.current === e.target && !isCollap)
          dispatch(layoutSlice.actions.setToggleCollapProfileSetting(true));
      }}
    >
      <div className="">
        <div
          className={`fixed transition-all ease-in-out duration-75 overflow-hidden bg-theme-primary z-50 left-0 top-0 md:static ${isCollap ? 'w-0 p-0 md:w-[300px] md:px-4 md:py-2' : 'w-[300px] px-4 py-2'} border-r h-[100vh]`}
        >
          <ContainerLink
            links={[{ href: '/' + info?.workspace?.slug, nickname: 'home' }]}
          />
          <div
            className="flex group items-center gap-2 select-none cursor-pointer"
            onClick={() => {
              changeRoute('/' + info?.workspace?.slug);
            }}
          >
            <FaAngleLeft className="group-hover:scale-110" />
            <div className="text-lg font-bold">Profile settings</div>
          </div>
          <div>
            <div className="text-color-text-sidebar mb-2">Your account</div>

            <ContainerLink links={acounts} />

            <div className="flex flex-col gap-1">
              {acounts.map((e, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      changeRoute(e.href);
                    }}
                    className={`flex select-none items-center px-2 py-1 rounded ${
                      path == e.href
                        ? 'bg-color-special-secondary text-color-special-primary'
                        : 'hover:bg-theme-secondary'
                    } cursor-pointer gap-2 font-semibold`}
                  >
                    {e.icons}
                    <div>{e.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="py-4 max-h-[50vh]">
            <div className="mb-2 text-color-text-sidebar">Workspaces</div>
            <div className="flex flex-col gap-1 overflow-x-hidden overflow-y-auto">
              {workspaces?.map((e, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center px-2 py-1 cursor-pointer select-none hover:bg-theme-secondary rounded"
                >
                  <Avatar>{e.name || ''}</Avatar>
                  <div className="text-base ">{e.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <ContainerLink links={more} />
            {more.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    changeRoute(e.href);
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:bg-theme-secondary rounded px-2 py-1"
                >
                  {e.icons}
                  <div>{e.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingLayout;
