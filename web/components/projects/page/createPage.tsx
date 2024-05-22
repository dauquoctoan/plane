'use client'
import { KEY_PROJECT_PAGE, STATES_KEY } from '@/apiKey';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input'
import { useNoti } from '@/hooks';
import projectService from '@/services/project-services';
import { modalSlice } from '@/store';
import { IPage, IParams } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { mutate } from 'swr';

const CreatePage = () => {
    const dispatch = useDispatch();
    const params = useParams<IParams>();
    const noti = useNoti();

    const {
        register: registerParent,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<Partial<IPage>>();

  return (
    <form
        id='create-page-form'
        className='w-[400px]'
        onSubmit={handleSubmit((data) => {
            mutate(
                KEY_PROJECT_PAGE(params.projectid),
                async (issues: any) => {
                    const result = await projectService.createPage({
                        ...data,
                        project_id: params.projectid
                    })

                    if(result){
                        noti?.success('Create page success');
                        dispatch(modalSlice.actions.togleNewPage())
                        return [...issues, result];
                    }else noti?.error('Create page error!')
                },
                { revalidate: false },
            );
        })}
    >
        <h1 className='text-lg mb-3'>Create Page</h1>
        <Input
            placeholder="Title"
            wrClassName="mb-4"
            keyForm="name"
            error={errors}
            register={registerParent}
            validator={{ required: true }}
            setValue={setValue}
        />
        <div className="w-full flex gap-2 items-center justify-end mt-4">
                <Button type="button" text="Discard" typeBTN="text" onClick={()=>{
                    dispatch(modalSlice.actions.togleNewPage())
                }} />

                <Button
                    form='create-page-form'
                    type="submit"
                    text="Add page"
                    typeBTN="primary"
                />
            </div>
    </form>
  )
}

export default CreatePage