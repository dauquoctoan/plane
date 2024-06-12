import {
    MODULEs_BY_PROJECT_KEY,
} from '@/apiKey';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import { useNoti } from '@/hooks';
import projectService from '@/services/project-services';
import { IModule } from '@/types';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';

export interface IProps {
    id: string;
    name: string;
    handleCloseModel: () => void;
    defaultValue?: IModule;
}

const AddModule: FC<IProps> = ({ id, name, handleCloseModel, defaultValue }) => {
    const {
        register: registerParent,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({defaultValues:{
        ...defaultValue
    }});
    const noti = useNoti();

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                mutate(
                    MODULEs_BY_PROJECT_KEY(id),
                    async (modules: any) => {
                        const resutl = await (defaultValue?.id ? projectService.updateModule(defaultValue.id, {
                            name: data.name,
                            description: data.description,
                        }):projectService.createModule(id, {
                            name: data.name,
                            description: data.description,
                        }))

                        if (resutl) {
                            noti?.success('Module ' + defaultValue?.id ? 'updated':'created');
                            handleCloseModel();
                            return defaultValue?.id ? modules.map((itemModule:IModule)=>{
                                if(defaultValue.id == itemModule.id) return {...defaultValue, name: data.name,
                                    description: data.description};
                                else return itemModule;
                            })  : [...modules, resutl];
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
            className="md:w-[500px] w-full"
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
                    keyForm="description"
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
                <Button text={defaultValue?.id ? "Update cycle":"Create cycle"} type="submit" typeBTN="primary" />
            </div>
        </form>
    );
};

export default AddModule;
