import { LABELS_BY_PROJECT_KEY } from '@/apiKey/project';
import Button from '@/components/ui/button';
import ColorPickerField from '@/components/ui/colorpicker/colorpickerField';
import Input from '@/components/ui/input/Input';
import { useNoti } from '@/hooks';
import issueService from '@/services/issue-services';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { ILabel } from '@/types';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { mutate } from 'swr';

interface IPropsCreateLabel {
    projectId: string;
    handleClose: () => void;
}

const CreateLabel: React.FC<IPropsCreateLabel> = ({
    projectId,
    handleClose,
}) => {
    const refForm = useRef<HTMLFormElement>(null);
    const info = useSelector(selectInfo);
    const noti = useNoti();
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
        <form
            ref={refForm}
            id="create-label-form"
            name="create-label-form"
            onSubmit={handleSubmit(async (data) => {
                mutate(
                    LABELS_BY_PROJECT_KEY(projectId),
                    async (state: any) => {
                        const result = await issueService.createLabel<ILabel>({
                            color: data.color,
                            name: data.name,
                            workspace_id: info?.last_workspace_id,
                            project_id: projectId,
                        });

                        if (result) {
                            noti?.success('Label is Created');
                            setTimeout(() => {
                                handleClose();
                            }, 200);
                            return [result, ...state];
                        } else {
                            setTimeout(() => {
                                handleClose();
                            }, 200);
                            noti?.error(
                                'An error occurred, please try again later',
                            );
                            return [...state];
                        }
                    },
                    { revalidate: false },
                );
            })}
            className="w-[500px]"
        >
            <div className="font-bold text-lg">Create Label</div>
            <div className="flex items-center gap-2">
                <ColorPickerField
                    name="color"
                    control={control}
                    rules={{ required: 'This field is required' }}
                />
                <Input
                    wrClassName="flex-1"
                    placeholder="Label title"
                    nameForm="Label"
                    keyForm="name"
                    error={errors}
                    register={register}
                    validator={{ required: true }}
                    setValue={setValue}
                />
            </div>
            <div className="w-full flex gap-2 items-center justify-end mt-4">
                <Button type="button" text="Discard" typeBTN="text" />
                <Button
                    form="create-label-form"
                    type="submit"
                    text="Add label"
                    typeBTN="primary"
                />
            </div>
        </form>
    );
};

export default CreateLabel;
