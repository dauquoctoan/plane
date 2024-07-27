import Popover from '@/components/ui/popover';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import projectService from '@/services/project-services';
import { modalSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IInfo, IIssue, ILabel, IParams, IProject, IState } from '@/types';
import { useParams, usePathname } from 'next/navigation';
import React, { Dispatch, FC, useEffect, useRef, useState } from 'react';
import { IoIosLink, IoIosMore } from 'react-icons/io';
import { HiPlusSm } from 'react-icons/hi';
import useSWR, { mutate } from 'swr';
import MoreTools from '../../../module/moreTools';
import SelectState from '@/components/module/selectState';
import SelectMember from '@/components/module/selectMember';
import SelectLabels from '@/components/module/selectLabels';
import DatePickerTable from '@/components/module/datePickerTable';
import moment from 'moment';
import {
  MdModeEditOutline,
  MdOutlineContentCopy,
  MdOutlineDeleteOutline,
} from 'react-icons/md';
import { icons } from '@/constants';
import { useDispatch } from 'react-redux';
import { env } from 'process';
import APP_CONFIG from '@/configs';
import { AnyAction } from '@reduxjs/toolkit';
import { INotiConext } from '@/components/ui/notification';
import { getConfigMoreIssue } from '@/helpers';

interface IListBoard {
  states: IState[];
  issues: IIssue[];
}

const ListBoard: FC<IListBoard> = ({ states, issues }) => {
  const dataConvert: { [e: string]: { name: string; chilren: IIssue[] } } =
    states.reduce((prevData, item: IState) => {
      return {
        ...prevData,
        [item.id]: {
          name: item.name,
          chilren: [],
        },
      };
    }, {});
  const params = useParams<IParams>();
  const pathName = usePathname();
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();

  issues.forEach(e => {
    dataConvert[e.state.id].chilren.push(e);
  });

  const { data: project } = useSWR(params.projectid, () => {
    return projectService.findOneProject(params.projectid);
  });
  const noti = useNoti();
  return (
    <div className="w-full">
      {Object.keys(dataConvert).map((key, index) => {
        return (
          <div className="" key={index}>
            <div className="px-3 py-3 border-b bg-theme-secondary flex gap-2 items-center">
              <div className="text-sm">{dataConvert[key].name}</div>
              <div className="text-sm font-semibold">
                ({dataConvert[key].chilren.length})
              </div>
            </div>
            <div>
              {dataConvert[key].chilren.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="flex-col md:flex-row px-3 py-2 border-b flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4 whitespace-nowrap">
                      <div className="text-sm font-semibold">
                        {project?.identifier?.toUpperCase() +
                          '-' +
                          item.sequence_id}
                      </div>
                      <div className="text-sm whitespace-nowrap">
                        {item.name}
                      </div>
                    </div>
                    <div className="flex-wrap md:flex-nowrap flex flex-1 justify-start items-center md:justify-end gap-2">
                      <SelectMember
                        assigness={
                          item.assignees?.map((e: any) => e.id) as string[]
                        }
                        style={{ width: 90 }}
                        projectId={item.project_id}
                        beforeUpdateValue={(change: any) => {
                          return issueService.updateIssueAssign(
                            item.id || '',
                            change
                          );
                        }}
                      />

                      <SelectState
                        projectId={params.projectid}
                        stateId={item.state.id}
                        beforeUpdateValue={e =>
                          issueService.updateIssue(item.id, {
                            state_id: e as string,
                          })
                        }
                      />

                      <SelectLabels
                        projectId={item.project_id}
                        labels={item.labels?.map((e: any) => e.id) || []}
                        style={{ width: '' }}
                        beforeUpdateValue={change => {
                          return issueService.updateIssueLabel(
                            change as string[],
                            item.id || ''
                          );
                        }}
                      />

                      <DatePickerTable
                        defaultDate={item.start_date}
                        name="Start Date"
                        style={{ width: 'fit-content' }}
                        beforeUpdateValue={e => {
                          return issueService.updateIssue(item.id, {
                            start_date: e ? moment(e).format() : (null as any),
                          });
                        }}
                      />

                      <DatePickerTable
                        defaultDate={item.target_date}
                        name="Due Date"
                        style={{ width: 'fit-content' }}
                        beforeUpdateValue={e => {
                          return issueService.updateIssue(item.id, {
                            target_date: e ? moment(e).format() : (null as any),
                          });
                        }}
                      />

                      <Popover
                        content={
                          <MoreTools
                            data={getConfigMoreIssue(
                              item,
                              pathName,
                              dispatch,
                              noti,
                              info
                            )}
                          />
                        }
                      >
                        <div className="p-2 rounded-full hover:bg-theme-secondary cursor-pointer">
                          <IoIosMore />
                        </div>
                      </Popover>
                    </div>
                  </div>
                );
              })}
            </div>
            <MoreIssue
              stateId={key}
              name={dataConvert[key].name}
              identifier={project?.identifier || ''}
            />
          </div>
        );
      })}
    </div>
  );
};

const MoreIssue = ({
  stateId,
  name,
  identifier,
}: {
  stateId: string;
  name: string;
  identifier: string;
}) => {
  const refInput = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const params = useParams<IParams>();
  const info = useSelector(selectInfo);
  const noti = useNoti();

  useEffect(() => {
    const handleClickClose = (e: any) => {
      if (!refInput.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    if (refInput.current) {
      document.addEventListener('click', handleClickClose);
    }

    return () => {
      document.removeEventListener('click', handleClickClose);
    };
  }, [open]);

  const handleCreateIssue = async (
    name: string,
    stateId: string,
    stateName: string
  ) => {
    mutate<IIssue[]>(
      pathName,
      async (issue) => {
        const issueResult = await issueService.createIssue({
          name: name,
          state_id: stateId,
          project_id: params.projectid,
          cycle_id: params.cycleid,
          module_id: params.moduleid,
          workspace_id: info?.last_workspace_id,
          is_draft: false,
          priority: 'urgent',
        });
        if (issueResult) {
          noti?.success('Issue created');
          setOpen(false);
          const itemConvert: IIssue = {
            ...issueResult,
            state_id: stateId,
            state: {
              id: stateId,
              name: stateName,
            },
          };
          return [...(issue||[]), itemConvert];
        } else {
          noti?.error('An error occurred, please try again later');
          return issue;
        }
      },
      { revalidate: false }
    );
  };

  return (
    <div>
      {open ? (
        <div className="px-3">
          <div
            ref={refInput}
            className="py-2 w-full border-b border-theme-border-secondary flex gap-2"
          >
            <div className="text-sm font-semibold whitespace-nowrap">
              {identifier + ' - ' + name}
            </div>
            <input
              className="outline-none text-sm flex-1"
              autoFocus
              onKeyDown={(e: any) => {
                if (e.keyCode == 13) {
                  handleCreateIssue(e.target.value, stateId, name);
                }
              }}
            />
          </div>
          <div className="py-2 text-[11px]">Press Enter to add issue</div>
        </div>
      ) : (
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="px-3 py-2 flex items-center gap-2 border-b bg-color-special-secondary text-color-special-primary cursor-pointer select-none"
        >
          <HiPlusSm />
          <div className="text-sm">New issue</div>
        </div>
      )}
    </div>
  );
};

export default ListBoard;
