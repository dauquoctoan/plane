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
    onChange: (id: string | number) => void;
}

const SelectStateTable: React.FC<IProps> = ({
    projectId,
    stateId,
    onChange,
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
            onChange={onChange}
            fontSize="text-[12px]"
            isSearch={true}
            customeSelected={(e: any) => {
                return (
                    <div className="z-0 px-2 py-[3px] select-none flex items-center text-[12px]">
                        {e?.icon}
                        <span className="ml-1">{e.name}</span>
                    </div>
                );
            }}
        ></Select>
    );
};

export default SelectStateTable;
