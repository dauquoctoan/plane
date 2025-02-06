import React, { ReactElement } from 'react';
import { IOptionItem } from '@/components/ui/select/select';
import { IData, IProjectMember, IUser, IState } from '@/types';
import { HiPlusSmall } from 'react-icons/hi2';
import DatePickerField from '@/components/ui/datepicker/datePickerField';
import { IOpenModal } from '../module/createIssue';
import SelectField from '@/components/ui/select/selectField';
import { IFiledReactHookForm } from '@/components/ui/types/form';
import SelectLabel from './SelectLabel';
import { convertDataOptions, createMembeSelectOption } from '@/helpers';
import { optionLevel } from '@/constants/issue';
import DefaultSelectMember from '../module/defaultSelectMember';
import useSWR from 'swr';
import { SWR_KEY_MEMBER_BY_PROJECT } from '@/apiKey';
import projectService from '@/services/project-services';

interface IIssueTools extends IFiledReactHookForm {
  setIsOpen: (a: IOpenModal) => void;
  states?: IState[];
  projectId: string | undefined;
}

const IssueTools: React.FC<IIssueTools> = ({
  setIsOpen,
  control,
  states,
  projectId,
}) => {
  const optionsState: IOptionItem[] | undefined =
    states && convertDataOptions(states);  const { data: members } = useSWR(
    () => SWR_KEY_MEMBER_BY_PROJECT(projectId),
    () =>
      projectService.getMemberByProject<IProjectMember[]>({
        projectId: projectId || '',
      })
  );  const optionsMember: IOptionItem[] = createMembeSelectOption(members);

  return (
    <div className="mb-5 flex flex-wrap md:flex-nowrap items-center justify-between gap-2">
      {optionsState && optionsState?.length > 0 ? (
        <SelectField
          name="state"
          control={control}
          options={optionsState}
          defaultValue={optionsState[0].value || ''}
          isIconCheck
          rules={{ required: true }}
          fontSize="text-[12px]"
          isSearch={true}
          moreItem={
            <div
              onClick={() => {
                setIsOpen({ value: true, index: 0 });
              }}
              className="flex items-center text-[12px] px-2 py-1 hover:bg-theme-secondary cursor-pointer"
            >
              <HiPlusSmall className="text-[14px]" />
              <span className="ml-1">Create New State</span>
            </div>
          }
          customSelected={(e: any) => {
            return (
              <div className="px-2 py-[3px] select-none flex items-center text-[12px]">
                {e?.icon}
                <span className="ml-1">{e.title}</span>
              </div>
            );
          }}
        />
      ) : (
        <div className="border w-20 h-6 rounded"></div>
      )}

      <SelectField
        name="priority"
        control={control}
        options={optionLevel}
        defaultValue={optionLevel[0].value || ''}
        isIconCheck
        fontSize="text-[12px]"
        customSelected={(e: any) => {
          return (
            <div className="px-2 py-[3px] select-none flex items-center text-[12px]">
              {e?.icon}
              <span className="ml-1">{e.title}</span>
            </div>
          );
        }}
      />

      <SelectLabel
        control={control}
        projectId={projectId}
        setIsOpen={setIsOpen}
      />

      <SelectField
        name="members"
        options={optionsMember}
        isMutiple
        disableMessage
        isIconCheck
        fontSize="text-[12px]"
        control={control}
        isSearch={true}
        className="max-w-[120px]"
        isClear
      >
        <DefaultSelectMember />
      </SelectField>

      <DatePickerField
        formatDate="MM/DD/YYY"
        control={control}
        name="start_date"
      >
        Start date
      </DatePickerField>

      <DatePickerField
        formatDate="MM/DD/YYY"
        control={control}
        name="target_date"
      >
        Due date
      </DatePickerField>
    </div>
  );
};

export default IssueTools;
