import {
    CYCLES_BY_PROJECT_KEY,
    LS_PROJECT_KEY,
    MODULEs_BY_PROJECT_KEY,
} from '@/apiKey';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import { useNoti } from '@/hooks';
import projectService from '@/services/project-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IData, IProject } from '@/types';
import { userInfo } from 'os';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';

export interface IProps {
    id: string;
    name: string;
    handleCloseModel: () => void;
}

const AddModule: FC<IProps> = ({ id, name, handleCloseModel }) => {
    const {
        register: registerParent,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
        watch,
        resetField,
        getValues,
        unregister,
        reset,
    } = useForm();
    const noti = useNoti();

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                mutate(
                    MODULEs_BY_PROJECT_KEY(id),
                    async (modules: any) => {
                        const resutl = await projectService.createModule(id, {
                            name: data.name,
                            description: data.desc,
                        });

                        if (resutl) {
                            noti?.success('Issue created');
                            handleCloseModel();
                            return modules ? [...modules, resutl] : [resutl];
                        } else {
                            noti?.error(
                                'An error occurred, please try again later',
                            );
                            return modules && [...modules];
                        }
                    },
                    { revalidate: false },
                );
            })}
            className="w-[500px]"
        >
            <div className="flex gap-2">
                <div className="px-2 border rounded text-sm select-none">
                    {name}
                </div>
                <div className="text-base font-bold select-none">
                    New Module
                </div>
            </div>
            <div className="mt-2">
                <Input
                    placeholder="Title"
                    wrClassName="mb-4"
                    keyForm="name"
                    error={errors}
                    register={registerParent}
                    validator={{ required: 'Name is required' }}
                    setValue={setValue}
                />

                <Input
                    placeholder="Description"
                    wrClassName="mb-4"
                    isTextArea
                    keyForm="desc"
                    error={errors}
                    register={registerParent}
                    setValue={setValue}
                />
            </div>
            <div className="w-full flex gap-2 items-center">
                <Button
                    text="Cancle"
                    type="reset"
                    typeBTN="text"
                    onClick={handleCloseModel}
                />
                <Button text="Create cycle" type="submit" typeBTN="primary" />
            </div>
        </form>
    );
};

export default AddModule;
