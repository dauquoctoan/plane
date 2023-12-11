import Input from '@/components/ui/input/Input';
import React, { useContext, useEffect, useState } from 'react';
import { GiNotebook } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import Line from '@/components/ui/line';
import Swtich from '@/components/ui/swtich';
import IssueTools from './issueTools';
import { IData, IIssue, IProject, Istate } from '@/types';
import Select, { IOptionItem } from '@/components/ui/select/select';
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
import { INotiConext, NotiContext } from '@/components/ui/notification';
import { useParams, usePathname, useRouter } from 'next/navigation';

interface IProps {
    isDraft: boolean;
    setDisableOverlay: (a: boolean) => void;
    handleCloseModel: () => void;
    projects: IProject[];
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
    labels: string;
    members: string[];
    start_date: string;
    target_date: string;
    project: string;
}

const CreateIssue: React.FC<IProps> = ({
    isDraft,
    handleCloseModel,
    projects,
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
        () => STATES_KEY(watch('project')),
        () => issueService.getState<IData<Istate[]>>(+watch('project')),
    );

    function closeModal() {
        if (!isMore) handleCloseModel();
        else {
            reset();
        }
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
            labels: '',
            desc: '',
            name: '',
        }));
    }

    const projectOptions: IOptionItem[] | undefined = projects?.map((e) => ({
        name: e.name || '',
        key: e.id?.toString(),
    }));
    const CurentModal = LsModals[isOpen.index];

    return (
        <div>
            <form
                id="create-issue-form"
                onSubmit={handleSubmit(async (data) => {
                    mutate(
                        pathName.split('/').pop(),
                        async (issue: any) => {
                            const issueResult =
                                await issueService.createIssue<IIssue>({
                                    name: data.name,
                                    description_html: data.desc,
                                    project_id:
                                        Number(data.project) || projects[0].id,
                                    workspace_id: info?.last_workspace_id,
                                    is_draft: isDraft,
                                    priority: data.priority,
                                    state_id: Number(data.state),
                                    start_date: moment(
                                        data.start_date,
                                    ).format(),
                                    target_date: moment(
                                        data.target_date,
                                    ).format(),
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
                        defaultValue={projectOptions[0].key}
                        fontSize="text-sm"
                        customeSelected={(res) => (
                            <div className="flex items-center px-2">
                                <GiNotebook className="mr-1" />
                                {typeof res === 'object' && res?.name}
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
                            projectId={watch('project')}
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
            {states && watch('project') && (
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
                            projectId={watch('project')}
                            states={states}
                        />
                    }
                />
            )}
        </div>
    );
};

export default CreateIssue;
