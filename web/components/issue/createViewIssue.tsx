import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../ui/input/Input';
import Button from '../ui/button';

const CreateViewIssue = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm();
    return (
        <form className="w-[500px]" onSubmit={handleSubmit(async (data) => {})}>
            <div>
                <h2 className="text-base font-bold mb-1">Create View</h2>
            </div>
            <div>
                <Input
                    placeholder="Title"
                    nameForm="Title"
                    keyForm="title"
                    wrClassName="mb-4"
                    error={errors}
                    register={register}
                    validator={{ required: true }}
                    setValue={setValue}
                />

                <Input
                    wrClassName="mb-4"
                    keyForm="desc"
                    nameForm="Description"
                    error={errors}
                    register={register}
                    validator={{ required: true }}
                    placeholder="Description"
                    setValue={setValue}
                />

                <div className="flex items-center justify-end gap-2 pt-2 ">
                    <Button typeBTN="text" type="button" text="Cancel" />
                    <Button
                        typeBTN="primary"
                        type="submit"
                        text="Create View"
                    />
                </div>
            </div>
        </form>
    );
};

export default CreateViewIssue;
