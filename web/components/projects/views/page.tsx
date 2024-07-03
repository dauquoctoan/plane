'use client';
import { KEY_PROJECT_VIEW } from '@/apiKey';
import EmptyProjects from '@/components/module/emptyProjects';
import MoreToolls from '@/components/module/moreToolls';
import Popover from '@/components/ui/popover';
import APP_CONFIG from '@/configs';
import { icons } from '@/constants';
import { createNickNameLink } from '@/helpers';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import projectService from '@/services/project-services';
import { modalSlice } from '@/store';
import { IIssueViews, IParams } from '@/types';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { changeRoute, ContainerLink } from 'nextjs-progressloader';
import React from 'react';
import { IoIosMore } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import useSWR, { mutate } from 'swr';

const ProjectView = () => {
  const params = useParams<IParams>();
  const noti = useNoti();
  const pathName = usePathname();
  const dispatch = useDispatch();

  const { data: views } = useSWR(KEY_PROJECT_VIEW(params.projectid), () => {
    return projectService.getProjectView(params.projectid);
  });

  console.log(views);

  return (
    <>
      {views?.length ? (
        <>
          {views?.map(item => {
            const link = pathName + '/' + item.id;
            return (
              <div
                key={item.id}
                className="px-3 flex justify-between items-center py-2 hover:bg-theme-secondary cursor-pointer border-b"
              >
                <div
                  className="text-sm flex-1"
                  onClick={() => {
                    changeRoute(link);
                  }}
                >
                  <ContainerLink
                    links={[
                      {
                        nickname: createNickNameLink(item.id || ''),
                        href: link,
                      },
                    ]}
                  />
                  {item.name}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 text-xs rounded-full bg-black text-theme-primary flex items-center justify-center">
                    {(item?.creator?.username &&
                      item?.creator?.username[0].toUpperCase()) ||
                      ''}
                  </div>

                  <Popover
                    content={
                      <MoreToolls
                        data={[
                          {
                            text: 'Edit',
                            icon: icons.edit,
                            cb: () => {
                              dispatch(modalSlice.actions.setViews(item));
                              dispatch(modalSlice.actions.togleProjectViews());
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
                              const result =
                                await projectService.deleteProjectView(
                                  item.id || ''
                                );
                              if (result) {
                                noti?.success('Delete project view success');
                                mutate(
                                  KEY_PROJECT_VIEW(params.projectid),
                                  (data: any) => {
                                    return data.filter(
                                      (itemView: IIssueViews) =>
                                        itemView.id != item.id
                                    );
                                  }
                                );
                              } else noti?.error('Delete project view error');
                            },
                          },
                        ]}
                      />
                    }
                  >
                    <div
                      onClick={e => {
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
          })}
        </>
      ) : (
        <EmptyProjects
          cb={() => dispatch(modalSlice.actions.togleProjectViews())}
          textBtn="Set your first view"
          title="Group and timebox your work in Cycles."
          desc="Break work down by timeboxed chunks, work backwards from your project deadline to set dates, and make tangible progress as a team."
        />
      )}
    </>
  );
};

export default ProjectView;
