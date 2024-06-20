'use client'
import { STATES_KEY } from '@/apiKey'
import CreateState from '@/components/layout/navbar/createState'
import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import { icons } from '@/constants'
import { getIcons } from '@/helpers'
import { useNoti } from '@/hooks'
import issueService from '@/services/issue-services'
import { IParams, Istate } from '@/types'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import useSWR, { mutate } from 'swr'

const StateSetting = () => {
    const params = useParams<IParams>()

    const noti = useNoti();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data: states } = useSWR(
        STATES_KEY(params.projectid),
        () => issueService.getState(params.projectid),
    );

    return (
        <div>
            <Button typeBTN='primary' className='mb-2' text='Create State' onClick={() => {
                setIsOpen(true);
            }} />
            <div className='flex flex-col gap-2'>
                {
                    states?.map((e, i) => {
                        return <div key={i} className='px-2 py-1 justify-between border rounded flex gap-2 items-center'>
                            <div className='flex items-center gap-2'>
                                <div>{getIcons(e.group, e.color)}</div>
                                <div className='text-sm'>{e.name}</div>
                            </div>
                            <div onClick={async () => {
                                if (e.project_id) {
                                    const result = await issueService.deleteState(e.id)
                                    if (result) {
                                        noti?.success('Delete state success');
                                        mutate(STATES_KEY(params.projectid), (data: any) => {
                                            return data.filter((item: Istate) => {
                                                return item.id != e.id;
                                            })
                                        })
                                    } else noti?.error('Delete state error')
                                }
                            }}>{icons.delete}</div>
                        </div>
                    })
                }
                {
                    states && <Modal
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