import Input from '@/components/ui/input/Input';
import React, { useContext, useEffect, useState } from 'react';
import { GiNotebook } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import Line from '@/components/ui/line';
import Swtich from '@/components/ui/swtich';
import IssueTools from './issueTools';
import { IData, IIssue, IProject, Istate } from '@/types';
import { IOptionItem } from '@/components/ui/select/select';
import Modal from '@/components/ui/modal';
import CreateState from '../layout/navbar/createState';
import CreateLabel from './createLabel';
import TiptapPopoverField from '@/components/ui/tiptap/tiptapPopoverField';
import SelectField from '@/components/ui/select/selectField';
import issueService from '@/services/issue-services';
import useSWR, { mutate } from 'swr';
import { STATES_KEY } from '@/apiKey/project';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import moment from 'moment';
import { NotiContext } from '@/components/ui/notification';
import { usePathname } from 'next/navigation';

interface IProps {
    isDraft: boolean;
    setDisableOverlay?: (a: boolean) => void;
    handleCloseModel: () => void;
    projects: IProject[];
    cycleId?: string;
    moduleId?: string;
}

const LsModals = [CreateState, CreateLabel];

export interface IOpenModal {
    value: boolean;
    index: number;
}

export interface IForm {
    desc: string;
    name: string;
    priority: string;
    state: string;
    labels: string[];
    members: string[];
    start_date: string;
    target_date: string;
    project: string;
}

export interface IMoreForm {
    cycle_id?: string | undefined;
    module_id?: string | undefined;
}

const CreateIssue: React.FC<IProps> = ({
    isDraft,
    handleCloseModel,
    projects,
    cycleId,
    moduleId,
}) => {
    const pathName = usePathname();
    const noti = useContext(NotiContext);
    const info = useSelector(selectInfo);
    const [isMore, setIsMore] = useState(false);
    const [isOpen, setIsOpen] = useState<IOpenModal>({
        value: false,
        index: 0,
    });

    const {
        register: registerParent,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
        watch,
        resetField,
        getValues,
        unregister,
        reset,
    } = useForm<IForm>();

    const { data: states } = useSWR(
        () => STATES_KEY(watch('project') || projects[0].id),
        () => issueService.getState<Istate[]>(watch('project')),
    );

    function closeModal() {
        if (!isMore) handleCloseModel();
        else reset();
    }

    useEffect(() => {
        if (states && states.length > 0) {
            reset((values) => ({
                ...values,
                state: states[0].id.toString(),
            }));
        }
    }, [states]);

    function handleClearForm() {
        reset((values) => ({
            ...values,
            state: (states && states[0].id.toString()) || '',
            priority: 'urgent',
            members: [],
            labels: [],
            desc: '',
            name: '',
        }));
    }

    const projectOptions: IOptionItem[] | undefined = projects?.map((e) => ({
        title: e.name || '',
        value: e.id?.toString(),
    }));

    const CurentModal = LsModals[isOpen.index];

    return (
        <div>
            <form
                id="create-issue-form"
                onSubmit={handleSubmit(async (data) => {
                    mutate(
                        pathName,
                        async (issue: any) => {
                            const issueResult =
                                await issueService.createIssue<IIssue>({
                                    name: data.name,
                                    description_html: data.desc,
                                    project_id: data.project || projects[0].id,
                                    workspace_id: info?.last_workspace_id,
                                    is_draft: isDraft,
                                    cycle_id: cycleId,
                                    module_id: moduleId,
                                    priority: data.priority || 'urgent',
                                    state_id: data.state,
                                    labels: data.labels,
                                    assignees: data.members,
                                    start_date: data.start_date
                                        ? moment(data.start_date).format()
                                        : undefined,
                                    target_date: data.target_date
                                        ? moment(data.target_date).format()
                                        : undefined,
                                });
                            if (issueResult) {
                                noti?.success('Issue created');
                                closeModal();
                                handleClearForm();
                                return issue
                                    ? [...issue, issueResult]
                                    : [issueResult];
                            } else {
                                noti?.error(
                                    'An error occurred, please try again later',
                                );
                                return issue && [...issue];
                            }
                        },
                        { revalidate: false },
                    );
                })}
                className="min-w-[700px] max-h-[900px] pt-4"
            >
                <div className="px-6 flex select-none items-center">
                    <SelectField
                        control={control}
                        errors={errors}
                        name="project"
                        options={projectOptions}
                        isIconCheck
                        defaultValue={projectOptions[0].value as string}
                        fontSize="text-sm"
                        customeSelected={(res) => (
                            <div className="flex items-center px-2">
                                <GiNotebook className="mr-1" />
                                {typeof res === 'object' && res?.title}
                            </div>
                        )}
                    />
                    <span className="ml-3 text-lg font-bold">Create Issue</span>
                </div>
                <div className="px-6 py-2">
                    <Input
                        placeholder="Title"
                        wrClassName="mb-4"
                        keyForm="name"
                        error={errors}
                        register={registerParent}
                        validator={{ required: true }}
                        setValue={setValue}
                    />
                    <TiptapPopoverField
                        watch={watch}
                        control={control}
                        errors={errors}
                        name="desc"
                        className="mb-4"
                    />
                    {
                        <IssueTools
                            states={states}
                            control={control}
                            setIsOpen={setIsOpen}
                            projectId={watch('project') || projects[0].id}
                        />
                    }
                    <Line />
                    <div className="px-6 flex items-center justify-between py-2">
                        <Swtich
                            label="Create more"
                            onChange={(value) => {
                                setIsMore(value);
                            }}
                        />
                        <div className="flex items-center gap-2">
                            <Button
                                type="button"
                                text="Discard"
                                typeBTN="text"
                                onClick={handleClearForm}
                            />
                            {isDraft && (
                                <Button
                                    type="button"
                                    text="Save Draft"
                                    typeBTN="text"
                                />
                            )}
                            <Button
                                form="create-issue-form"
                                type="submit"
                                text="Add issue"
                                typeBTN="primary"
                            />
                        </div>
                    </div>
                </div>
            </form>
            {states && projects[0].id && (
                <Modal
                    isOpen={isOpen.value}
                    handleClose={() => {
                        setIsOpen({ ...isOpen, value: false });
                    }}
                    content={
                        <CurentModal
                            handleClose={() => {
                                setIsOpen({ ...isOpen, value: false });
                            }}
                            projectId={watch('project') || projects[0].id}
                            states={states}
                        />
                    }
                />
            )}
        </div>
    );
};

export default CreateIssue;
