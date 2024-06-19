'use client'
import { KEY_PROJECT_PAGE } from '@/apiKey'
import EmptyProjects from '@/components/module/emptyProjects'
import { createNickNameLink } from '@/helpers'
import projectService from '@/services/project-services'
import { modalSlice } from '@/store'
import { IPage, IParams } from '@/types'
import { useParams, usePathname } from 'next/navigation'
import { changeRoute, ContainerLink } from 'nextjs-progressloader'
import React from 'react'
import { useDispatch } from 'react-redux'
import useSWR from 'swr'

const Pages = () => {
    const params = useParams<IParams>();
    const pathName = usePathname();
    const dispatch = useDispatch()

    const { data: pages } = useSWR(KEY_PROJECT_PAGE(params.projectid), () => {
        return projectService.getPages(params.projectid)
    })
    console.log(pages)

    return (
        <div className='w-full h-auto'>
            {
                pages?.length ?
                    <>
                        <ContainerLink links={pages?.map((e) => {
                            return {
                                href: pathName + "/" + e.id,
                                nickname: createNickNameLink('page' + e.id)
                            }
                        }) || []} />
                        {
                            pages?.map((e, i) => {
                                return <div key={i} onClick={() => {
                                    changeRoute(pathName + "/" + e.id)
                                }} className='px-3 py-2 text-sm rounded cursor-pointer hover:bg-theme-secondary border-b'>{e.name}</div>
                            })
                        }
                    </> :
                    <EmptyProjects
                        cb={() => dispatch(modalSlice.actions.togleNewPage())}
                        textBtn='Set your first page'
                        title='Group and timebox your work in Cycles.'
                        desc='Break work down by timeboxed chunks, work backwards from your project deadline to set dates, and make tangible progress as a team.'
                    />
            }
        </div>
    )
}

export default Pages