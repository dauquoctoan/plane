import {
    drawerViewSlice,
    issueViewSlice,
    useDispatch,
    useSelector,
} from '@/store';
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
import TiptapPopover from '../../ui/tiptap/tiptapPopover';
import issueService from '@/services/issue-services';
import { useNoti } from '@/hooks';
import lodash from 'lodash';
import { GrUpdate } from 'react-icons/gr';
import ReactionEmoji from '../../ui/reactionEmoji';
import useSWR, { mutate } from 'swr';
import { LS_ISSUE_REACTIONS } from '@/apiKey';
import { getIcons, renderEmoji } from '@/helpers';
import { HiMiniPlusSmall } from 'react-icons/hi2';
import IssueLink from './issueLink';
import { LS_KEY_STATE, optionLevel } from '@/constants';
import { IoSyncCircleOutline } from 'react-icons/io5';
import Line from '@/components/ui/line';
import SelectMemberTable from '@/components/module/selectMember';
import SelectState from '@/components/module/selectState';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Select from '@/components/ui/select/select';
import { CiCalendarDate } from 'react-icons/ci';
import DatepickerTable from '@/components/module/datepickerTable';
import moment from 'moment';
import SelectLabelsTable from '@/components/module/selectLabels';
import Confirm from '@/components/ui/confirm';

export interface IIssueDetail {
    issue?: IIssue;
}

const IssueDetail: FC<IIssueDetail> = ({ issue }) => {
    const info = useSelector(selectInfo);
    const param = useParams<IParams>();
    const noti = useNoti();
    const dispatch = useDispatch();
    const [isSaving, setIsSaving] = useState(false);
    const pathName = usePathname();

    const handleUpdateIssue = lodash.debounce(
        async (issueUpdate: Partial<IIssue>) => {
            await issueService.updateIssue(issue?.id, issueUpdate);
            setIsSaving(false);
        },
        2000,
    );

    const { data: reactions } = useSWR(LS_ISSUE_REACTIONS(issue?.id), () => {
        return issueService.findReaction<IIsueReaction[]>(issue?.id || '');
    });

    const handleCreateReaction = (reaction: Partial<IIsueReaction>) => {
        mutate(LS_ISSUE_REACTIONS(issue?.id), async (prevData: any) => {
            const result = await issueService.createReaction<IIsueReaction>(
                reaction,
            );

            if (result) {
                return [...prevData, { ...result, user: info }];
            }

            if (!result) {
                noti?.error('Reaction error');
                return prevData;
            }
        });
    };

    const handleRemoveReaction = async (id?: string) => {
        if (id) {
            const result = await issueService.removeReaction(id);
            if (result) {
                mutate(LS_ISSUE_REACTIONS(issue?.id), (prevData: any) => {
                    return prevData.filter((e: IIsueReaction) => {
                        return e.id != id;
                    });
                });
            }
        }
    };

    const convert = reactions?.reduce(
        (value: { [e: string]: number }, item) => {
            value[item.reaction || ''] = (value[item.reaction || ''] || 0) + 1;
            return value;
        },
        {},
    );

    function handleReaction(e: string) {
        const reaction = reactions?.find((reaction) => {
            return reaction.reaction == e && reaction.user.id == info?.id;
        });
        if (reaction) {
            handleRemoveReaction(reaction.id);
        } else {
            handleCreateReaction({
                reaction: e,
                issue_id: issue?.id || '',
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
                    stateId={issue?.state_id || ''}
                    projectId={issue?.project_id || ''}
                    beforeUpdateValue={(e) =>
                        issueService.updateIssue(issue?.id, {
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
                        issue?.assignees?.map((e) => {
                            const user = e as IUser;
                            return user.id;
                        }) as string[]
                    }
                    border={false}
                    projectId={issue?.project_id}
                    beforeUpdateValue={(change: any) => {
                        return issueService.updateIssueAssign(
                            issue?.id || '',
                            change,
                        );
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
                    defaultValue={issue?.priority}
                    isIconCheck
                    fontSize="text-[12px]"
                    beforeUpdateValue={(change) => {
                        return issueService.updateIssue(issue?.id, {
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
                <DatepickerTable
                    placement="bottomLeft"
                    border={false}
                    style={{ width: '100%' }}
                    defaultDate={issue?.start_date}
                    name="Start Date"
                    beforeUpdateValue={(e) => {
                        return issueService.updateIssue(issue?.id, {
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
                <DatepickerTable
                    border={false}
                    placement="bottomLeft"
                    style={{ width: '100%' }}
                    defaultDate={issue?.target_date}
                    name="Due date"
                    beforeUpdateValue={(e) => {
                        return issueService.updateIssue(issue?.id, {
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
                    projectId={issue?.project_id}
                    labels={issue?.labels?.map((e: any) => e?.id) || []}
                    beforeUpdateValue={(change) => {
                        return issueService.updateIssueLabel(
                            change as string[],
                            issue?.id || '',
                        );
                    }}
                />
            ),
        },
    ];

    return (
        <div className="p-2 w-[700px] h-screen flex flex-col">
            <div className="w-full flex justify-between py-3">
                <div className="flex items-center gap-2">
                    <MdOutlineOpenInFull className="cursor-pointer" />
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
                                `${process.env.NEXT_PUBLIC_DOMAIN}/${info?.workspace?.slug}/projects/${param.projectid}/issues/${issue?.id}`,
                            );
                            noti?.success('successfully copied the path');
                        }}
                    />
                    <Confirm
                        title="Delete the issue"
                        desc="Are you sure to delete this issue?"
                        onConfirm={async () => {
                            const res = await issueService.deleteIssue(
                                issue?.id || '',
                            );

                            if (res) {
                                mutate(pathName, (prevData: any) => {
                                    return prevData.filter((e: IIssue) => {
                                        issue?.id != e.id;
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
                        {issue?.name && (
                            <Input
                                placeholder="Title"
                                onChangeCB={(e) => {
                                    !isSaving && setIsSaving(true);
                                    handleUpdateIssue({ name: e.target.value });
                                }}
                                wrClassName="mb-4"
                                defaultValue={issue?.name}
                                validator={{ required: true }}
                            />
                        )}
                        <TiptapPopover
                            onChange={(e) => {
                                !isSaving && setIsSaving(true);
                                handleUpdateIssue({ description: e as string });
                            }}
                            defaultValue={issue?.description}
                            name="desc"
                            className="mb-4"
                        />
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
                    <div>Properties</div>
                    <Line />
                    <div className="w-full flex flex-col gap-2">
                        {properties.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-between"
                                >
                                    <div className="flex items-center gap-2 w-[200px]">
                                        {item.icons}
                                        <div>{item.name}</div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-1 py-1 hover:bg-theme-secondary rounded cursor-pointer">
                                        {item.content}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {issue?.id && <IssueLink issueId={issue?.id} />}
            </div>
        </div>
    );
};

export default IssueDetail;
