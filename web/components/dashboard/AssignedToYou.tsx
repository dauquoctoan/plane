import React, { FC, memo } from "react";
import { IContent } from "./page";
import { useSelector } from "react-redux";
import { selectInfo } from "@/store/slices/authSlice/selectors";
import useSWR from "swr";
import issueService from "@/services/issue-services";
import { optionLevelIcons, STATE_QUERY } from "@/constants";
import Line from "../ui/line";
import DefaultImage from "./DefaultImage";

const AssignedToYou:FC<IContent> = React.memo(
    ({
        date,
        option,
        state,
        type='assignees'
    })=>{
        const [dateKey, dateValue] = date.split(':');
        const [optionKey, optionValue] = option.split(':');
        const info = useSelector(selectInfo);

        const {data} = useSWR((date + option + type),()=>{
            return issueService.findIssues({
                [dateKey]: dateValue,
                [optionKey]:optionKey !== STATE_QUERY ? optionValue : state.filter((e)=>{
                    return optionValue.includes(e.group||'') 
                }).map((e)=>e.id),
                [type]: [info?.id||'']
            })
        });

        return data?.length ? (
            <div className='w-full'>
            <div className='flex items-center justify-between px-3'>
                <div className='flex items-center gap-2'>
                    <div className='text-[13px]'>Issues</div>
                    <div className='text-[13px] text-color-special-primary px-3 py-0 rounded-2xl bg-color-special-secondary'>{data?.length}</div>
                </div>
                <div className='text-[13px]'>Assigned to</div>
            </div>
            <Line/>
            <div className='w-full h-72 overflow-y-auto'>
                {
                    data?.map((item ,index)=>{
                        return <div className="flex  items-center gap-3 px-2 py-1 hover:bg-theme-secondary text-sm" key={index}>
                            <div className="p-2 border rounded">{optionLevelIcons[item.priority||'']}</div>
                            <div className="text-sm">{item.name}</div>
                        </div>
                    })
                }
            </div>
        </div>
        ):<DefaultImage type="issue"/>
    }
)
AssignedToYou.displayName = 'AssignedToYou'

export default memo(AssignedToYou)