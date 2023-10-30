'use client';
import React,{useEffect} from 'react'
import { GoogleLoginButton } from './google-login'
import useSWR,{SWRResponse} from 'swr';
import authService from '@/services/auth-services';
import { useRouter } from 'next/navigation'
import { Spinner } from '../ui/loading/Spinner';
import { useDispatch } from '@/store';
import { authSlice } from '@/store/slices/authSlice';
import { IInfo } from '@/types';

const Login = () => {
    const dispatch = useDispatch()
    const router = useRouter();

    const { data, error, isLoading} = useSWR('api/user/me', (user)=> authService.getUser<IInfo>(user), {
        refreshInterval: 1,
        revalidateOnFocus: false,
        revalidateOnMount: false,
        shouldRetryOnError: false
    });

    useEffect(() => {
        if(data && !error){
            dispatch(authSlice.actions.setInfo(data));
            if(data.workspace?.slug && data.user?.is_onboarded)router.push(data.workspace?.slug);
            else router.push('/setup');
        }
    }, [data])

  return (
    <div className='w-full h-[100vh]'>
       {isLoading && <Spinner/>}
       {!isLoading && error && <GoogleLoginButton />}
    </div>
  )
}

export default Login