import React from 'react';
import { Controller } from 'react-hook-form';
import Colorpicker, { IPropsColorPicker } from './colorpicker';
import { ICurrentFieldProps, IFieldProps } from '../types';

type IProps = IPropsColorPicker & IFieldProps;

const ColorPickerField: React.FC<IProps> = ({
  control,
  errors,
  name,
  rules,
  ...res
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Colorpicker
          error={fieldState.error?.message || fieldState.error?.type}
          {...field}
          {...res}
        ></Colorpicker>
      )}
    />
  );
};

export default ColorPickerField;
