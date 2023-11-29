'use client'
import React from 'react'
import Test from '../test'
import useSWR,{useSWRConfig} from 'swr'
import projectService from '@/services/project-services'
import { useSelector } from '@/store'
import { selectInfo } from '@/store/slices/authSlice/selectors'
import { IData, IInfo, IProject, IResult } from '@/types'

const Project = () => {
    const info = useSelector(selectInfo)
    const { data } = useSWR<IProject[]>('/vlxx/xnxx',()=> projectService.getProjects<any>(info?.last_workspace_id || 0));
    const { mutate } = useSWRConfig()

    console.log(data)

    return (
        <div>
            <Test />
            <div onClick={async () => {
                if(data){
                    mutate('/vlxx/xnxx', async (todos:any) => {
                        return [...todos, {name:'sdfsdf'}]
                    }, { revalidate: false })
                }
            }}>{data && data[0]?.name}</div>
        </div>
    )
}

export default Project