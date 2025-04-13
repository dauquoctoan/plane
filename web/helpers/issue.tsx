import { IInfo, IIssue, IState } from '@/types';
import { Dispatch, ReactElement } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { CiCircleMore } from 'react-icons/ci';
import { FaRegCircle } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { TbProgress } from 'react-icons/tb';
import APP_CONFIG from '@/configs';
import { AnyAction } from '@reduxjs/toolkit';
import { INotiConext } from '@/components/ui/notification';
import { icons } from '@/constants';
import { modalSlice } from '@/store';
import issueService from '@/services/issue-services';
import { mutate } from 'swr';

export function getIcons(group: string = '', color = 'red'): ReactElement {
  switch (group) {
    case 'backlog':
      return <TbProgress style={{ color: color }} />;
    case 'cancelled':
      return <IoCloseCircleOutline style={{ color: color }} />;
    case 'completed':
      return <IoIosCheckmarkCircleOutline style={{ color: color }} />;
    case 'started':
      return <CiCircleMore style={{ color: color }} />;
    case 'unstarted':
      return <FaRegCircle style={{ color: color }} className={`text-[11px]`} />;
    default:
      return <IoCloseCircleOutline style={{ color: color }} />;
  }
}

export function convertDataOptions(data: IState[] | undefined) {
  return (
    data?.map((e) => ({
      title: e.name || '',
      value: e?.id.toString(),
      icon: getIcons(e.group, e.color),
    })) || []
  );
}

export const getConfigMoreIssue = (
  itemIssue: IIssue,
  pathName: string,
  dispatch: Dispatch<AnyAction>,
  noti: INotiConext | undefined,
  info: IInfo | null | undefined
) => {
  const isProjectPage = pathName.includes('projects');
  const link1 = APP_CONFIG.DOMAIN_URL + pathName + '/' + itemIssue.id;

  const link2 = `${APP_CONFIG.DOMAIN_URL}/${info?.workspace?.slug}/projects/${itemIssue.project_id}/issues/${itemIssue.id}`;

  const link = isProjectPage ? link1 : link2;

  return [
    {
      text: 'Edit issue',
      icon: icons.edit,
      cb: () => {
        dispatch(modalSlice.actions.setIssue(itemIssue));
        dispatch(
          modalSlice.actions.togleNewIssue({ isDraft: false, isShow: true })
        );
      },
    },
    {
      text: 'Copy link',
      icon: icons.copyLink,
      cb: () => {
        try {
          navigator.clipboard.writeText(link);
          noti?.success('Copy link success');
        } catch (error) {
          noti?.success('Copy link error');
        }
      },
    },
    {
      text: 'Make a copy',
      icon: icons.makeCopy,
      cb: () => {
        dispatch(
          modalSlice.actions.setIssue({
            name: itemIssue.name || '',
            description: itemIssue.description || '',
          })
        );
        dispatch(
          modalSlice.actions.togleNewIssue({ isDraft: false, isShow: true })
        );
      },
    },
    {
      text: 'Delete issue',
      icon: icons.delete,
      cb: async () => {
        const result = await issueService.deleteIssue(itemIssue.id || '');
        if (result) {
          mutate<IIssue[]>(pathName, (issues) => {
            return issues?.filter((e: IIssue) => e.id != itemIssue.id);
          });
          noti?.success('Delete issue success');
        } else noti?.success('Delete issue error !');
      },
    },
  ];
};
