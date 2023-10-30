import React, { memo, useEffect, useState } from 'react'
import Input from '../../components/ui/input/Input'
import AutoComplete from '../../components/ui/auto-complete'
import Button from '../../components/ui/button'
import { useForm } from 'react-hook-form'
import authService from '@/services/auth-services'
import { useSelector } from '@/store'
import { selectInfo } from '@/store/slices/authSlice/slectors'
import { TIME_ZONE_CHOICE } from '@/constants'
import { IPropsComponent } from './setup'


const Profile: React.FC<IPropsComponent> = ({ nextStep }) => {
  const info = useSelector(selectInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    unregister
  } = useForm();

  return (
    <form 
      className='mt-3'
      onSubmit={handleSubmit(async (data) =>{
        if(info?.user && info?.user.id){
          const result  = await authService.upDateUser(info?.user.id, { 
            first_name: data['first-name'], 
            last_name: data['last-name'], 
            role: data['your-role'], 
            USER_TIMEZONE_CHOICES:data['time-zone'],
            onboarding_step:{
              workspace_join: 1,
              profile_complete: 1,
              workspace_create: 0,
              workspace_invite: 0
            }
          });
          if(result) nextStep && nextStep();
        }
    })}
    >
        <Input 
          placeholder='First name?' 
          label='First Name' 
          wrClassName='mb-4'
          nameForm='First name' 
          keyForm='first-name' 
          error={errors}
          register={register} 
          validator={{required: true}} 
          setValue={setValue}
        />

        <Input 
          placeholder='Last name?' 
          label='Last Name' 
          wrClassName='mb-4'
          nameForm='Last name' 
          keyForm='last-name' 
          error={errors}
          register={register} 
          validator={{required: true}} 
          setValue={setValue}
        />

        <AutoComplete 
          placeholder='Whats your role?' 
          label='Whats Your Role' 
          wrClassName='mb-4'
          nameForm='Your role' 
          keyForm='your-role' 
          error={errors}
          data={[
            'Product / Project Manager',
            'Development / Engineering',
            'Fouder / Executive',
            'Freelancer / Consultant', 
            'Marketing / Growth', 
            'Sales / Business Development',
            'Support / Operations',
            'Student / Professor',
            'Human Resources',
            'Other'
          ]}
          register={register} 
          validator={{required: true}} 
          setValue={setValue}
        />

        <AutoComplete 
          placeholder='Whats your time zone?' 
          label='Whats Your time zone' 
          wrClassName='mb-4'
          nameForm='Time zone' 
          keyForm='time-zone' 
          error={errors}
          data={TIME_ZONE_CHOICE}
          register={register} 
          validator={{required: true}} 
          setValue={setValue}
        />

        <Button type='submit' text='submit' wrClassName='mt-5' typeBTN='primary'/>
    </form>
  )
}

export default memo(Profile)