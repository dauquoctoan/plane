'use client'
import DotLoading from '@/components/ui/loading/dotLoading';
import authService from '@/services/auth-services';
import { useDispatch, useSelector } from '@/store';
import { authSlice } from '@/store/slices/authSlice';
import { selectInfo, selectLoadingAuth } from '@/store/slices/authSlice/slectors';
import { getUsertAsync } from '@/store/slices/authSlice/thunks';
import { IInfo } from '@/types';
import React, { useEffect, useState } from 'react'
// import useSWR from 'swr';

interface IProps{
    children: React.ReactNode;
}

const AuthProvider:React.FC<IProps> = ({children}) => {
    const dispatch = useDispatch();
    const info:any = useSelector(selectInfo);
    const isLoading = useSelector(selectLoadingAuth)
    const [loading, setLoading] = useState(false);

    async function getData(){
        setLoading(true);
        const info = await authService.getUser<IInfo>('api/user/me');
        setLoading(false);
        if(info) dispatch(authSlice.actions.setInfo(info));
    }
    
    console.log('info', info, isLoading)

    useEffect(()=>{
        dispatch(getUsertAsync())
        // getData();
    },[]);
    
    return (
        <>
            {(!loading && info && info.user) ? children : <DotLoading/>}
        </>
    )
}

export default AuthProvider