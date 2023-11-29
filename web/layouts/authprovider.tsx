'use client';
import { authSlice, useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import React, { useEffect } from 'react';
import authService from '@/services/auth-services';
import useSWR from 'swr';
import { IData, IInfo } from '@/types';
import { Spinner } from '@/components/ui/loading/Spinner';

interface IProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
    const dispatch = useDispatch();
    const info = useSelector(selectInfo);
    const { data, error } = useSWR<IData<IInfo>>('me', (url: string) =>
        authService.getUser<IData<IInfo>>(url),
    );

    useEffect(() => {
        if (data && !error) {
            dispatch(authSlice.actions.setInfo(data));
        }
    }, [data]);

    if (info) {
        return <>{children}</>;
    }

    return <Spinner />;
};

export default AuthProvider;
