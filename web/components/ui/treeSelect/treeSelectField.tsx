import React from 'react';
import { Controller } from 'react-hook-form';
import { IFieldProps } from '../types/form';
import TreeSelect, { ITreeSelect } from './treeSelect';

export type Iprops = ITreeSelect & IFieldProps;

const TreeSelectField: React.FC<Iprops> = ({
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
          <TreeSelect
            error={fieldState.error?.message || fieldState.error?.type}
            {...field}
            {...res}
          >
            {children}
          </TreeSelect>
        );
      }}
    />
  );
};

export default TreeSelectField;
