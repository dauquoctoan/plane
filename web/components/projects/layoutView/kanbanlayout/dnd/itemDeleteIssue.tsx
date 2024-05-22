import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import { IBoardIssues, sortableOptions } from './KanbanBoard';
import issueService from '@/services/issue-services';
import { mutate } from 'swr';
import { usePathname } from 'next/navigation';
import { IIssue } from '@/types';
import { useNoti } from '@/hooks';
import { INotiConext } from '@/components/ui/notification';

export interface IPorps {
    showTrash: boolean;
    ref: React.RefObject<HTMLDivElement>;
    block: IBoardIssues[]
    pathname: string;
    noti?: INotiConext;
}

const ItemDeleteIssue = React.forwardRef((props: IPorps, ref: any) => {
    return (
    
        <div
            ref={ref}
            className={`${
                props.showTrash ? 'visible' : 'invisible'
            } fixed top-2 rounded left-[50%] z-50 box-border bg-theme-primary`}
        >
            <div className="absolute bg-transparent top-0 left-0 right-0 bottom-0 border border-color-error box-border rounded w-fit px-3 py-1">
                Drop here to delete the issue.
            </div>
            <ReactSortable
                className={`block relative blockTrack invisible overflow-hidden w-[250px] h-[35px]`}
                key={1}
                list={props.block[0].children}
                setList={async(data)=>{
                    if(data[0].id){
                        const result = await issueService.deleteIssue(data[0].id||"");
                        if(result){
                            mutate(props.pathname, (e:any)=>{
                                return e.filter((e:IIssue)=>{
                                    return e.id !== data[0].id
                                })
                            })
                            props.noti?.success('Delete issue success')
                        }
                    }
                    
                }}
                multiDrag
                {...sortableOptions}
            ></ReactSortable>
        </div>
    )
});

ItemDeleteIssue.displayName = 'ItemDeleteIssue';

export default ItemDeleteIssue;
