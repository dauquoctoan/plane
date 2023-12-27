import SelectField from '@/components/ui/select/selectField';
import { IFiledReactHookForm } from '@/components/ui/types';
import React from 'react';
import { IoMdPricetags } from 'react-icons/Io';
import { HiPlusSmall } from 'react-icons/hi2';
import { IOpenModal } from './createIssue';
import useSWR from 'swr';
import { LABELS_BY_PROJECT_KEY } from '@/apiKey/project';
import { IData, ILabel, Istate } from '@/types';
import issueService from '@/services/issue-services';
import { IOptionItem } from '@/components/ui/select/select';
import { createIssueLabelSelectOption } from '@/helpers';

interface ISelectLabel extends IFiledReactHookForm {
    projectId: string | undefined;
    setIsOpen: (a: IOpenModal) => void;
}

const SelectLabel: React.FC<ISelectLabel> = ({
    projectId,
    control,
    setIsOpen,
}) => {
    const { data: labels } = useSWR(
        () => LABELS_BY_PROJECT_KEY(projectId),
        () =>
            issueService.findLabelsByProject<IData<ILabel[]>>({
                projectId: projectId,
            }),
    );

    const options: IOptionItem[] | undefined =
        createIssueLabelSelectOption(labels);

    return (
        <>
            {options && (
                <SelectField
                    name="labels"
                    options={options}
                    isIconCheck
                    control={control}
                    fontSize="text-[12px]"
                    className="max-w-[120px]"
                    isSearch={true}
                    isMutiple
                    isClear
                    moreItem={
                        <div
                            onClick={() => {
                                setIsOpen({ value: true, index: 1 });
                            }}
                            className="flex items-center gap-1 text-sm select-none cursor-pointer hover:bg-theme-secondary p-1"
                        >
                            <HiPlusSmall className="text-[14px]" />
                            <label>Create new Label</label>
                        </div>
                    }
                >
                    <div className="px-2 cursor-pointer select-none py-[3px] border-theme-border-primary rounded flex items-center gap-1 text-[12px]">
                        <IoMdPricetags />
                        <span>label</span>
                    </div>
                </SelectField>
            )}
        </>
    );
};

export default SelectLabel;
