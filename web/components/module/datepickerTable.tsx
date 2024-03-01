import React, { memo } from 'react';
import DatePicker from '../ui/datepicker/datePicker';
import { TPlacement } from '@/hooks';

interface IProps {
    name: string;
    beforeUpdateValue: (e: string | undefined) => Promise<any>;
    defaultDate?: string;
    border?: boolean;
    style?: React.CSSProperties;
    placement?: TPlacement;
}

const DatepickerTable: React.FC<IProps> = ({
    name,
    beforeUpdateValue,
    defaultDate,
    border,
    style,
    placement,
}) => {
    return (
        <DatePicker
            style={style}
            border={border}
            beforeUpdateValue={beforeUpdateValue}
            defaultDate={defaultDate}
            isChildren={false}
            placement={placement}
            formatDate="MM/DD/YYY"
        >
            <div>{name}</div>
        </DatePicker>
    );
};

export default memo(DatepickerTable);
