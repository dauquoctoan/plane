import { SWR_KEY_STATES } from '@/apiKey';
import AutoComplete from '@/components/ui/auto-complete';
import Button from '@/components/ui/button';
import Colorpicker from '@/components/ui/colorpicker/colorpicker';
import ColorPickerField from '@/components/ui/colorpicker/colorpickerField';
import DatePickerField from '@/components/ui/datepicker/datePickerField';
import Input from '@/components/ui/input/Input';
import { IOptionItem } from '@/components/ui/select/select';
import { LS_KEY_STATE } from '@/constants';
import issueService from '@/services/issue-services';
import { IData, IState } from '@/types';
import React from 'react';
import { useForm } from 'react-hook-form';
import useSWR, { mutate } from 'swr';

interface IPropsCreateState {
  states: IState[];
  projectId: string;
  handleClose: () => void;
}

const CreateState: React.FC<IPropsCreateState> = ({
  projectId,
  handleClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
    unregister,
  } = useForm<IState>();

  return (
    <form
      id="create-state-form"
      onSubmit={handleSubmit(data => {
        mutate<IState[]>(
          SWR_KEY_STATES(projectId),
          async (state: any) => {
            const groupKey: string | undefined = Object.keys(LS_KEY_STATE).find(
              key => data.group?.includes(LS_KEY_STATE[key])
            );
            if (groupKey) {
              const result = await issueService.createState<IState>({
                name: data.name,
                color: data.color,
                project_id: projectId,
                description: data.description,
                group: data.group?.toLowerCase(),
              });
              if (result) {
                handleClose();

                return [result, ...state];
              }
            } else {
              alert('group không tồn tại vui lòng nhập lại');
            }

            return state;
          },
          { revalidate: false }
        );
      })}
      className="md:min-w-[650px] md:max-h-[900px] w-full py-4"
    >
      <div className="font-bold text-xl">CreateState</div>
      <div>
        <Input
          label="Name"
          placeholder="Enter name"
          wrClassName="mb-4"
          nameForm="Name"
          keyForm="name"
          error={errors}
          register={register}
          validator={{ required: true }}
          setValue={setValue}
        />

        <AutoComplete
          data={Object.keys(LS_KEY_STATE).map(key => LS_KEY_STATE[key])}
          keyForm="group"
          error={errors}
          register={register}
          setValue={setValue}
          defaultValue="Backlog"
        />

        <ColorPickerField name="color" control={control} className="mt-4" />

        <Input
          label="Descrition"
          placeholder="Enter descrition"
          wrClassName="mt-4"
          nameForm="Descrition"
          keyForm="description"
          isTextArea
          error={errors}
          register={register}
          setValue={setValue}
        />

        <div className="w-full flex gap-2 items-center justify-end mt-4">
          <Button
            type="button"
            text="Discard"
            onClick={handleClose}
            typeBTN="text"
          />
          <Button
            type="submit"
            form="create-state-form"
            text="Add issue"
            typeBTN="primary"
          />
        </div>
      </div>
    </form>
  );
};

export default CreateState;
