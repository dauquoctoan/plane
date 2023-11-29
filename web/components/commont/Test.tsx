'use client';
import React, { memo } from 'react';
import useSWR from 'swr';
import authService from '@/services/auth-services';
import { Counter } from '../account/counter';

const Test = () => {
    const { data, error, isLoading, isValidating } = useSWR('me', (user) =>
        authService.getUser(user),
    );
    return (
        <div>
            <Counter />
        </div>
    );
};

export default memo(Test);
