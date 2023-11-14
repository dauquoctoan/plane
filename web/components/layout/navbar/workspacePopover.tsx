import React from 'react';
import Avatar from '../../ui/avatar';
import { BsCheck2 } from 'react-icons/bs';
import { HiOutlinePlusSmall } from 'react-icons/hi2';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { changeRoute } from 'nextjs-progressloader';

const WorkspacePopover = () => {
    const info = useSelector(selectInfo);

    return (
        <div className="w-[300px] text-sm">
            <div className="py-2 px-3">Workspace</div>
            <div className="border-b border-theme-border-secondary"></div>
            <div className="py-2 px-3 select-none">
                <div className="py-1 px-2 flex rounded justify-between items-center hover:bg-theme-secondary cursor-pointer">
                    <div className="flex items-center">
                        <Avatar>T</Avatar>
                        <span className="ml-2">{info?.workspace?.name}</span>
                    </div>
                    <BsCheck2 />
                </div>
                <div 
                    onClick={()=>{
                        changeRoute('/create-workspace')
                    }} 
                    className="py-1 px-2 flex rounded hover:bg-theme-secondary cursor-pointer items-center"
                >
                    <HiOutlinePlusSmall />
                    <span className="ml-2">Create Workspace</span>
                </div>
            </div>

            <div className="border-b border-theme-border-secondary"></div>

            <div className="py-2 px-3">
                <div className="py-1 px-2 hover:bg-theme-secondary font-medium select-none rounded cursor-pointer">
                    Workspace Settings
                </div>
                <div className="py-1 px-2 hover:bg-theme-secondary font-medium select-none rounded cursor-pointer">
                    Workspace Invites
                </div>
                <div className="py-1 px-2 hover:bg-theme-secondary font-medium select-none rounded cursor-pointer">
                    My Profile
                </div>
            </div>

            <div className="border-b border-theme-border-secondary"></div>

            <div className="py-2 px-3 text-color-warning">
                <div className="py-1 px-2 hover:bg-theme-secondary  font-medium select-none rounded cursor-pointer">
                    Sign out
                </div>
            </div>
        </div>
    );
};

export default WorkspacePopover;
