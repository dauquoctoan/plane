import React from 'react';
import Select from '../ui/select/select';
import DefaultSelectMember from './defaultSelectMember';
import { createMembeSelectOption } from '@/helpers';
import useSWR from 'swr';
import projectService from '@/services/project-services';
import { IData, IProjectMember, IUser } from '@/types';
import { MEMBER_KEY_BY_PROJECT } from '@/apiKey';

interface IProps {
    projectId?: string;
    assigness?: string[];
    beforeUpdateValue: (a: string | string[]) => Promise<any>;
    showMoreText?: boolean;
    size?: "sm" | "md" | "lg" | "xl"
}

const SelectMemberTable: React.FC<IProps> = ({
    projectId,
    assigness,
    showMoreText = true,
    size,
    beforeUpdateValue,
}) => {
    const { data: members } = useSWR(
        () => MEMBER_KEY_BY_PROJECT(projectId),
        () =>
            projectService.getMemberByProject<IProjectMember[]>({
                projectId: projectId || '',
            }),
    );

    return (
        <>
            {members && (
                <Select
                    fontSize="text-[12px]"
                    options={createMembeSelectOption(members, undefined, size)}
                    isChildren={false}
                    isIconCheck
                    isSearch
                    showMoreText={showMoreText}
                    beforeUpdateValue={beforeUpdateValue}
                    isMutiple
                    isClear
                    defaultValue={assigness}
                >
                    {<DefaultSelectMember showMoreText={showMoreText} />}
                </Select >
            )}
        </>
    );
};

export default SelectMemberTable;
