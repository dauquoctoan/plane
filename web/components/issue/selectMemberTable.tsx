import React from 'react';
import Select from '../ui/select/select';
import DefaultSelectMember from './defaultSelectMember';
import { createMembeSelectOption } from '@/helpers';
import useSWR from 'swr';
import projectService from '@/services/project-services';
import { IData, IUser } from '@/types';
import { MEMBER_KEY_BY_PROJECT } from '@/apiKey';

interface IProps {
    projectId?: string;
    assigness?: string[];
    beforeUpdateValue: (a: string | string[]) => Promise<any>;
}

const SelectMemberTable: React.FC<IProps> = ({
    projectId,
    assigness,
    beforeUpdateValue,
}) => {
    const { data: members } = useSWR(
        () => MEMBER_KEY_BY_PROJECT(projectId),
        () =>
            projectService.getMemberByProject<IData<IUser[]>>({
                projectId: projectId || '',
            }),
    );

    return (
        <>
            {members && (
                <Select
                    fontSize="text-[12px]"
                    options={createMembeSelectOption(members)}
                    isChildren={false}
                    isIconCheck
                    isSearch
                    beforeUpdateValue={beforeUpdateValue}
                    isMutiple
                    isClear
                    defaultValue={assigness}
                >
                    <DefaultSelectMember />
                </Select>
            )}
        </>
    );
};

export default SelectMemberTable;
