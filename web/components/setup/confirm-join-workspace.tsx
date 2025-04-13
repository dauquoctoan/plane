'use client';
import Button from '@/components/ui/button';
import authService from '@/services/auth-services';
import workspaceService from '@/services/workspace-services';
import { IData, IInfo, IWorkspace } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import { VscLoading } from 'react-icons/vsc';
import useSWR from 'swr';

const Page = () => {
  const workspaceId = useSearchParams().get('workspaceId');
  const token = useSearchParams().get('token');
  const { data: info, isLoading: loadingInfo } = useSWR('me', () =>
    authService.getUser()
  );
  const { data: workspace } = useSWR(
    () => workspaceId,
    (id) => workspaceService.findWorkspaceById<IData<IWorkspace>>(+id)
  );
  const router = useRouter();

  return (
    <div className="w-full h-screen pt-72">
      <div className="my-0 mx-auto w-[500px] h-24 flex flex-col items-center">
        {workspaceId && token && workspace ? (
          <div className="flex flex-col items-center">
            <Button
              onClick={async () => {
                const result = await workspaceService.joinWorkspace({
                  workspace_id: +workspaceId,
                  token: token,
                });
                if (result) {
                  router.push(workspace.slug || '');
                }
              }}
              text="Join"
              typeBTN="primary"
            />
            <div className="text-lg font-bold mt-2">
              Workspace: {workspace.name}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-lg font-medium mb-6">
              Didn`t find any invitations
            </div>
            {!loadingInfo ? (
              !info ? (
                <div className="flex flex-col gap-3 items-center">
                  <div>Do you want Register ?</div>
                  <Button
                    onClick={() => {
                      router.push('/');
                    }}
                    text="Register"
                    typeBTN="primary"
                  />
                </div>
              ) : (
                <div>
                  <Button
                    onClick={() => {
                      router.push(info?.workspace?.slug || '');
                    }}
                    text="Go to your workspace"
                    typeBTN="primary"
                  />
                </div>
              )
            ) : (
              <VscLoading className="animate-spin" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
const ConfirmJoinWorkspace = () => (
  <Suspense>
    <Page />
  </Suspense>
);

export default ConfirmJoinWorkspace;
