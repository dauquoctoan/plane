import { LABELS_BY_PROJECT_KEY, MEMBER_KEY } from '@/apiKey';
import projectService from '@/services/project-services';
import React from 'react';
import useSWR from 'swr';
import Select from '../ui/select/select';
import {
    createIssueLabelSelectOption,
    createMembeSelectOption,
} from '@/helpers';
import { IData, ILabel } from '@/types';
import { IoMdPricetags } from 'react-icons/Io';
import issueService from '@/services/issue-services';

interface IProps {
    projectId?: string;
    beforeUpdateValue: (e: string | string[]) => Promise<any>;
    labels: string[];
}

const SelectLabelsTable: React.FC<IProps> = ({
    projectId,
    beforeUpdateValue,
    labels: defaultValue,
}) => {
    const { data: labels } = useSWR(
        () => LABELS_BY_PROJECT_KEY(projectId),
        () =>
            issueService.findLabelsByProject<IData<ILabel[]>>(
                projectId as string,
            ),
    );

    return (
        <>
            {labels && (
                <Select
                    options={createIssueLabelSelectOption(labels)}
                    isIconCheck
                    fontSize="text-[12px]"
                    className="max-w-[120px]"
                    isSearch={true}
                    defaultValue={defaultValue}
                    isMutiple
                    isClear
                    isChildren={false}
                    beforeUpdateValue={beforeUpdateValue}
                >
                    <div className="px-2 cursor-pointer select-none py-[3px] border-theme-border-primary rounded flex items-center gap-1 text-[12px]">
                        <IoMdPricetags />
                        <span>label</span>
                    </div>
                </Select>
            )}
        </>
    );
};

export default SelectLabelsTable;
