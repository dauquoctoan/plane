import Input from '@/components/ui/input/Input';
import usePopUp from '@/hooks/popUp';
import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LuPlus } from 'react-icons/lu';
import { IBoardIssues } from './board';
import issueService from '@/services/issue-services';
import { useNoti } from '@/hooks';
import { useParams } from 'next/navigation';
import { IParams } from '@/types';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { mutate } from 'swr';
import { ISSUES_BY_PROJECT_ID } from '@/apiKey';

interface IProps {
    block: IBoardIssues
}


const MoreItem: FC<IProps> = ({ block }) => {
    const refPopover = useRef<HTMLDivElement>(null);
    const refPopup = useRef<HTMLDivElement>(null);
    const { style, open, handleClose } = usePopUp({ refPopover, refPopup, placement: 'bottomLeft' });
    const [title, setTitle] = useState('');
    const noti = useNoti();
    const params = useParams<IParams>()
    const info = useSelector(selectInfo)

    useEffect(() => {
        if (!title) {
            setTitle('');
        }
    }, [open])

    return (
        <div
            ref={refPopover}
            className="relative w-fit flex gap-2 items-center cursor-pointer px-3"
        >
            <div className="relative flex gap-2 text-color-special-primary items-center cursor-pointer px-3">
                <LuPlus />
                <div>New Issue</div>
            </div>
            {open &&
                createPortal(
                    <div
                        ref={refPopup}
                        className="px-3 py-1 absolute top-[100%] left-0 rounded shadow-theme-primary"
                        style={{ zIndex: 400, ...style }}
                        onKeyDown={async (e) => {
                            if (e.keyCode == 13) {
                                if (title) {
                                    mutate(ISSUES_BY_PROJECT_ID(params.projectid),
                                        async (issue: any) => {
                                            const issueResult =
                                                await issueService.createIssue({
                                                    name: title,
                                                    state_id: block.id,
                                                    project_id: params.projectid,
                                                    workspace_id: info?.last_workspace_id,
                                                    is_draft: false,
                                                    priority: 'urgent',
                                                })
                                            if (issueResult) {
                                                noti?.success('Issue created');
                                                handleClose();
                                                return issue
                                                    ? [...issue, issueResult]
                                                    : [issueResult];
                                            } else {
                                                noti?.error(
                                                    'An error occurred, please try again later',
                                                );
                                                return issue && [...issue];
                                            }
                                        },
                                        { revalidate: false },
                                    );


                                }
                            }
                        }}
                    >
                        <Input
                            autoFocus
                            placeholder="Issue title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                        <span className="text-[11px]">
                            press enter when done.
                        </span>
                    </div>,
                    document.body,
                )
            }
        </div >
    );
};
export default MoreItem;
