'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input/Input';
import Modal from '@/components/ui/modal';
import { icons } from '@/constants';
import { IEstimate } from '@/types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EstimateSetting = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          text="Create estimate"
          typeBTN="primary"
        />
        <div></div>
      </div>
      <Modal
        isOpen={open}
        handleClose={() => {
          setOpen(false);
        }}
        content={<CreateEstimates setOpen={setOpen} />}
      />
    </div>
  );
};

const CreateEstimates = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [countPoints, setCountPoints] = useState<number>(10);
  const {
    register: registerParent,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    getValues,
    watch,
    reset,
  } = useForm<IEstimate>({});
  return (
    <form
      onSubmit={handleSubmit(async data => {
        console.log(data);
      })}
      className="md:min-w-[700px] w-full md:max-h-[90%] pt-4"
    >
      <h2 className="mt-4 text-xl">Create Estimates</h2>
      <Input
        placeholder="Title"
        wrClassName="mb-4"
        keyForm="name"
        error={errors}
        register={registerParent}
        validator={{ required: true }}
        setValue={setValue}
      />
      <Input
        placeholder="Description"
        wrClassName="mb-4"
        keyForm="description"
        error={errors}
        register={registerParent}
        validator={{ required: true }}
        setValue={setValue}
      />
      <div className="px-2 py-1 border rounded">
        <div className="text-sm text-color-text-sidebar mb-2">Points</div>
        {Array(countPoints)
          .fill('')
          .map((e, i) => {
            return (
              <Input
                key={i}
                wrClassName="mb-4"
                defaultValue={String(i + 1)}
                keyForm={String(i + 1)}
                error={errors}
                setValue={setValue}
                register={registerParent}
                validator={{ required: true }}
              />
            );
          })}
        <div
          onClick={() => {
            setCountPoints(countPoints + 1);
          }}
          className="cursor-pointer select-none text-color-special-primary flex items-center gap-2"
        >
          {icons.pluss}
          <div>Add points</div>
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-4">
        <Button
          text="Cancel"
          type="button"
          onClick={() => {
            setOpen(false);
          }}
        />
        <Button typeBTN="primary" text="Create Estimate" type="submit" />
      </div>
    </form>
  );
};

export default EstimateSetting;
