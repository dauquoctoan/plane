'use client';
import AutoComplete from '@/components/ui/auto-complete';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import APP_CONFIG from '@/configs';
import React from 'react';
import { useForm } from 'react-hook-form';
import { insertIntoTheBlank } from '@/helpers/string';
import { ORGANIZATION_SIZE } from '@/constants/issue';
import workspaceService from '@/services/workspace-services';
import { useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import authService from '@/services/auth-services';
import { authSlice } from '@/store/slices/authSlice';
import { IWorkspace } from '@/types';
import { IPropsComponent } from './type';
import { useRouter } from 'next/navigation';

const Workspace: React.FC<IPropsComponent> = ({ nextStep, prevStep }) => {
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        if (info?.id) {
          const result = await workspaceService.createWorkSpace<IWorkspace>({
            name: formData.name,
            slug: formData.url.replace(APP_CONFIG.DOMAIN_URL + '/', ''),
            organization_size: formData.size,
            owner: info?.id,
          });
          if (result) {
            dispatch(
              authSlice.actions.setInfo({
                ...info,
                workspace: result,
              })
            );

            if (!info.is_onboarded) {
              const resultUser = await authService.upDateUser<number>({
                onboarding_step: {
                  workspace_join: 1,
                  profile_complete: 1,
                  workspace_create: 1,
                  workspace_invite: 0,
                },
              });
              if (resultUser) if (nextStep) nextStep();
            } else {
              router.push(result.slug || '');
            }
          }
        }
      })}
    >
      <Input
        label="Workspace Name"
        placeholder="Enter your workspace name"
        nameForm="Workspace name"
        keyForm="name"
        error={errors}
        register={register}
        validator={{ required: true }}
        setValue={setValue}
        onChangeCB={(e) => {
          setValue(
            'url',
            APP_CONFIG.DOMAIN_URL +
              '/' +
              insertIntoTheBlank(e.target.value).toLowerCase()
          );
        }}
      />
      <Input
        wrClassName="mt-5"
        label="Workspace URL"
        placeholder="Enter your workspace URL"
        nameForm="Workspace URL"
        keyForm="url"
        defaultValue={APP_CONFIG.DOMAIN_URL + '/'}
        error={errors}
        register={register}
        validator={{
          required: true,
          minLength: {
            message: 'Workspace URL has not reached the minimum length',
            value: APP_CONFIG.DOMAIN_URL.length + 4,
          },
        }}
        setValue={setValue}
      />
      <AutoComplete
        wrClassName="mt-5"
        label="What size is your organization?"
        placeholder="Select organization size"
        nameForm="Workspace size"
        keyForm="size"
        error={errors}
        register={register}
        data={ORGANIZATION_SIZE}
        validator={{ required: true }}
        setValue={setValue}
      />
      <div className="flex gap-2 mt-5">
        {prevStep && <Button type="button" onClick={prevStep} text="Back" />}
        <Button
          typeBTN="primary"
          type="submit"
          text={`${nextStep ? 'Continue' : 'Create Workspace'}`}
        />
      </div>
    </form>
  );
};

export default Workspace;
