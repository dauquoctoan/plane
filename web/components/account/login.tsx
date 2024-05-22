'use client';
import React, { useState, useLayoutEffect, Suspense, useEffect } from 'react';
import { GoogleLoginButton } from './google-login';
import authService from '@/services/auth-services';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from '@/store';
import { authSlice } from '@/store/slices/authSlice';
import { IInfo } from '@/types';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { Spinner } from '../ui/loading/Spinner';
import { changeRoute, ContainerLink } from 'nextjs-progressloader';
import { createNickNameLink } from '@/helpers';

const Login = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const next = useSearchParams().get('next');
    const info = useSelector(selectInfo);
    
    async function getData() {
        try {
            const data = await authService.getUser();
            if (data) dispatch(authSlice.actions.setInfo(data));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useLayoutEffect(() => {
        getData();
    }, []);

    if (loading) return <Spinner />;

    if (!info) return <GoogleLoginButton />;

    if(info?.id){
        if (!info?.is_onboarded) {
            setTimeout(()=>{
                changeRoute('/setup');
            },1000)
        }else{
            if (next) {
                console.log('next', next);
                setTimeout(()=>{
                    changeRoute(next);
                },1000)
            }else{
                if (info?.workspace?.slug){
                    setTimeout(()=>{
                        changeRoute('/' + info?.workspace?.slug);
                    },1000)
                }
            }
        }
    }

    const nextLink = next ? [{href: next, nickname: createNickNameLink(next)}]: null
    const workspaceLink = info?.workspace?.slug ? [{href: '/'+ info?.workspace?.slug, nickname:createNickNameLink(info?.workspace?.slug)}]:null
    
    const links = nextLink || workspaceLink || [];

    return <ContainerLink links={[{href:'/setup', nickname:'setupproject'},...links]}/>
};



export default React.memo(Login);
