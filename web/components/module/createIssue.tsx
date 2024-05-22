import Input from '@/components/ui/input/Input';
import React, { useContext, useEffect, useState } from 'react';
import { GiNotebook } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import Line from '@/components/ui/line';
import IssueTools from '../issue/issueTools';
import { IData, IIssue, ILabel, IParams, IProject, Istate } from '@/types';
import { IOptionItem } from '@/components/ui/select/select';
import Modal from '@/components/ui/modal';
import CreateState from '../layout/navbar/createState';
import CreateLabel from '../issue/createLabel';
import TiptapPopoverField from '@/components/ui/tiptap/tiptapPopoverField';
import SelectField from '@/components/ui/select/selectField';
import issueService from '@/services/issue-services';
import useSWR, { mutate } from 'swr';
import { STATES_KEY } from '@/apiKey/project';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import moment from 'moment';
import { NotiContext } from '@/components/ui/notification';
import { useParams, usePathname } from 'next/navigation';
import Swtich from '../ui/swtich/swtich';

interface IProps {
    isDraft: boolean;
    setDisableOverlay?: (a: boolean) => void;
    handleCloseModel: () => void;
    projects: IProject[];
    cycleId?: string;
    moduleId?: string;
    issue?: Partial<IIssue>;
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
    issue,
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
        reset,
    } = useForm<IForm>(
    {
        defaultValues:{
            desc: issue?.description_html,
            labels: issue?.labels?.map((e:any)=> e.id)||[],
            members: issue?.assignees?.map((e:any)=>e.id)||[],
            priority: issue?.priority,
            name:issue?.name,
            state:issue?.state_id,
            project:issue?.project_id,
            start_date: issue?.target_date,
            target_date: issue?.target_date,
        }
    }
    );

    const params = useParams<IParams>();

    const { data: states } = useSWR(
        () => STATES_KEY(watch('project') || projects[0].id),
        () => issueService.getState(watch('project')),
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
    const isUpdate = issue?.id;

    return (
        <div>
            <form
                id="create-issue-form"
                onSubmit={handleSubmit(async (data) => {
                    mutate(
                        pathName,
                        async (issues: any) => {
                            const dataIssue = {
                                name: data.name,
                                description_html: data.desc,
                                project_id: data.project || params.projectid ||projects[0].id,
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
                                workspace_id: info?.last_workspace_id,
                                is_draft: isDraft,
                                cycle_id: cycleId,
                                module_id: moduleId,
                            }
                            const issueResult = await( isUpdate ? issueService.updateIssue<IIssue>(issue?.id,dataIssue): issueService.createIssue<IIssue>(dataIssue));
                            if (issueResult) {
                                noti?.success(isUpdate?"Issue updated":'Issue created');
                                closeModal();
                                handleClearForm();
                                if(isUpdate){
                                    const issueNew = issues.map((e:IIssue)=>{
                                        if(e.id == issue.id){
                                            return {
                                                ...dataIssue,
                                                state_id: data.state,
                                                state: {
                                                    id: data.state,
                                                    name: states?.find((state) => state.id == data.state)?.name ||'',
                                                },
                                            }
                                        }else return e
                                    })
                                    return issueNew
                                }else{
                                    return [...issues, {
                                        ...dataIssue,
                                        state_id: data.state,
                                        state: {
                                            id: data.state,
                                            name: states?.find((e)=>e.id == data.state)?.name||'',
                                        },
                                    }];
                                }
                            } else {
                                noti?.error(
                                    'An error occurred, please try again later',
                                );
                            }
                        },
                        { revalidate: false },
                    );
                })}
                className="md:min-w-[700px] w-full md:max-h-[900px] pt-4"
            >
                <div className="px-6 flex select-none items-center">
                    <SelectField
                        control={control}
                        errors={errors}
                        name="project"
                        options={projectOptions}
                        isIconCheck
                        defaultValue={params.projectid || projectOptions[0].value as string}
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
                        defaultValue={issue?.description_html}
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
                    <div className="md:px-6 px-0 flex items-center justify-between py-2">
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
                                text={isUpdate ? 'Update issue':'Add issue'}
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
