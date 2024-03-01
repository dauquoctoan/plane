import Popover from '@/components/ui/popover';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import projectService from '@/services/project-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IIssue, ILabel, IParams, IProject, Istate } from '@/types';
import { useParams, usePathname } from 'next/navigation';
import React, { FC, useEffect, useRef, useState } from 'react';
import { IoIosMore } from 'react-icons/Io';
import { HiPlusSm } from 'react-icons/hi';
import useSWR, { mutate } from 'swr';
import MoreToolls from '../modules/moreToolls';
import SelectState from '@/components/module/selectState';
import SelectMember from '@/components/module/selectMember';
import SelectLabels from '@/components/module/selectLabels';
import DatepickerTable from '@/components/module/datepickerTable';
import moment from 'moment';

interface IListBoard {
    states: Istate[];
    issues: IIssue[];
}

const ListBoard: FC<IListBoard> = ({ states, issues }) => {
    const dataConvert: { [e: string]: { name: string; chilren: IIssue[] } } =
        states.reduce((prevData, item: Istate) => {
            return {
                ...prevData,
                [item.id]: {
                    name: item.name,
                    chilren: [],
                },
            };
        }, {});
    const params = useParams<IParams>();

    issues.forEach((e) => {
        dataConvert[e.state.id].chilren.push(e);
    });

    const { data: project } = useSWR(params.projectid, () => {
        return projectService.findOneProject<IProject>(params.projectid);
    });

    return (
        <div className="w-full">
            {Object.keys(dataConvert).map((key) => {
                return (
                    <div className="">
                        <div className="px-3 py-3 border-b bg-theme-secondary flex gap-2 items-center">
                            <div>{dataConvert[key].name}</div>
                            <div className="text-sm font-semibold">
                                ({dataConvert[key].chilren.length})
                            </div>
                        </div>
                        <div>
                            {dataConvert[key].chilren.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="px-3 py-2 border-b flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="text-sm font-semibold">
                                                {project?.identifier?.toUpperCase() +
                                                    '-' +
                                                    item.sequence_id}
                                            </div>
                                            <div className="text-sm">
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className="flex flex-1 items-center justify-end gap-2">
                                            <SelectMember
                                                assigness={
                                                    item.assignees?.map(
                                                        (e: any) => e.id,
                                                    ) as string[]
                                                }
                                                style={{ width: 90 }}
                                                projectId={item.project_id}
                                                beforeUpdateValue={(
                                                    change: any,
                                                ) => {
                                                    return issueService.updateIssueAssign(
                                                        item.id || '',
                                                        change,
                                                    );
                                                }}
                                            />

                                            <SelectState
                                                projectId={params.projectid}
                                                stateId={item.state.id}
                                                beforeUpdateValue={(e) =>
                                                    issueService.updateIssue(
                                                        item.id,
                                                        {
                                                            state_id:
                                                                e as string,
                                                        },
                                                    )
                                                }
                                            />

                                            <SelectLabels
                                                projectId={item.project_id}
                                                labels={
                                                    item.labels?.map(
                                                        (e: any) => e.id,
                                                    ) || []
                                                }
                                                style={{ width: '' }}
                                                beforeUpdateValue={(change) => {
                                                    return issueService.updateIssueLabel(
                                                        change as string[],
                                                        item.id || '',
                                                    );
                                                }}
                                            />

                                            <DatepickerTable
                                                defaultDate={item.start_date}
                                                name="Start Date"
                                                style={{ width: 'fit-content' }}
                                                beforeUpdateValue={(e) => {
                                                    return issueService.updateIssue(
                                                        item.id,
                                                        {
                                                            start_date: e
                                                                ? moment(
                                                                      e,
                                                                  ).format()
                                                                : (null as any),
                                                        },
                                                    );
                                                }}
                                            />

                                            <DatepickerTable
                                                defaultDate={item.target_date}
                                                name="Due Date"
                                                style={{ width: 'fit-content' }}
                                                beforeUpdateValue={(e) => {
                                                    return issueService.updateIssue(
                                                        item.id,
                                                        {
                                                            target_date: e
                                                                ? moment(
                                                                      e,
                                                                  ).format()
                                                                : (null as any),
                                                        },
                                                    );
                                                }}
                                            />

                                            <Popover content={<MoreToolls />}>
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
    });

    const handleCreateIssue = async (
        name: string,
        stateId: string,
        stateName: string,
    ) => {
        mutate(
            pathName,
            async (issue: any) => {
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
                    return [...issue, itemConvert];
                } else {
                    noti?.error('An error occurred, please try again later');
                    return issue;
                }
            },
            { revalidate: false },
        );
    };

    return (
        <div>
            {open ? (
                <div className="px-3">
                    <div
                        ref={refInput}
                        className="flex py-2 w-full border-b border-theme-border-secondary"
                    >
                        <div className="text-sm font-semibold">
                            {identifier + ' - ' + name}
                        </div>
                        <input
                            className="outline-none px-3 text-sm flex-1"
                            autoFocus
                            onKeyDown={(e: any) => {
                                if (e.keyCode == 13) {
                                    handleCreateIssue(
                                        e.target.value,
                                        stateId,
                                        name,
                                    );
                                }
                            }}
                        />
                    </div>
                    <div className="py-2 text-[11px]">
                        Press "Enter" to add issue
                    </div>
                </div>
            ) : (
                <div
                    onClick={() => {
                        setOpen(true);
                    }}
                    className="px-3 py-2 flex items-center gap-2 border-b bg-color-special-secondary text-color-special-primary cursor-pointer select-none"
                >
                    <HiPlusSm />
                    <div>New issue</div>
                </div>
            )}
        </div>
    );
};

export default ListBoard;
