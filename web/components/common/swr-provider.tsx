'use client';
import { ReactNode, memo } from 'react';
import { SWRConfig } from 'swr';
import authService from '@/services/auth-services';
import { authSlice, useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import useLogout from '@/hooks/uselogout';

export interface ISWRProvide {
  children: ReactNode;
}

const SWRProvider = ({ children }: ISWRProvide) => {
  const dispatch = useDispatch();
  const { pathName, router } = useLogout();
  const info = useSelector(selectInfo);

  return (
    <SWRConfig
      value={{
        onError: error => {
          if (error?.response?.status == 401) {
            dispatch(authSlice.actions.clearInfo());
            info && authService.logOut();

            setTimeout(() => {
              router.push(`/?next=${pathName}`);
            }, 1000);
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default memo(SWRProvider);
