import { LABELS_BY_PROJECT_KEY } from '@/apiKey';
import React from 'react';
import useSWR from 'swr';
import Select from '../ui/select/select';
import { createIssueLabelSelectOption } from '@/helpers';
import { IData, ILabel } from '@/types';
import { IoMdPricetags } from 'react-icons/Io';
import issueService from '@/services/issue-services';

interface IProps {
    projectId?: string;
    beforeUpdateValue: (e: string | string[]) => Promise<any>;
    labels: string[];
    showMoreText?: boolean;
}

const SelectLabelsTable: React.FC<IProps> = ({
    projectId,
    beforeUpdateValue,
    showMoreText = true,
    labels: defaultValue,
}) => {
    const { data: labels } = useSWR(
        () => LABELS_BY_PROJECT_KEY(projectId),
        () => issueService.findLabelsByProject<IData<ILabel[]>>({ projectId }),
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
                    showMoreText={showMoreText}
                    isChildren={false}
                    beforeUpdateValue={beforeUpdateValue}
                >
                    <div className="px-2 cursor-pointer select-none py-[3px] border-theme-border-primary rounded flex items-center gap-1 text-[12px]">
                        <IoMdPricetags />
                        <span>{showMoreText && 'label'}</span>
                    </div>
                </Select>
            )}
        </>
    );
};

export default SelectLabelsTable;
