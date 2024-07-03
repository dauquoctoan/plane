import React from 'react';
import { Controller } from 'react-hook-form';
import Select, { IProps } from './select';
import { IFieldProps } from '../types/form';

type Iprops = IProps & IFieldProps;

const SelectField: React.FC<Iprops> = ({
  control,
  name,
  rules,
  children,
  ...res
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <Select
            error={fieldState.error?.message || fieldState.error?.type}
            {...field}
            {...res}
          >
            {children}
          </Select>
        );
      }}
    />
  );
};

export default SelectField;
