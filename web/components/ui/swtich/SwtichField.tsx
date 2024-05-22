import React from 'react'
import { Controller } from 'react-hook-form'
import { IFieldProps } from '../types';
import { EditorContentProps } from '@tiptap/react';
import Swtich, { IPropsSwitch } from './swtich';

type Iprops = IPropsSwitch & IFieldProps & Omit<EditorContentProps,'editor'|'ref'>;

const TiptapPopoverField:React.FC<Iprops> = ({name, control, rules, errors, ...res}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <Swtich error={fieldState.error?.message||"" || fieldState.error?.type||''} {...field} {...res}/>
            )}
        />
      )
}

export default TiptapPopoverField