import React from 'react';
import { Controller } from 'react-hook-form';
import TipTapPopover, { ITipTap } from './tipTapPopover';
import { IFieldProps } from '../types';
import { EditorContentProps } from '@tiptap/react';

type Iprops = ITipTap &
  IFieldProps &
  Omit<EditorContentProps, 'editor' | 'ref' | 'editor'>;

const TipTapPopoverField: React.FC<Iprops> = ({
  name,
  control,
  rules,
  errors,
  ...res
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TipTapPopover
          error={fieldState.error?.message || fieldState.error?.type}
          {...field}
          {...res}
        />
      )}
    />
  );
};

export default TipTapPopoverField;
