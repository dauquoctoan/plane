import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import Line from '@/components/ui/line';
import images from '../../../constants/images.json';
import emoji from '../../../constants/emoji.json';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GiEarthAmerica } from 'react-icons/gi';
import { BiLockAlt } from 'react-icons/bi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Popover from '@/components/ui/popover';
import EmojiIconPicker from '@/components/ui/EmojiIconPicker';
import { renderEmoji } from '@/helpers/emoji';
import ChangeCover from './changeCover';
import { replaceSpecialCharactersEndWhiteSpace } from '@/helpers/string';
import Image from 'next/image';
import Select, { IOptionItem } from '@/components/ui/select/select';
import Avatar from '@/components/ui/avatar';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IProject } from '@/types';
import { useNoti } from '@/hooks';

interface IProps {
    setOpen: (e: boolean) => void;
    handleCreateProject: (data: IProject) => void;
}

const AddProject: React.FC<IProps> = ({ setOpen, handleCreateProject }) => {
    const info = useSelector(selectInfo);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm({
        defaultValues: {
            emoji: emoji[0],
            cover_image: images[0],
            identifier: '',
            description: '',
            name: '',
            network: 0,
            project_lead: null,
        } as any,
    });

    const networkOption: IOptionItem[] = [
        { icon: <BiLockAlt />, title: 'Private', value: '0' },
        { icon: <GiEarthAmerica />, title: 'Public', value: '1' },
    ];

    return (
        <form
            id="create-project-form"
            onSubmit={handleSubmit(async (formData) => {
                handleCreateProject({
                    ...formData,
                    created_by: info?.id,
                    workspace_id: info?.workspace?.id,
                });
            })}
            className="p-2"
        >
            <div className="h-36 rounded bg-blue-400 w-[500px] relative">
                <Image
                    layout="fill"
                    src={watch('cover_image')}
                    alt={`Default project cover image`}
                    objectFit="cover"
                    className=" w-full h-full"
                />
                <div className="absolute bottom-0 translate-y-[40%] left-2 bg-red">
                    <Popover
                        isChildRen
                        placement="left"
                        pxContent={0}
                        pyContent={0}
                        content={
                            <EmojiIconPicker
                                onChange={(e) => {
                                    setValue('emoji', e);
                                }}
                            />
                        }
                        contentClassName="border w-[200px]"
                    >
                        <div className="h-10 w-10 rounded bg-theme-secondary cursor-pointer flex items-center justify-center select-none">
                            {renderEmoji(watch('emoji'))}
                        </div>
                    </Popover>
                </div>
                <div className="absolute right-0 bottom-0 rounded border border-theme-border-primary bg-theme-secondary cursor-pointer select-none mb-2 mr-2">
                    <Popover
                        placement="right"
                        pxContent={0}
                        pyContent={0}
                        content={
                            <ChangeCover
                                onChange={(e) => {
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

            <div className="flex items-center justify-between py-3 gap-2 mt-3">
                <Input
                    placeholder="Project title"
                    nameForm="Project title"
                    keyForm="name"
                    error={errors}
                    register={register}
                    validator={{ required: true }}
                    setValue={setValue}
                    onChangeCB={(e) => {
                        setValue(
                            'identifier',
                            replaceSpecialCharactersEndWhiteSpace(
                                e.target.value.toUpperCase().slice(0, 5),
                            ),
                        );
                    }}
                    wrClassName="flex-1"
                />
                <Input
                    wrClassName="w-[150px]"
                    keyForm="identifier"
                    nameForm="Identifier"
                    error={errors}
                    register={register}
                    validator={{ required: true }}
                    placeholder="Identifier"
                    setValue={setValue}
                />
            </div>

            <Input
                isTextArea
                keyForm="description"
                nameForm="Description"
                error={errors}
                register={register}
                validator={{ required: true }}
                placeholder="Description..."
                setValue={setValue}
                className="max-h-[200px] h-[150px]"
            />

            <div className="flex text-sm items-center gap-2 py-2 select-none">
                <Select
                    placement="topLeft"
                    isIconCheck
                    onChange={(value: any) => {
                        setValue('network', value.value);
                    }}
                    defaultValue={networkOption[0].value}
                    options={networkOption}
                    fontSize="text-[12px]"
                />
                <Select
                    fontSize="text-[12px]"
                    isClear
                    isIconCheck
                    placement="topLeft"
                    isSearch
                    onChange={(value: any) => {
                        setValue('project_lead', value.value || null);
                    }}
                    options={[
                        {
                            icon: <Avatar size="sm">m</Avatar>,
                            title: 'toandq',
                            value: info?.id,
                        },
                    ]}
                >
                    <div className="px-2 py-1  border-theme-border-primary rounded flex items-center gap-1">
                        <BsFillPersonLinesFill />
                        <span>lead</span>
                    </div>
                </Select>
            </div>
            <Line />
            <div className="flex items-center justify-end gap-2 pt-2 ">
                <Button typeBTN="text" type="button" text="Cancel" />
                <Button
                    typeBTN="primary"
                    form="create-project-form"
                    type="submit"
                    text="Create Project"
                />
            </div>
        </form>
    );
};

export default AddProject;
