'use client';
import React, { useState, useLayoutEffect } from 'react';
import { GoogleLoginButton } from './google-login';
import authService from '@/services/auth-services';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from '@/store';
import { authSlice } from '@/store/slices/authSlice';
import { IInfo } from '@/types';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { Spinner } from '../ui/loading/Spinner';

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const info = useSelector(selectInfo);

    async function getData() {
        try {
            const data = await authService.getUser<IInfo>('api/user/me');
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

    if (info?.workspace?.slug && info?.is_onboarded)
        router.push(info?.workspace?.slug || '');

    if (loading) return <Spinner />;

    if (!loading && !info) return <GoogleLoginButton />;

    return <></>;
};

export default React.memo(Login);
