'use client'

import Swtich from "@/components/ui/swtich/swtich"
import { icons } from "@/constants"
import { useNoti } from "@/hooks"
import authService from "@/services/auth-services"
import projectService from "@/services/project-services"
import { IParams, IProject, IProjectMember, IUser } from "@/types"
import { useParams } from "next/navigation"
import useSWR from "swr"

const FeatureSetting = () => {
    const features = [{
        name: "Cycles",
        key: "cycle_view",
        desc: "Time-box issues and boost momentum, similar to sprints in scrum.",
        icons: icons.cycle
    },
    {
        name: "Modules",
        key: "module_view",
        desc: "Group multiple issues together and track the progress.",
        icons: icons.module
    },
    {
        name: "Views",
        key: "issue_views_view",
        desc: "Apply filters to issues and save them to analyse and investigate work.",
        icons: icons.view
    },
    {
        name: "Pages",
        key: "page_view",
        desc: "Document ideas, feature requirements, discussions within your project.",
        icons: icons.page
    }]
    const params = useParams<IParams>()

    const { data } = useSWR('project' + params.projectid, () => {
        return projectService.findOneProject<IProject>(params.projectid);
    });

    console.log('data', data)

    const noti = useNoti()
    const handleUdateProject=async (value:any,key:string)=>{
        const result = await projectService.updateProject(params.projectid, {[key]:value});
        if(result) noti?.success('update feature success')
        else noti?.error('update feature error')
    }
    const datas:any = data;
    return <div className="flex flex-col gap-2">
        
        {
            data && features.map((e,i)=>{
                return <div key={i} className="justify-between border-b py-2 px-2 flex gap-2 items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 min-w-10 flex items-center justify-center rounded bg-color-special-secondary">
                            {e.icons}
                        </div>
                    <div>
                        <div className="text-sm font-bold">{e.name}</div>
                        <div className="text-xs text-color-text-sidebar">{e.desc}</div>
                    </div>
                    </div>
                    <Swtich value={datas[e.key]} onChange={(value)=>{
                        if(data){
                            handleUdateProject(value, e.key)
                        }
                    }}/>
                </div>
            })
        }
    </div>
}

export default FeatureSetting