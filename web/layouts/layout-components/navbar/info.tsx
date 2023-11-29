import React from 'react';
import Avatar from '../../../components/ui/avatar';
import { useSelector } from '@/store';
import { selectIsCollap } from '@/store/slices/layoutSlice/selectors';
import Popover from '@/components/ui/popover';
import WorkspacePopover from '../../../components/layout/navbar/workspacePopover';
import UserInfoPopup from '../../../components/layout/navbar/userInfoPopup';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { ContainerLink } from 'nextjs-progressloader';

const Info = () => {
    const isCollap = useSelector(selectIsCollap);
    const info = useSelector(selectInfo);
    return (
        <div className="w-full flex items-center  cursor-pointer pt-4 pl-4 pr-4">
            <ContainerLink links={[{href:'/create-workspace', nickname:'create-workspace'}]} />
            <Popover
                pxContent={0}
                pyContent={0}
                wrClassName="p-1 bg-theme-secondary flex-1 rounded"
                content={<WorkspacePopover />}
            >
                <div className='flex h-fit'>
                    <Avatar>{info?.workspace?.name || ''}</Avatar>
                    {!isCollap && <span className="ml-2 font-[500] whitespace-nowrap overflow-hidden">{info?.workspace?.name}</span>}
                </div>
            </Popover>
            {!isCollap ? (
                <Popover
                    pxContent={0}
                    pyContent={0}
                    placement="right"
                    content={<UserInfoPopup />}
                >
                    <div className="ml-2">
                        <Avatar>{info?.email || ''}</Avatar>
                    </div>
                </Popover>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Info;
