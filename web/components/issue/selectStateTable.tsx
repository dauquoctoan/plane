import React from 'react';
import Select from '../ui/select/select';
import { STATES_KEY } from '@/apiKey';
import issueService from '@/services/issue-services';
import useSWR from 'swr';
import { IData, Istate } from '@/types';
import { convertDataOptions } from '@/helpers';

interface IProps {
    projectId?: number;
    stateId: string;
    onChange?: (id: string | number) => void;
    beforeUpdateValue: (e: string) => Promise<any>;
}

const SelectStateTable: React.FC<IProps> = ({
    projectId,
    stateId,
    onChange,
    beforeUpdateValue,
}) => {
    const { data: states } = useSWR(
        () => STATES_KEY(projectId),
        () => issueService.getState<IData<Istate[]>>(projectId || 0),
    );
    return (
        <Select
            defaultValue={stateId}
            options={states && convertDataOptions(states)}
            isIconCheck
            isChildren={false}
            onChange={onChange}
            fontSize="text-[12px]"
            isSearch={true}
            beforeUpdateValue={beforeUpdateValue}
        ></Select>
    );
};

export default SelectStateTable;
