import { LABELS_BY_PROJECT_KEY, MEMBER_KEY_BY_WORKSPACE } from '@/apiKey';
import { IItemData } from '@/components/ui/collapse/collapse';
import DatePicker from '@/components/ui/datepicker/datePicker';
import { optionLevel } from '@/constants/issue';
import {
  convertDataOptions,
  createIssueLabelSelectOption,
  createMembeSelectOption,
} from '@/helpers';
import issueService from '@/services/issue-services';
import projectService from '@/services/project-services';
import { IData, ILabel, IProjectMember, IUser, Istate } from '@/types';
import useSWR from 'swr';

export type TCalBackChangeDate = (
  type: string,
  name: string,
  date?: string
) => void;

function getDates(name: string, cb?: TCalBackChangeDate): IItemData[] {
  return [
    {
      value: name + '::1_week',
      title: '1 week from now',
    },

    {
      value: name + '::2_weeks',
      title: '2 weeks from now',
    },

    {
      value: name + '::1_month',
      title: '1 month from now',
    },
    {
      value: name + '::2_months',
      title: '2 months from now',
    },
    // {
    //     value: 'custom',
    //     title: 'Custom',
    //     disable: true,
    //     render: () => (
    //         <div className="flex gap-2 items-center">
    //             <span className="font-medium">CusTom:</span>
    //             <DatePicker
    //                 onChange={(value) => {
    //                     cb && cb('from', name, value);
    //                 }}
    //                 isChildren={false}
    //                 formatDate="MM/DD/YYY"
    //             >
    //                 From
    //             </DatePicker>

    //             <DatePicker
    //                 onChange={(value) => {
    //                     cb && cb('to', name, value);
    //                 }}
    //                 isChildren={false}
    //                 formatDate="MM/DD/YYY"
    //             >
    //                 To
    //             </DatePicker>
    //         </div>
    //     ),
    // },
  ];
}

export const useDataFilter = (cb?: TCalBackChangeDate) => {
  const { data: labels } = useSWR(
    () => LABELS_BY_PROJECT_KEY('ALL'),
    () => issueService.findLabelsByProject({})
  );

  const {
    data: states,
    isLoading,
    isValidating,
  } = useSWR('DEFAULT_STATE', a => issueService.getDefaultState());

  const { data: members } = useSWR(
    () => MEMBER_KEY_BY_WORKSPACE,
    () =>
      projectService.getMemberByProject<IProjectMember[]>({
        projectId: '',
      })
  );

  const data: IItemData[] = [
    {
      title: 'State',
      value: 'states',
      children: convertDataOptions(states) as IItemData[],
    },
    {
      title: 'Priority',
      value: 'priorities',
      children: optionLevel as IItemData[],
    },
    {
      title: 'Create By',
      value: 'createBys',
      children: createMembeSelectOption(members, 'createBys') as IItemData[],
    },
    {
      title: 'Assignee',
      value: 'assignees',
      children: createMembeSelectOption(members, 'assignees') as IItemData[],
    },
    {
      title: 'Subscriber',
      value: 'subscribers',
      children: createMembeSelectOption(members, 'subscribers') as IItemData[],
    },
    {
      title: 'Label',
      value: 'labels',
      children: createIssueLabelSelectOption(labels) as IItemData[],
    },
    {
      title: 'Start Date',
      value: 'startDate',
      children: getDates('startDate', cb),
    },
    {
      title: 'Target Date',
      value: 'dueDate',
      children: getDates('dueDate', cb),
    },
  ];

  return { data };
};
