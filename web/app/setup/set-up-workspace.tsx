import AutoComplete from '@/components/ui/auto-complete';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import APP_CONFIG from '@/configs';
import React from 'react'
import { useForm } from 'react-hook-form';
import { repaceWhiteSpace } from '@/helpers/replaceWhiteSpace';
import { ORGANIZATION_SIZE } from '@/constants';
import { IPropsComponent } from './setup';
import workspaceService from '@/services/workspace-services';
import { useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/slectors';
import authService from '@/services/auth-services';
import { authSlice } from '@/store/slices/authSlice';
import { IWorkspace } from '@/types';

const Workspace:React.FC<IPropsComponent> = ({nextStep, prevStep}) => {
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  return (
    <form  
      onSubmit={handleSubmit(async(formData) =>{
        if(info?.user?.id){
          const result = await workspaceService.createWorkSpace<IWorkspace>({
            name: formData.name,
            slug:formData.url,
            organization_size: formData.size,
            owner: info?.user.id,
          })
          if(result){
            dispatch(authSlice.actions.setInfo({user:info.user, workspace:result}))
            const resultUser = await authService.upDateUser<number>(info.user.id, {
                onboarding_step: {
                  workspace_join: 1,
                  profile_complete: 1,
                  workspace_create: 1,
                  workspace_invite: 0,
                }
            })
            if(resultUser) nextStep && nextStep();
          }
        }
    })}>
        <Input 
          label='Workspace Name' 
          placeholder='Enter your workspace name' 
          nameForm='Workspace name' 
          keyForm='name' 
          error={errors}
          register={register} 
          validator={{required: true}} 
          setValue={setValue}
          onChangeCB={(e)=>{setValue('url', APP_CONFIG.DOMAIN_URL + '/' + repaceWhiteSpace(e.target.value).toLowerCase())}}
        />
        <Input 
          wrClassName='mt-5' 
          label='Workspace URL'
          placeholder='Enter your workspace URL'
          nameForm='Workspace URL' 
          keyForm='url'
          defaultValue={APP_CONFIG.DOMAIN_URL + '/'}
          error={errors} 
          register={register} 
          validator={{required:true}} 
          setValue={setValue}
        />
        <AutoComplete 
          wrClassName='mt-5' 
          label='What size is your organization?' 
          placeholder='Select organization size'
          nameForm='Workspace size' 
          keyForm='size'
          error={errors}
          register={register}
          data={ORGANIZATION_SIZE}
          validator={{required:true}} 
          setValue={setValue}
        />
        <div className='flex gap-2 mt-5'>
          <Button type='button' onClick={prevStep} text='Back'/>
          <Button typeBTN='primary' type='submit' text="Continue"/>
        </div>
    </form>
  )
}

export default Workspace