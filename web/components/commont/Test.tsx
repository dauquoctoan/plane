'use client'
import React, { memo } from 'react'
import useSWR from 'swr'
import authService from '@/services/auth-services';

const Test = () => {
    const { data, error, isLoading, isValidating } = useSWR('api/user/me',(user)=> authService.getUser(user) );
    console.log(data, error,isLoading, isValidating);

  return (
    <div>Test</div>
  )
}

export default memo(Test)