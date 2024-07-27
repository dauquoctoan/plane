'use client';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import React, { useState } from 'react';
import Avatar from '../ui/avatar';
import Button from '../ui/button';
import Input from '../ui/input/Input';
import { useForm } from 'react-hook-form';
import AutoComplete from '../ui/auto-complete';
import APP_CONFIG from '@/configs';
import { ORGANIZATION_SIZE } from '@/constants';
import { FaAngleDown } from 'react-icons/fa';

const General = () => {
  const info = useSelector(selectInfo);
  const [isSelectDelete, setIsSelectDelete] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    unregister,
  } = useForm();

  return (
    <div>
      <div className="flex items-center gap-3 border-b pb-4">
        <Avatar size="xl">{info?.workspace?.name}</Avatar>
        <div className="">
          <div className="text-lg font-bold">{info?.workspace?.name || ''}</div>
          <a href={'/' + info?.workspace?.name}>
            {process.env.NEXT_PUBLIC_HOST?.replace('http://', '') +
              '/' +
              info?.workspace?.name}
          </a>
          <div className="text-color-special-primary text-[10px] cursor-pointer">
            Upload logo
          </div>
        </div>
      </div>
      <div className="w-full">
        <form
          className="w-full"
          onSubmit={handleSubmit(async data => {
            console.log(data);
          })}
        >
          <div className="flex md:flex-row flex-col w-full justify-between gap-4 py-10 flex-wrap">
            <Input
              label="Workspace name"
              wrClassName="flex-1"
              placeholder="Title"
              keyForm="name"
              error={errors}
              defaultValue={info?.workspace?.name}
              register={register}
              validator={{ required: true }}
              setValue={setValue}
            />

            <AutoComplete
              label="Company size"
              wrClassName="flex-1 min-width-[200px]"
              placeholder="Select organization size"
              nameForm="Workspace size"
              keyForm="size"
              defaultValue="20"
              error={errors}
              register={register}
              data={ORGANIZATION_SIZE}
              validator={{ required: true }}
              setValue={setValue}
            />

            <Input
              wrClassName="flex-1"
              label="Workspace URL"
              placeholder="Enter your workspace URL"
              nameForm="Workspace URL"
              keyForm="url"
              defaultValue={APP_CONFIG.DOMAIN_URL + '/' + info?.workspace?.slug}
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
          </div>
          <Button text="Update Workspace" type="submit" typeBTN="primary" />
          <div className="py-4">
            <div
              className="cursor-pointer flex items-center w-full justify-between transition-all select-none"
              onClick={() => {
                setIsSelectDelete(!isSelectDelete);
              }}
            >
              Delete Workspace{' '}
              <span>
                <FaAngleDown
                  className={`ml-5 ${isSelectDelete ? 'rotate-180' : ''}`}
                />
              </span>
            </div>
            {isSelectDelete && (
              <div>
                <div className="text-[12px]">
                  The danger zone of the workspace delete page is a critical
                  area that requires careful consideration and attention. When
                  deleting a workspace, all of the data and resources within
                  that workspace will be permanently removed and cannot be
                  recovered.
                </div>
                <Button
                  type="button"
                  text="Delete my workspace"
                  wrClassName="text-color-error mt-5"
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default General;
