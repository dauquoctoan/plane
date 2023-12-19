import React, { memo } from 'react';
import DatePicker from '../ui/datepicker/datePicker';
import issueService from '@/services/issue-services';

interface IProps {
    name: string;
    beforeUpdateValue: (e: string | undefined) => Promise<any>;
    defaultDate?: string;
}

const DatepickerTable: React.FC<IProps> = ({
    name,
    beforeUpdateValue,
    defaultDate,
}) => {
    return (
        <DatePicker
            beforeUpdateValue={beforeUpdateValue}
            defaultDate={defaultDate}
            isChildren={false}
            formatDate="MM/DD/YYY"
        >
            <div>{name}</div>
        </DatePicker>
    );
};

export default memo(DatepickerTable);
