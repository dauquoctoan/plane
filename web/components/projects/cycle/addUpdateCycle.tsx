import { SWR_KEY_CYCLES_BY_PROJECT } from '@/apiKey';
import Button from '@/components/ui/button';
import DatePickerField from '@/components/ui/datepicker/datePickerField';
import Input from '@/components/ui/input/Input';
import { useNoti } from '@/hooks';
import projectService from '@/services/project-services';
import { ICycle } from '@/types';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';

export interface IProps {
  id: string;
  name: string;
  handleCloseModel: () => void;
  defaultValues?: ICycle;
}

const AddUpdateCycle: FC<IProps> = ({
  id,
  name,
  handleCloseModel,
  defaultValues,
}) => {
  const {
    register: registerParent,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<ICycle>({
    defaultValues: {
      ...defaultValues,
    },
  });  const noti = useNoti();

  return (
    <form
      onSubmit={handleSubmit(async data => {
        const result = await (defaultValues?.id
          ? projectService.upDateCycle(defaultValues?.id, data)
          : projectService.createCycle(id, data));        const isActive = result?.start_date && result?.end_date;

        if (isActive) {
          mutate<ICycle[]>(SWR_KEY_CYCLES_BY_PROJECT(id + 'active'), async (cycles) => {
            return result ? [...(cycles || []), result] : cycles;
          });
        }

        mutate(SWR_KEY_CYCLES_BY_PROJECT(id + 'all'), async (cycles: any) => {
          return result ? [...cycles, result] : [...cycles];
        });

        if (result) {
          noti?.success('Issue created');
          handleCloseModel();
        } else {
          noti?.error('An error occurred, please try again later');
        }
      })}
      className="w-full md:w-[500px]"
    >
      <div className="flex gap-2">
        <div className="px-2 border rounded text-sm select-none">{name}</div>
        <div className="text-base font-bold select-none">
          {defaultValues?.id ? 'Update Cycle' : 'New Cycle'}
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
        <div className="flex gap-2 items-center mb-5">
          <DatePickerField
            formatDate="MM/DD/YYY"
            control={control}
            name="start_date"
          >
            Start date
          </DatePickerField>

          <DatePickerField
            formatDate="MM/DD/YYY"
            control={control}
            name="end_date"
          >
            Due date
          </DatePickerField>
        </div>
      </div>
      <div className="w-full flex gap-2 items-center">
        <Button
          text="Cancle"
          type="reset"
          typeBTN="text"
          onClick={handleCloseModel}
        />
        <Button
          text={defaultValues?.id ? 'Update' : 'Create'}
          type="submit"
          typeBTN="primary"
        />
      </div>
    </form>
  );
};

export default AddUpdateCycle;
