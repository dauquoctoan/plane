'use client'

import { LABELS_BY_PROJECT_KEY } from "@/apiKey";
import Input from "@/components/ui/input/Input";
import { icons } from "@/constants";
import { useNoti } from "@/hooks";
import issueService from "@/services/issue-services";
import { ILabel, IParams } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const LabelSetting = ()=>{
    const params = useParams<IParams>();

    const {data} = useSWR(LABELS_BY_PROJECT_KEY(params.projectid),()=>{
        return issueService.findLabelsByProject({projectId: params.projectid})
    })

    return <div className="flex flex-col gap-2">
        {
            data?.map((e,i)=>{
                return <LabelSettingItem key={i} data={e}/>
            })
        }
    </div>
}

const LabelSettingItem = ({data}:{data: ILabel})=>{
    const [isEddit, setIsEdit] = useState(false);
    const noti = useNoti();

    return <div className="border h-11 rounded-md px-2 py-1 flex items-center gap-2 w-full justify-between">
            <div className="flex items-center gap-2 justify-center">
            <div style={{background:data.color}} className="w-3 h-3 rounded-full"></div>
            {
                !isEddit ? <div>{data.name}</div>:<Input autoFocus style={{border:'none'}} onKeyDown={async (e:any)=>{
                    if (e.keyCode == 13) {
                        const result = await issueService.updateLabel({name: e?.target?.value as any}, data.id)
                        if(result){
                            setIsEdit(false);
                            noti?.success('Update label success')
                        }
                        else  noti?.error('Update label error')
                    }
                }} defaultValue={data.name}/>
            }
            </div>
            <div onClick={()=>{
                setIsEdit(!isEddit)
            }}>
                {icons.edit}
            </div>
</div>
}

export default LabelSetting;