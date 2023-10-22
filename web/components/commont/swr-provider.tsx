'use client';
import { ReactElement } from 'react';
import { SWRConfig } from 'swr'
import { usePathname, useRouter } from 'next/navigation'
import authService from '@/services/auth-services';

export interface ISWRProvide{
    children: ReactElement
}

const SWRProvider = ({ children }:ISWRProvide) => {
    const path = usePathname();
    const router = useRouter();
    return <SWRConfig value={{
        onError: (error, key) => {
            if(error?.response?.status == 401){
                authService.logOut();
                router.push('/');
            }
        }
    }}>{children}</SWRConfig>
};

export default SWRProvider;