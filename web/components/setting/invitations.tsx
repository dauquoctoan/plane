'use client';
import workspaceService from '@/services/workspace-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IInfo, IWorkspaceMemberInvite } from '@/types';
import React, { useState } from 'react';
import useSWR from 'swr';
import Avatar from '../ui/avatar';
import Button from '../ui/button';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { ContainerLink, changeRoute } from 'nextjs-progressloader';
import { useNoti } from '@/hooks';

const Invitations = () => {
  const { data: member, isLoading } = useSWR('WorkspaceMemberInvite', () => {
    return workspaceService.findWorkspaceMemberInvite<
      IWorkspaceMemberInvite[]
    >();
  });
  const info = useSelector(selectInfo);

  return (
    <div className="w-full h-full flex justify-center">
      <ContainerLink
        links={[{ href: '/' + info?.workspace?.slug, nickname: 'home' }]}
      />
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          {member?.length ? (
            <SelectToJoin member={member} info={info} />
          ) : (
            <EmptyMemberInvite info={info} />
          )}
        </div>
      )}
    </div>
  );
};const EmptyMemberInvite = ({ info }: { info: IInfo | null | undefined }) => {
  return (
    <div className="w-auto h-auto">
      <div className="mt-20">
        <div className="text-3xl font-bold text-center">No pending invites</div>
        <div className="text-base font-bold mb-4 text-center">
          You can see here if someone invites you to a workspace.
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          text="Back to dashboard"
          typeBTN="primary"
          onClick={() => {
            changeRoute('/' + info?.workspace?.slug);
          }}
        />
      </div>
    </div>
  );
};const SelectToJoin = ({
  member,
  info,
}: {
  member: IWorkspaceMemberInvite[];
  info: IInfo | null | undefined;
}) => {
  const [index, setIndex] = useState<string[]>([]);
  const noti = useNoti();  const handleJoinWorkspaceInWeb = async () => {
    const result = await workspaceService.joinWorkspaceInWeb({
      data: index,
    });
    if (result) {
      noti?.success('Join to Workspace success');
      changeRoute('/' + info?.workspace?.slug);
    } else {
      noti?.error('join to workspace error');
    }
  };

  return (
    <div className="w-auto h-auto">
      <div className="mt-20">
        <div className="text-base font-bold mb-4">
          We see that someone has invited you to
        </div>
        <div className="text-3xl font-bold">Join a workspace</div>
      </div>
      <div className="flex flex-col gap-3 mt-9">
        {member &&
          member?.map((e, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  if (e.id && index.includes(e.id)) {
                    const newIndex = [...index];
                    setIndex(newIndex.filter(item => item != e.id));
                  } else if (e.id) {
                    setIndex([...index, e.id]);
                  }
                }}
                className={`border flex justify-between items-center rounded px-4 py-2 cursor-pointer ${
                  index.includes(e.id || '')
                    ? 'bg-color-special-secondary border-color-special-primary'
                    : ''
                }`}
              >
                <div className="flex gap-2 items-center">
                  <Avatar>{e.email}</Avatar>
                  <span>{e.workspace?.name}</span>
                </div>
                {index.includes(e.id || '') && (
                  <FaRegCircleCheck className="text-color-special-primary" />
                )}
              </div>
            );
          })}
      </div>
      <div className="flex gap-3 items-center mt-5">
        <Button
          typeBTN="primary"
          text="Accept & Join"
          disable={index.length === 0}
          onClick={() => {
            handleJoinWorkspaceInWeb();
          }}
        />
        <Button
          className=""
          text="Go Home"
          typeBTN="dashed"
          onClick={() => {
            changeRoute('/' + info?.workspace?.slug);
          }}
        />
      </div>
    </div>
  );
};

export default Invitations;
