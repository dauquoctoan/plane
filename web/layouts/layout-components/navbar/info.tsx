import React from 'react';
import Avatar from '../../../components/ui/avatar';
import { useSelector } from '@/store';
import { selectIsCollap } from '@/store/slices/layoutSlice/selectors';
import WorkspacePopover from '../../../components/layout/navbar/workspacePopover';
import UserInfoPopup from '../../../components/layout/navbar/userInfoPopup';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { ContainerLink } from 'nextjs-progressloader';
import MenuTools from '@/components/layout/navbar/menuTools';
import Popover from '@/components/ui/popover';

const Info = () => {
  const isCollapse = useSelector(selectIsCollap);
  const info = useSelector(selectInfo);
  return (
    <div className="w-full pt-4 pl-4 pr-4 flex flex-col">
      <div className="w-full flex items-center cursor-pointer">
        <ContainerLink
          links={[
            {
              href: `/create-workspace`,
              nickname: 'createWorkspace',
            },
            {
              href: `/invitations`,
              nickname: 'invitations',
            },
            {
              href: `/${info?.workspace?.slug}/settings`,
              nickname: 'settings',
            },
            {
              href: `/${info?.workspace?.slug}/profile/${info?.workspace?.id}`,
              nickname: 'profile',
            },
          ]}
        />

        <Popover
          wrClassName="p-1 bg-theme-secondary flex-1 rounded"
          placement="bottomLeft"
          content={<WorkspacePopover />}
        >
          <div className="flex h-fit gap-2">
            <Avatar>{info?.workspace?.name || ''}</Avatar>
            {!isCollapse && (
              <div className="font-[500] flex items-center whitespace-nowrap overflow-hidden text-ellipsis w-[150px]">
                {info?.workspace?.name}
              </div>
            )}
          </div>
        </Popover>

        {!isCollapse ? (
          <Popover placement="bottomRight" content={<UserInfoPopup />}>
            <div className="ml-2">
              <Avatar>{info?.email || ''}</Avatar>
            </div>
          </Popover>
        ) : (
          <></>
        )}
      </div>
      <MenuTools />
    </div>
  );
};

export default Info;
