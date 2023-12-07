import React, { ReactElement } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { IOptionItem } from '@/components/ui/select/select';
import { IData, Istate } from '@/types';
import Avatar from '@/components/ui/avatar';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IoBan, IoCloseCircleOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline, IoMdPricetags } from 'react-icons/Io';
import { TbProgress } from 'react-icons/tb';
import { FaRegCircle } from 'react-icons/fa';
import { CiCircleMore } from 'react-icons/ci';
import { RiErrorWarningLine } from 'react-icons/ri';
import {
    MdOutlineSignalCellularAlt,
    MdOutlineSignalCellularAlt2Bar,
    MdSignalCellularAlt1Bar,
} from 'react-icons/md';
import { HiPlusSmall } from 'react-icons/hi2';
import DatePickerField from '@/components/ui/datepicker/datePickerField';
import { IOpenModal } from './createIssue';
import SelectField from '@/components/ui/select/selectField';
import { IFiledReactHookForm } from '@/components/ui/types/form';
import SelectLabel from '../layout/navbar/SelectLabel';
import { convertDataOptions } from '@/helpers';

interface IIssueTools extends IFiledReactHookForm {
    setIsOpen: (a: IOpenModal) => void;
    states?: Istate[];
    projectId: string | undefined;
}

const IssueTools: React.FC<IIssueTools> = ({
    setIsOpen,
    control,
    states,
    projectId,
}) => {
    const info = useSelector(selectInfo);
    const optionsState: IOptionItem[] | undefined =
        states && convertDataOptions(states);

    const optionsMember: IOptionItem[] | undefined = [
        {
            icon: <Avatar size="sm">{info?.email || ''}</Avatar>,
            name: info?.email || '',
            key: info?.id,
        },
        { icon: <Avatar size="sm">test</Avatar>, name: 'test', key: '123' },
    ];

    const optionLevel: IOptionItem[] | undefined = [
        { icon: <RiErrorWarningLine />, name: 'Urgent', key: 'urgent' },
        { icon: <MdOutlineSignalCellularAlt />, name: 'High', key: 'high' },
        {
            icon: <MdOutlineSignalCellularAlt2Bar />,
            name: 'Medium',
            key: 'medium',
        },
        { icon: <MdSignalCellularAlt1Bar />, name: 'Low', key: 'low' },
        { icon: <IoBan />, name: 'None', key: 'none' },
    ];

    return (
        <div className="mb-5 flex items-center justify-between gap-2">
            {optionsState ? (
                <SelectField
                    name="state"
                    control={control}
                    options={optionsState}
                    defaultValue={optionsState[0].key}
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
                    customeSelected={(e: any) => {
                        return (
                            <div className="px-2 py-[3px] select-none flex items-center text-[12px]">
                                {e?.icon}
                                <span className="ml-1">{e.name}</span>
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
                defaultValue={optionLevel[0].key}
                isIconCheck
                fontSize="text-[12px]"
                customeSelected={(e: any) => {
                    return (
                        <div className="px-2 py-[3px] select-none flex items-center text-[12px]">
                            {e?.icon}
                            <span className="ml-1">{e.name}</span>
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
                disableMessage
                isIconCheck
                fontSize="text-[12px]"
                control={control}
                isSearch={true}
                className="max-w-[120px]"
                isClear
            >
                <div className="px-2 py-[3px] cursor-pointer select-none border-theme-border-primary rounded flex items-center gap-1 text-[12px]">
                    <BsFillPersonLinesFill />
                    <span>Assignee</span>
                </div>
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
