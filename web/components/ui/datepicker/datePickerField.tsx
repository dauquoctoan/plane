import React from 'react'
import { Controller} from 'react-hook-form'
import DatePicker, { Iprops } from './datePicker';
import { IFieldProps } from '../types';
type IProps = Iprops & IFieldProps;

const DatePickerField:React.FC<IProps> = ({control, errors, name, rules, children, ...res}) => {
  return (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field,fieldState }) => (
           <DatePicker error={fieldState.error?.message || fieldState.error?.type} {...field} {...res}>{children}</DatePicker>
        )}
    />
  )
}

export default DatePickerField