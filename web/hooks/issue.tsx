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
import { IData, ILabel, IUser, Istate } from '@/types';
import useSWR from 'swr';

export type TCalBackChangeDate = (
    type: string,
    name: string,
    date?: string,
) => void;

function getDates(name: string, cb?: TCalBackChangeDate): IItemData[] {
    return [
        {
            value: name + '::7',
            title: '1 week from now',
        },

        {
            value: name + '::14',
            title: '2 weeks from now',
        },

        {
            value: name + '::30',
            title: '1 month from now',
        },

        {
            value: name + '::60',
            title: '2 months from now',
        },
        {
            value: 'custom',
            title: 'Custom',
            disable: true,
            render: () => (
                <div className="flex gap-2 items-center">
                    <span className="font-medium">CusTom:</span>
                    <DatePicker
                        onChange={(value) => {
                            cb && cb('from', name, value);
                        }}
                        isChildren={false}
                        formatDate="MM/DD/YYY"
                    >
                        From
                    </DatePicker>

                    <DatePicker
                        onChange={(value) => {
                            cb && cb('to', name, value);
                        }}
                        isChildren={false}
                        formatDate="MM/DD/YYY"
                    >
                        To
                    </DatePicker>
                </div>
            ),
        },
    ];
}

export const useDataFilter = (cb?: TCalBackChangeDate) => {
    const { data: labels } = useSWR(
        () => LABELS_BY_PROJECT_KEY('ALL'),
        () => issueService.findLabelsByProject<IData<ILabel[]>>({}),
    );

    const {
        data: states,
        isLoading,
        isValidating,
    } = useSWR('DEFAULT_STATE', (a) =>
        issueService.getDefaultState<IData<Istate[]>>(),
    );

    const { data: members } = useSWR(
        () => MEMBER_KEY_BY_WORKSPACE,
        () =>
            projectService.getMemberByProject<IData<IUser[]>>({
                projectId: '',
            }),
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
            children: optionLevel,
        },
        {
            title: 'Create By',
            value: 'createBys',
            children: createMembeSelectOption(members, 'createBys'),
        },
        {
            title: 'Assignee',
            value: 'assignees',
            children: createMembeSelectOption(members, 'assignees'),
        },
        {
            title: 'Subscriber',
            value: 'subscribers',
            children: createMembeSelectOption(members, 'subscribers'),
        },
        {
            title: 'Label',
            value: 'labels',
            children: createIssueLabelSelectOption(labels),
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
