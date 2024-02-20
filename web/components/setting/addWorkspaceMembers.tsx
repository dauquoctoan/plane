import React from 'react'
import Member from '../setup/set-up-member'
import { useNoti } from '@/hooks'

const AddWorkspaceMembers = ({ setIsOpen }: { setIsOpen: (a: boolean) => void }) => {
    const noti = useNoti();
    return (
        <div className='w-full'>
            <div className='mb-2'>
                <div className='font-semibold'>Invite people to collaborate</div>
                <div className='text-sm'>Invite members to work on your workspace.</div>
            </div>
            <Member isLabels={false} defaultCountMemners={1} textSubmit='add members' isSetup={false} onSubmitted={(result) => {
                if (result) {
                    noti?.success('Add Member success');
                    setIsOpen(false);
                } else noti?.error('Add members error')
            }} />
        </div>
    )
}

export default AddWorkspaceMembers