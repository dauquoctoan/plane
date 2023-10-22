'use client'
import React, { memo, useEffect } from 'react'
import useSWR from 'swr'
import authService from '@/services/auth-services';
import { Counter } from '../account/counter';

const Test = () => {
    const { data, error, isLoading, isValidating } = useSWR('api/user/me',(user)=> authService.getUser(user) );
    console.log(data, error,isLoading, isValidating);
  // async function getData(){
  //   const data = await  authService.getUser('api/user/me');
  //   console.log(data);
  // }
  // useEffect(() => {
  //   getData()
  // }, [])
  

  return (
    <div><Counter/></div>
  )
}

export default memo(Test)