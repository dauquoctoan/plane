'use client';
import ChangeCover from '@/components/layout/navbar/changeCover';
import EmojiIconPicker from '@/components/ui/EmojiIconPicker';
import Button from '@/components/ui/button';
import Confirm from '@/components/ui/confirm';
import Input from '@/components/ui/input/Input';
import Popover from '@/components/ui/popover';
import Select, { IOptionItem } from '@/components/ui/select/select';
import { renderEmoji, replaceSpecialCharactersEndWhiteSpace } from '@/helpers';
import { useNoti } from '@/hooks';
import projectService from '@/services/project-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IData, IParams, IProject } from '@/types';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { changeRoute } from 'nextjs-progressloader';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BiLockAlt } from 'react-icons/bi';
import { GiEarthAmerica } from 'react-icons/gi';
import useSWR, { mutate } from 'swr';

interface IForm {
  cover_image: string;
  emoji: string;
  network: number | string;
  identifier: string;
  name: string;
  description: string;
}

const Setting = () => {
  const params = useParams<IParams>();

  const { data: project } = useSWR<IData<IProject>>(params.projectid, () => {
    return projectService.findOneProject<IProject>(params.projectid);
  });

  return (
    <div className="w-full">
      {project && <UpdateProjectForm project={project} />}
    </div>
  );
};

const UpdateProjectForm = ({ project }: { project: IProject }) => {
  const params = useParams<IParams>();
  const info = useSelector(selectInfo);
  const lsNestwork = ['Private', 'Public'];

  const {
    register: registerParent,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IForm>({
    defaultValues: {
      network: project?.network || 0,
      identifier: project?.identifier,
      name: project?.name || '',
      description: project?.description || '',
    },
  });

  const noti = useNoti();

  const networkOption: IOptionItem[] = [
    { icon: <BiLockAlt />, title: 'Private', value: '0' },
    { icon: <GiEarthAmerica />, title: 'Public', value: '1' },
  ];

  const handleDeleteProject = async () => {
    const res = await projectService.deleteProject(params.projectid);
    if (res) {
      changeRoute(`/${info?.workspace?.slug}/projects`);
      noti?.success('Delete project success');
    } else {
      noti?.error('Delete project error');
    }
  };

  return (
    <form
      id="create-issue-form"
      onSubmit={handleSubmit(async (data: IProject) => {
        mutate(params.projectid, async (project: any) => {
          const res = await projectService.updateProject<IData<IProject>>(
            params.projectid,
            { ...data, network: Number(data.network) }
          );
          if (res) {
            noti?.success('update project success');
            return res;
          } else {
            noti?.error('update project error');
            return project;
          }
        });
      })}
    >
      <div className="relative w-full h-[180px] rounded-t-xl">
        <Image
          layout="fill"
          src={watch('cover_image') || project?.cover_image || ''}
          alt={`Default project cover image`}
          objectFit="cover"
          className="w-full h-full rounded-t-xl"
        />
        <div className="absolute  bottom-[10px] left-[10px] flex gap-2">
          <div className="w-[60px] h-[60px] rounded-xl bg-white flex items-center justify-center">
            <Popover
              isChildRen
              placement="bottomCenter"
              pxContent={0}
              pyContent={0}
              content={
                <EmojiIconPicker
                  onChange={e => {
                    setValue('emoji', e as string);
                  }}
                />
              }
              contentClassName="border w-[200px]"
            >
              <div className="h-10 w-10 rounded bg-theme-secondary cursor-pointer flex items-center justify-center select-none">
                {renderEmoji(watch('emoji') || project?.emoji || '')}
              </div>
            </Popover>
          </div>
          <div className="text-white">
            <div className="font-bold">{project?.name}</div>
            <div className="flex items-center gap-2">
              <div className="text-sm">{project?.identifier}</div>
              <div
                className={`px-1 rounded ${
                  project?.network ? 'bg-color-success' : 'bg-color-error'
                } text-white text-[9px]`}
              >
                {lsNestwork[(project?.network as any) || 0]}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[10px] right-[10px] flex gap-2 bg-white text-[11px] rounded cursor-pointer select-none">
          <Popover
            placement="bottomRight"
            pxContent={0}
            pyContent={0}
            content={
              <ChangeCover
                onChange={e => {
                  setValue('cover_image', e);
                }}
              />
            }
            isChildRen
          >
            <div className="px-2 py-1">Change Cover</div>
          </Popover>
        </div>
      </div>

      <div className="mt-2">
        <Input
          placeholder="Project Name"
          label="Project Name"
          wrClassName="mb-4"
          keyForm="name"
          error={errors}
          onChangeCB={e => {
            setValue(
              'identifier',
              replaceSpecialCharactersEndWhiteSpace(
                e.target.value.toUpperCase().slice(0, 5)
              )
            );
          }}
          register={registerParent}
          validator={{ required: true }}
          setValue={setValue}
        />

        <Input
          placeholder="Description"
          label="Description"
          wrClassName="mb-4"
          keyForm="description"
          error={errors}
          register={registerParent}
          validator={{ required: true }}
          setValue={setValue}
        />
      </div>
      <div className="flex gap-3 justify-between mb-4">
        <Input
          label="Identifier"
          wrClassName="w-[150px]"
          keyForm="identifier"
          nameForm="Identifier"
          error={errors}
          register={registerParent}
          validator={{ required: true }}
          placeholder="Identifier"
          setValue={setValue}
        />

        <Select
          placement="topRight"
          isIconCheck
          onChange={(value: any) => {
            setValue('network', value);
          }}
          defaultValue={String(project.network)}
          options={networkOption}
          fontSize="text-[12px]"
        />
      </div>

      <div className="flex gap-2">
        <Button text="Update project" type="submit" typeBTN="primary" />
        <Confirm
          title="Delete the project"
          desc="Are you sure to delete this project ?"
          onConfirm={() => {
            handleDeleteProject();
          }}
        >
          <Button
            text="Delete project"
            type="button"
            typeBTN="dashed"
            className="bg-color-error text-theme-primary"
          />
        </Confirm>
      </div>
    </form>
  );
};

export default Setting;
