'use client';
import { authSlice, useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import React, { useEffect } from 'react';
import authService from '@/services/auth-services';
import useSWR from 'swr';
import { IInfo } from '@/types';
import { Spinner } from '@/components/ui/loading/Spinner';

interface IProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
    const dispatch = useDispatch();
    const info = useSelector(selectInfo);
    const { data, error } = useSWR<IInfo | 0>(
        'api/user/me',
        (url: string) => authService.getUser<IInfo | 0>(url),
    );

    useEffect(() => {
        if (data && !error) {
            dispatch(authSlice.actions.setInfo(data));
        }
    }, [data]);

    if(info){
        return <>{children}</>
    }

    return <Spinner />
};

export default AuthProvider;
