import React, { FC, useRef } from 'react';
import { IoIosMore } from 'react-icons/io';
import { IBoardIssues } from './KanbanBoard';
import SelectState from '@/components/module/selectState';
import { useParams } from 'next/navigation';
import { ILabel, IParams } from '@/types';
import issueService from '@/services/issue-services';
import SelectLabelsTable from '@/components/module/selectLabels';
import SelectMemberTable from '@/components/module/selectMember';
import { drawerViewSlice, useDispatch } from '@/store';
export interface IProps {
  data: IBoardIssues;
  setBlocks: React.Dispatch<React.SetStateAction<IBoardIssues[]>>;
  indexs: number[];
  parentId?: string;
  blocks: IBoardIssues[];
}

const IssueDragItem: FC<IProps> = ({
  data,
  setBlocks,
  indexs,
  parentId,
  blocks,
}) => {
  const prevState = useRef<string>('');
  const param = useParams<IParams>();
  const dispatch = useDispatch();

  return (
    <div className="block relative bg-theme-primary p-2 mb-3 border rounded">
      <div className="min-w-[250px] bg-theme-primary flex flex-col">
        <div className="flex justify-between">
          <div className="w-28 overflow-hidden whitespace-nowrap text-ellipsis">
            {data.id}
          </div>
          <div className="p-3 invisible hover:visible bg-theme-secondary">
            <IoIosMore />
          </div>
        </div>
        <div
          className="font-bold text-sm bg-theme-primary mb-2 cursor-pointer"
          onClick={() => {
            data.data &&
              dispatch(drawerViewSlice.actions.setIssueSlected(data.data));
            dispatch(drawerViewSlice.actions.openDrawer());
          }}
        >
          {data.title}
        </div>
        <div className="flex gap-2 bg-theme-primary">
          {data.data?.state_id && data.id && (
            <SelectState
              value={parentId}
              projectId={param.projectid}
              showMoreText={false}
              stateId={data.data?.state_id}
              onChange={(id) => {
                const newData = [...blocks];
                const item = newData[indexs[0]].children?.splice(indexs[1], 1);
                const index = newData.findIndex((e) => {
                  return e.id === id;
                });

                if (index && item) {
                  newData[index].children = [
                    ...(newData[index].children || []),
                    ...item,
                  ];
                }
                setBlocks(newData);
              }}
              beforeUpdateValue={(id) => {
                prevState.current = id as string;

                return issueService.updateIssue(data.id as string, {
                  state_id: id as string,
                });
              }}
            />
          )}
          <SelectLabelsTable
            projectId={param.projectid}
            showMoreText={false}
            labels={
              (data?.data?.labels?.map((e: any) => e.id) as string[]) || []
            }
            beforeUpdateValue={(change) => {
              return issueService.updateIssueLabel(
                change as string[],
                data.id || ''
              );
            }}
          />
          <SelectMemberTable
            assigness={data?.data?.assignees?.map((e: any) => e.id) as string[]}
            projectId={param.projectid}
            showMoreText={false}
            size="sm"
            beforeUpdateValue={(change: any) => {
              return issueService.updateIssueAssign(data.id || '', change);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IssueDragItem;
