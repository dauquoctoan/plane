'use client'
import { STATES_KEY, STATES_PROJECT_KEY } from '@/apiKey'
import CreateState from '@/components/layout/navbar/createState'
import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import { getIcons } from '@/helpers'
import issueService from '@/services/issue-services'
import { IParams } from '@/types'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import useSWR from 'swr'

const StateSetting = () => {
    const params = useParams<IParams>()
    const{data} = useSWR(STATES_PROJECT_KEY(params.projectid),()=>{
        return issueService.getState(params.projectid, true)
    })

    const [isOpen, setIsOpen]  = useState<boolean>(false);
    const { data: states } = useSWR(
        () => STATES_KEY(params.projectid),
        () => issueService.getState(params.projectid),
    );

  return (
    <div>
        <Button typeBTN='primary' text='Crate State' onClick={()=>{
            setIsOpen(true);
        }}/>
        <div className='flex flex-col gap-2'>
        {
            data?.map((e,i)=>{
                return <div key={i} className='px-2 py-1 border rounded flex gap-2 items-center'>
                    <div>{getIcons(e.group, e.color)}</div>
                    <div className='text-sm'>{e.name}</div>
                </div>
            })
        }
        {
           states &&  <Modal
            isOpen={isOpen}
            handleClose={() => {
                setIsOpen(false)
            }}
            content={
                <CreateState
                    handleClose={() => {
                        setIsOpen(false);
                    }}
                    projectId={params.projectid}
                    states={states}
                />
            }
        />
        }
        </div>
    </div>
  )
}

export default StateSetting;