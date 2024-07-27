import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import { layoutSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import authService from '@/services/auth-services';
import useLogout from '@/hooks/uselogout';
import { ContainerLink, changeRoute } from 'nextjs-progressloader';
import { useDispatch } from 'react-redux';
import { checkIsMobile } from '@/helpers';

const UserInfoPopup = () => {
  const info = useSelector(selectInfo);
  const { pathName, router } = useLogout();
  const dispatch = useDispatch();
  const collapse = () => {
    if (checkIsMobile()) {
      dispatch(layoutSlice.actions.setToggleCollap(true));
    }
  };
  
  return (
    <div className="text-sm">
      <div className="px-2 py-2 font-bold">{info?.email || ''}</div>
      <ContainerLink links={[{ href: '/profile', nickname: 'setting' }]} />
      {/* <div className="p-1">
        <div
          onClick={() => {
            collapse();
            changeRoute(
              '/' + info?.workspace?.slug + '/profile/' + info?.workspace?.id
            );
          }}
          className="px-2 py-1 hover:bg-theme-secondary rounded cursor-pointer select-none flex items-center"
        >
          <CgProfile />
          <span className="ml-2">View profile</span>
        </div>
      </div> */}
      <div className="p-1">
        <div
          onClick={() => {
            changeRoute('/profile');
          }}
          className="px-2 py-1 hover:bg-theme-secondary rounded cursor-pointer select-none flex items-center"
        >
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
