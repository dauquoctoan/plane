'use client';
import { drawerViewSlice, useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IIssue, IIsueReaction, ILabel, IParams, IUser } from '@/types';
import { useParams, usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';
import { IoMdLink } from 'react-icons/io';
import {
  MdDeleteOutline,
  MdOutlineOpenInFull,
  MdOutlineSignalCellularAlt,
} from 'react-icons/md';
import Input from '../../ui/input/Input';
import TipTapPopover from '../../ui/tiptap/tipTapPopover';
import issueService from '@/services/issue-services';
import { useNoti } from '@/hooks';
import lodash from 'lodash';
import { GrUpdate } from 'react-icons/gr';
import ReactionEmoji from '../../ui/reactionEmoji';
import useSWR, { mutate } from 'swr';
import { createNickNameLink, renderEmoji } from '@/helpers';
import IssueLink from './issueLink';
import { optionLevel } from '@/constants';
import { IoSyncCircleOutline } from 'react-icons/io5';
import Line from '@/components/ui/line';
import SelectMemberTable from '@/components/module/selectMember';
import SelectState from '@/components/module/selectState';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Select from '@/components/ui/select/select';
import { CiCalendarDate } from 'react-icons/ci';
import DatePickerTable from '@/components/module/datePickerTable';
import moment from 'moment';
import SelectLabelsTable from '@/components/module/selectLabels';
import Confirm from '@/components/ui/confirm';
import { SWR_KEY_LS_ISSUE_REACTIONS } from '@/apiKey';
import { changeRoute, ContainerLink } from 'nextjs-progressloader';

export interface IIssueDetail {
  issue?: IIssue;
}

const IssueDetail: FC<IIssueDetail> = ({ issue }) => {
  const param = useParams<IParams>();
  const { data: issueDetail } = useSWR(issue ? null : param.issueid, () => {
    return issueService.findOneIssue(param?.issueid || '');
  });
  const dataItem = issue || issueDetail;
  const { data: reactions } = useSWR(
    SWR_KEY_LS_ISSUE_REACTIONS(issue?.id || param.issueid),
    () => {
      return issueService.findReaction<IIsueReaction[]>(
        issue?.id || param.issueid
      );
    }
  );
  const info = useSelector(selectInfo);
  const noti = useNoti();
  const dispatch = useDispatch();
  const [isSaving, setIsSaving] = useState(false);
  const pathName = usePathname();
  const handleUpdateIssue = lodash.debounce(
    async (issueUpdate: Partial<IIssue>) => {
      await issueService.updateIssue(issue?.id, issueUpdate);
      setIsSaving(false);
    },
    2000
  );
  const handleCreateReaction = (reaction: Partial<IIsueReaction>) => {
    mutate<IIsueReaction[]>(
      SWR_KEY_LS_ISSUE_REACTIONS(dataItem?.id),
      async (prevData) => {
        const result =
          await issueService.createReaction<IIsueReaction>(reaction);
        if (result && info)
          return [...(prevData || []), { ...result, user: info }];
        else noti?.error('Reaction error');

        return prevData;
      }
    );
  };
  const handleRemoveReaction = async (id?: string) => {
    if (id) {
      const result = await issueService.removeReaction(id);
      if (result) {
        mutate<IIsueReaction[]>(
          SWR_KEY_LS_ISSUE_REACTIONS(dataItem?.id),
          (prevData) => {
            return prevData?.filter((e) => {
              return e.id != id;
            });
          }
        );
      }
    }
  };
  const convert = reactions?.reduce((value: { [e: string]: number }, item) => {
    value[item.reaction || ''] = (value[item.reaction || ''] || 0) + 1;

    return value;
  }, {});

  function handleReaction(e: string) {
    const reaction = reactions?.find((reaction) => {
      return reaction.reaction == e && reaction.user.id == info?.id;
    });
    if (reaction) {
      handleRemoveReaction(reaction.id);
    } else {
      handleCreateReaction({
        reaction: e,
        issue_id: dataItem?.id || '',
        actor: info?.id,
      });
    }
  }

  const properties = [
    {
      name: 'State',
      icons: <IoSyncCircleOutline />,
      content: (
        <SelectState
          style={{ width: '100%' }}
          border={false}
          stateId={dataItem?.state_id || ''}
          projectId={dataItem?.project_id || ''}
          beforeUpdateValue={(e) =>
            issueService.updateIssue(dataItem?.id, {
              state_id: e as string,
            })
          }
        />
      ),
    },
    {
      name: 'Assignees',
      icons: <BsFillPersonLinesFill />,
      content: (
        <SelectMemberTable
          style={{ width: '100%' }}
          assigness={
            dataItem?.assignees?.map((e) => {
              const user = e as IUser;

              return user.id;
            }) as string[]
          }
          border={false}
          projectId={dataItem?.project_id}
          beforeUpdateValue={(change: any) => {
            return issueService.updateIssueAssign(dataItem?.id || '', change);
          }}
        />
      ),
    },
    {
      name: 'Priority',
      icons: <MdOutlineSignalCellularAlt />,
      content: (
        <Select
          style={{ width: '100%' }}
          border={false}
          options={optionLevel}
          defaultValue={dataItem?.priority}
          isIconCheck
          fontSize="text-[12px]"
          beforeUpdateValue={(change) => {
            return issueService.updateIssue(dataItem?.id, {
              priority: change as string,
            });
          }}
          isChildren={false}
        />
      ),
    },
    {
      name: 'Start date',
      icons: <CiCalendarDate />,
      content: (
        <DatePickerTable
          placement="bottomLeft"
          border={false}
          style={{ width: '100%' }}
          defaultDate={dataItem?.start_date}
          name="Start Date"
          beforeUpdateValue={(e) => {
            return issueService.updateIssue(dataItem?.id, {
              start_date: e ? moment(e).format() : (null as any),
            });
          }}
        />
      ),
    },
    {
      name: 'Due date',
      icons: <CiCalendarDate />,
      content: (
        <DatePickerTable
          border={false}
          placement="bottomLeft"
          style={{ width: '100%' }}
          defaultDate={dataItem?.target_date}
          name="Due date"
          beforeUpdateValue={(e) => {
            return issueService.updateIssue(dataItem?.id, {
              target_date: e ? moment(e).format() : (null as any),
            });
          }}
        />
      ),
    },
    {
      name: 'Labels',
      icons: <CiCalendarDate />,
      content: (
        <SelectLabelsTable
          border={false}
          style={{ width: '100%' }}
          projectId={dataItem?.project_id}
          labels={dataItem?.labels?.map((e: any) => e?.id) || []}
          beforeUpdateValue={(change) => {
            return issueService.updateIssueLabel(
              change as string[],
              dataItem?.id || ''
            );
          }}
        />
      ),
    },
  ];

  return (
    <div className="p-2 h-screen flex flex-col">
      <div className="w-full flex justify-between py-3">
        <div className="flex items-center gap-2">
          <ContainerLink
            links={[
              {
                href: `/${info?.workspace?.slug}/projects/${param.projectid}/issues/${dataItem?.id}`,
                nickname: createNickNameLink(dataItem?.id || ''),
              },
            ]}
          />
          {issue && (
            <MdOutlineOpenInFull
              onClick={() => {
                changeRoute(
                  `/${info?.workspace?.slug}/projects/${param.projectid}/issues/${dataItem?.id}`
                );
                setTimeout(() => {
                  dispatch(drawerViewSlice.actions.closeDrawer());
                }, 100);
              }}
              className="cursor-pointer"
            />
          )}
        </div>
        <div className="flex items-center gap-2">
          {isSaving && (
            <div className="flex items-center gap-1 text-[11px]">
              <GrUpdate />
              <div>Saving...</div>
            </div>
          )}
          <IoMdLink
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(
                `${process.env.NEXT_PUBLIC_HOST}/${info?.workspace?.slug}/projects/${param.projectid}/issues/${dataItem?.id}`
              );
              noti?.success('successfully copied the path');
            }}
          />
          <Confirm
            title="Delete the issue"
            desc="Are you sure to delete this issue?"
            onConfirm={async () => {
              const res = await issueService.deleteIssue(dataItem?.id || '');

              if (res) {
                mutate<IIssue[]>(pathName, (prevData) => {
                  return prevData?.filter((e) => {
                    dataItem?.id != e.id;
                  });
                });
                dispatch(drawerViewSlice.actions.closeDrawer());

                noti?.success('Delete issue success');
              } else noti?.error('Delete issue error');
            }}
          >
            <MdDeleteOutline className="cursor-pointer text-color-error" />
          </Confirm>
        </div>
      </div>
      <div className="flex-1 overflow-x-hidden overflow-y-auto px-3">
        <div className="min-w-[700px] max-h-[900px] pt-4">
          <div className="px-6 py-2">
            {dataItem?.name && (
              <Input
                placeholder="Title"
                onChangeCB={(e) => {
                  !isSaving && setIsSaving(true);
                  handleUpdateIssue({ name: e.target.value });
                }}
                wrClassName="mb-4"
                defaultValue={dataItem?.name}
                validator={{ required: true }}
              />
            )}
            {dataItem?.description && (
              <TipTapPopover
                onChange={(e) => {
                  !isSaving && setIsSaving(true);
                  handleUpdateIssue({ description: e as string });
                }}
                defaultValue={dataItem?.description}
                name="desc"
                className="mb-4"
              />
            )}
            <div className="flex gap-3">
              <ReactionEmoji
                onChange={async (e) => {
                  handleReaction(e);
                }}
              />
              <div className="flex gap-2">
                {convert &&
                  Object.keys(convert)?.map((e, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => {
                          handleReaction(e);
                        }}
                        className="rounded bg-theme-secondary p-[1px] flex gap-1 items-center cursor-pointer"
                      >
                        <div>{renderEmoji(e)}</div>
                        <div>{convert[e]}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-sm">Properties</div>
          <Line />
          <div className="w-full flex flex-col gap-2">
            {dataItem &&
              properties.map((item, index) => {
                return (
                  <div key={index} className="flex justify-between">
                    <div className="flex items-center gap-2 w-[200px]">
                      {item.icons}
                      <div className="text-sm">{item.name}</div>
                    </div>
                    <div className="text-sm flex items-center gap-2 flex-1 py-1 hover:bg-theme-secondary rounded cursor-pointer">
                      {item.content}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {dataItem?.id && <IssueLink issueId={dataItem?.id || ''} />}
      </div>
    </div>
  );
};

export default IssueDetail;
