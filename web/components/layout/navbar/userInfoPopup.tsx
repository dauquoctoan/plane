import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import authService from '@/services/auth-services';
import { useRouter, usePathname } from 'next/navigation';
import useLogout from '@/hooks/uselogout';

const UserInfoPopup = () => {
    const info = useSelector(selectInfo);
    const { pathName, router } = useLogout();
    
    return (
        <div className="text-sm">
            <div className="px-2 py-2 font-bold">{info?.email || ''}</div>
            <div className="p-1">
                <div className="px-2 py-1 hover:bg-theme-secondary rounded cursor-pointer select-none flex items-center">
                    <CgProfile />
                    <span className="ml-2">View profile</span>
                </div>
            </div>
            <div className="p-1">
                <div className="px-2 py-1 hover:bg-theme-secondary rounded cursor-pointer select-none flex items-center">
                    <AiOutlineSetting />
                    <span className="ml-2">Settings</span>
                </div>
            </div>
            <div className="p-1">
                <div
                    onClick={() => {
                        router.push(`/?next=${pathName}`);
                        authService.logOut();
                    }}
                    className="px-2 py-1 hover:bg-theme-secondary rounded cursor-pointer select-none flex items-center"
                >
                    <IoLogOutOutline />
                    <span className="ml-2">Sign out</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfoPopup;
