'use client';
import React,{useEffect} from 'react'
import { GoogleLoginButton } from './google-login'
import useSWR from 'swr';
import authService from '@/services/auth-services';
import { useRouter } from 'next/navigation'
import { Spinner } from '../commont/Sniper';

const Login = () => {
    const router = useRouter();
    
    const { data, error, isLoading} = useSWR('api/user/me',(user)=> authService.getUser(user), {
        refreshInterval:1,
        revalidateOnFocus:false,
        revalidateOnMount:false,
        shouldRetryOnError:false
    });

    useEffect(() => {
        if(data && !error){
            if(data.workspace.slug) {
                router.push(data.workspace.slug);
            }
        }
    }, [data])

  return (
    <div>
       {isLoading && <Spinner/> } 
       {!isLoading && error && <GoogleLoginButton />}
    </div>
  )
}

export default Login