'use client'
import { KEY_PROJECT_PAGE } from '@/apiKey'
import { createNickNameLink } from '@/helpers'
import projectService from '@/services/project-services'
import { IPage, IParams } from '@/types'
import { useParams, usePathname } from 'next/navigation'
import { changeRoute, ContainerLink } from 'nextjs-progressloader'
import React from 'react'
import useSWR from 'swr'

const Pages = () => {
    const params = useParams<IParams>();
    const pathName = usePathname();

    const {data} = useSWR(KEY_PROJECT_PAGE(params.projectid),()=>{
        return projectService.getPages(params.projectid)
    })
    console.log(data)

  return (
    <div className='w-full h-auto'>
        <ContainerLink links={data?.map((e)=>{
            return {
                href: pathName+"/"+e.id,
                nickname: createNickNameLink('page' + e.id)
            }
        })||[]}/>
        {
            data?.map((e,i)=>{
                return <div key={i} onClick={()=>{
                    changeRoute(pathName+"/"+e.id)
                }} className='px-3 py-2 text-sm rounded cursor-pointer hover:bg-theme-secondary border-b'>{e.name}</div>
            })
        }
    </div>
  )
}

export default Pages