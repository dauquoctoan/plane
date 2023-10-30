'use client';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr'
import { useRouter } from 'next/navigation'
import authService from '@/services/auth-services';

export interface ISWRProvide{
    children: ReactNode
}

const SWRProvider = ({ children }:ISWRProvide) => {
    const router = useRouter();
    return (
        <SWRConfig value={{
            onError: (error, key) => {
                if(error?.response?.status == 401){
                    authService.logOut();
                    router.push('/');
                }
            }
        }}>{
            children}
        </SWRConfig>
    )
};

export default SWRProvider;