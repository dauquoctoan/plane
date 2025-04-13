'use client';
import { authSlice, layoutSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import Image from 'next/image';
import React, { useState } from 'react';
import imagesDef from '../../constants/images.json';
import { RxAvatar } from 'react-icons/rx';
import { FaAngleDown } from 'react-icons/fa';
import Button from '../ui/button';
import { useForm } from 'react-hook-form';
import { IUser } from '@/types';
import Input from '../ui/input/Input';
import AutoComplete from '../ui/auto-complete';
import { icons, TIME_ZONE_CHOICE } from '@/constants';
import authService from '@/services/auth-services';
import { useNoti } from '@/hooks';
import { useDispatch } from 'react-redux';

export interface IForm {}

const ProfileSetting = () => {
  const info = useSelector(selectInfo);
  const [showDelte, setshowDelte] = useState(false);
  const noti = useNoti();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUser>({
    defaultValues: {
      first_name: info?.first_name,
      last_name: info?.last_name,
      email: info?.email,
      role: info?.role,
      display_name: info?.display_name,
      USER_TIMEZONE_CHOICES: info?.USER_TIMEZONE_CHOICES,
    },
  });

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(async (data: IUser) => {
          const result = await authService.upDateUser(data);
          if (result) {
            noti?.success('Update user success');
          } else noti?.error('Update user error');
        })}
        className="w-full md:w-[900px] p-5"
      >
        <div className="w-full h-[180px] relative">
          <Image
            src={info?.cover_image || imagesDef[0]}
            layout="fill"
            alt={`Default project cover image`}
            objectFit="cover"
            className="w-full h-full rounded-xl"
          />
          <div className="absolute bottom-0 border shadow-sm cursor-pointer hover:border-color-special-secondary left-10 translate-y-[50%] w-16 h-16 rounded flex items-center justify-center bg-theme-secondary">
            <RxAvatar className="text-6xl" />
          </div>
          <div className="absolute bottom-5 right-5 rounded border bg-theme-primary text-[13px] px-1 select-none cursor-pointer">
            Change cover
          </div>
        </div>
        <div className="pt-12 py-2">
          <div className="font-bold text-xl">
            {info?.first_name + ' ' + info?.last_name}
          </div>
          <div className="text-base">{info?.email}</div>
        </div>
        <div className="flex-col md:flex-row flex gap-1 justify-between">
          <Input
            placeholder="First name"
            label="First name *"
            wrClassName="mb-4"
            keyForm="first_name"
            error={errors}
            register={register}
            validator={{ required: true }}
            setValue={setValue}
          />
          <Input
            placeholder="Last name"
            label="Last name"
            wrClassName="mb-4"
            keyForm="last_name"
            error={errors}
            register={register}
            validator={{ required: true }}
            setValue={setValue}
          />
          <Input
            placeholder="Email"
            label="Email *"
            wrClassName="mb-4"
            disabled
            keyForm="email"
            className="cursor-not-allowed"
            error={errors}
            register={register}
            validator={{ required: true }}
            setValue={setValue}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-1 justify-between">
          <AutoComplete
            placeholder="Whats your role?"
            label="Role*"
            wrClassName="mb-4"
            nameForm="Your role"
            keyForm="role"
            error={errors}
            defaultValue={info?.role}
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
              'Other',
            ]}
            register={register}
            validator={{ required: true }}
            setValue={setValue}
          />
          <Input
            placeholder="Display name"
            label="Display name"
            wrClassName="mb-4"
            keyForm="display_name"
            error={errors}
            register={register}
            validator={{ required: false }}
            setValue={setValue}
          />
          <AutoComplete
            placeholder="Whats your time zone?"
            label="Timezone*"
            wrClassName="mb-4"
            nameForm="Time zone"
            defaultValue={info?.USER_TIMEZONE_CHOICES}
            keyForm="USER_TIMEZONE_CHOICES"
            error={errors}
            data={TIME_ZONE_CHOICE}
            register={register}
            validator={{ required: true }}
            setValue={setValue}
          />
        </div>
        <div className="px-4 py-5">
          <Button text="Save changes" typeBTN="primary" type="submit" />
        </div>
        <div className="border-t py-4">
          <div className="w-full justify-between select-none cursor-pointer flex text-base">
            <div
              onClick={() => {
                setshowDelte(!showDelte);
              }}
            >
              Deactivate account
            </div>
            <FaAngleDown className={showDelte ? 'rotate-180' : ''} />
          </div>
          {showDelte && (
            <div className="text-[13px]">
              The danger zone of the profile page is a critical area that
              requires careful consideration and attention. When deactivating an
              account, all of the data and resources within that account will be
              permanently removed and cannot be recovered.
            </div>
          )}
          {showDelte && (
            <Button
              typeBTN="dashed"
              type="button"
              text="Deactivate account"
              wrClassName="mt-5"
              className="text-color-error"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileSetting;
