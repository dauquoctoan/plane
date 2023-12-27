import React from 'react';
import Select, { IOptionItem } from '../ui/select/select';
import { STATES_KEY } from '@/apiKey';
import issueService from '@/services/issue-services';
import useSWR from 'swr';
import { IData, Istate } from '@/types';
import { convertDataOptions } from '@/helpers';

interface IProps {
    projectId?: string;
    stateId: string;
    onChange?: (id: string | string[]) => void;
    beforeUpdateValue: (e: string | string[]) => Promise<any>;
    keyUpdate?: string;
}

const SelectState: React.FC<IProps> = ({
    projectId,
    stateId,
    onChange,
    keyUpdate,
    beforeUpdateValue,
}) => {
    const { data: states } = useSWR(
        () => STATES_KEY(projectId),
        () => issueService.getState<IData<Istate[]>>(projectId || ''),
    );

    return (
        <Select
            defaultValue={stateId}
            options={states && (convertDataOptions(states) as IOptionItem[])}
            isIconCheck
            isChildren={false}
            onChange={onChange}
            fontSize="text-[12px]"
            isSearch={true}
            keyUpdate={keyUpdate}
            beforeUpdateValue={beforeUpdateValue}
        ></Select>
    );
};

export default SelectState;
