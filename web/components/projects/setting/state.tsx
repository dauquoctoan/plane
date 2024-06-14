'use client'
import { STATES_PROJECT_KEY } from '@/apiKey'
import { getIcons } from '@/helpers'
import issueService from '@/services/issue-services'
import { IParams } from '@/types'
import { useParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'

const StateSetting = () => {
    const params = useParams<IParams>()
    const{data} = useSWR(STATES_PROJECT_KEY(params.projectid),()=>{
        return issueService.getState(params.projectid, true)
    })
  return (
    <div className='flex flex-col gap-2'>
        {
            data?.map((e,i)=>{
                return <div key={i} className='px-2 py-1 border rounded flex gap-2 items-center'>
                    <div>{getIcons(e.group, e.color)}</div>
                    <div className='text-sm'>{e.name}</div>
                </div>
            })
        }
    </div>
  )
}

export default StateSetting;