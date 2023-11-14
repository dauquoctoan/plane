import Input from '@/components/ui/input/Input';
import Popover from '@/components/ui/popover';
import React from 'react';
import { GiNotebook } from 'react-icons/gi';
import { BsCheck2 } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import Line from '@/components/ui/line';
import Swtich from '@/components/ui/swtich';
import IssueTools from '../../../components/layout/navbar/issueTools';

interface IProps {
    isDraft: boolean;
}

const WorkSpaceActive: React.FC = () => {
    return (
        <div className="min-w-[130px] py-1">
            <div className="hover:bg-theme-secondary px-2 rounded cursor-pointer flex items-center justify-between">
                <span>vlxx</span>
                <BsCheck2 />
            </div>
            <div className="hover:bg-theme-secondary px-2 rounded cursor-pointer">
                vlxx
            </div>
        </div>
    );
};

const Issue: React.FC<IProps> = ({ isDraft }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        unregister,
    } = useForm();

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log('sdfsdf', data);
            })}
            className="min-w-[500px] max-h-[900px] py-4"
        >
            <div className="px-6 flex select-none items-center">
                <Popover
                    isChildRen={true}
                    contentClassName="border border-theme-border-highligh"
                    content={<WorkSpaceActive />}
                >
                    <div className="flex items-center border w-fit px-2 rounded hover:bg-theme-secondary cursor-pointer">
                        <GiNotebook />
                        <span className="text-sm ml-1">vlxx</span>
                    </div>
                </Popover>
                <span className="ml-3 text-lg font-bold">Create Issue</span>
            </div>
            <div className="px-6 py-2">
                <Input
                    placeholder="Title"
                    wrClassName="mb-4"
                    nameForm="Title"
                    keyForm="title"
                    error={errors}
                    register={register}
                    validator={{ required: true }}
                    setValue={setValue}
                />

                <Input
                    isTextArea
                    placeholder="Press '/' for commands..."
                    wrClassName="mb-4"
                    nameForm="Last name"
                    keyForm="last-name"
                    className="max-h-[400px] h-[200px]"
                    error={errors}
                    register={register}
                    setValue={setValue}
                />
            </div>
            <IssueTools />
            <Line />
            <div className="px-6 flex items-center justify-between py-2">
                <Swtich
                    label="Create more"
                    onChange={(value) => {
                        console.log(value);
                    }}
                />
                <div className="flex items-center gap-2">
                    <Button type="button" text="Discard" typeBTN="text" />
                    {isDraft && (
                        <Button
                            type="button"
                            text="Save Draft"
                            typeBTN="text"
                        />
                    )}
                    <Button type="submit" text="Add issue" typeBTN="primary" />
                </div>
            </div>
        </form>
    );
};

export default Issue;
