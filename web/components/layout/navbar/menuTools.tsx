import React, { useState } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import { BsChevronCompactDown } from 'react-icons/bs';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import Popover from '@/components/ui/popover';
import { selectIsCollap, useSelector } from '@/store';
import Modal from '@/components/ui/modal';
import CreateIssue from '../../issue/createIssue';
import useSWR from 'swr';
import { IData, IProject } from '@/types';
import projectService from '@/services/project-services';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { LS_PROJECT_KEY } from '@/apiKey/project';
import { useNoti } from '@/hooks';

interface IPopsMenuTools {
    setModalState: (i: IStateModal) => void;
}

interface IStateModal {
    isShow: boolean;
    isDraft: boolean;
}

const DrafIssue: React.FC<Omit<IPopsMenuTools, 'isOpenModal'>> = ({
    setModalState,
}) => {
    return (
        <div
            onClick={() => {
                setModalState({ isDraft: true, isShow: true });
            }}
            className='flex after:content-[""] after:absolute after:bottom-[100%] after:right-0 after:h-[5px] after:left-0 after:bg-transparent invisible flex-1 items-center border rounded-lg justify-between absolute top-[100%] mt-1 left-0 right-0 px-1 py-2 group-hover:visible group-hover:animate-modalContentPopup shadow-theme-primary bg-theme-primary'
        >
            <div className="flex items-center px-2">
                <HiOutlinePencilSquare />
                <span className="ml-1">Last Drafted Issue</span>
            </div>
        </div>
    );
};

const MenuTools = () => {
    const info = useSelector(selectInfo);
    const noti = useNoti();
    const isCollap = useSelector(selectIsCollap);
    const [disableOverlay, setDisableOverlay] = useState(false);
    const { data: projects } = useSWR<IData<IProject[]>>(
        LS_PROJECT_KEY(info?.last_workspace_id),
        () =>
            projectService.getProjects<IData<IProject[]>>(
                info?.last_workspace_id || 0,
            ),
    );

    const [isOpenModal, setOpenModal] = useState({
        isShow: false,
        isDraft: false,
    });

    async function handleCheckValidCreateIssue(payload: any) {
        try {
            if (projects && projects.length > 0) {
                setOpenModal(payload);
            } else {
                noti?.warning(
                    'Your work does not contain any projects, please create a project to implement this feature.',
                );
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {isCollap ? (
                <div
                    className={`flex p-3 cursor-pointer flex-col gap-2 box-border`}
                >
                    <Popover
                        onClick={() => {
                            handleCheckValidCreateIssue({
                                isDraft: false,
                                isShow: true,
                            });
                        }}
                        isHover
                        content={
                            <div
                                onClick={() => {
                                    handleCheckValidCreateIssue({
                                        isDraft: true,
                                        isShow: true,
                                    });
                                }}
                                className="flex items-center cursor-pointer select-none py-2 bg-theme-primary"
                            >
                                <HiOutlinePencilSquare />
                                <span className="ml-1">Last Drafted Issue</span>
                            </div>
                        }
                        className="relative group flex items-center justify-center w-10 h-10 hover:bg-theme-secondary rounded"
                    >
                        <HiOutlinePencilSquare />
                    </Popover>
                    <div className="flex items-center justify-center w-10 h-10 hover:bg-theme-secondary rounded">
                        <TfiSearch />
                    </div>
                </div>
            ) : (
                <div className={`flex p-3 cursor-pointer gap-2 box-border`}>
                    <div
                        className={`flex flex-1 items-center group min-h-[40px] border rounded-lg justify-between relative box-border`}
                    >
                        <div
                            onClick={() => {
                                handleCheckValidCreateIssue({
                                    isDraft: false,
                                    isShow: true,
                                });
                            }}
                            className="flex items-center px-2"
                        >
                            <HiOutlinePencilSquare className="w-[16px] h-[16px]" />
                            <span className="ml-1 whitespace-nowrap">
                                New issue
                            </span>
                        </div>
                        <div className="border-l h-full w-9 flex items-center justify-center">
                            <BsChevronCompactDown className="group-hover:rotate-180 transition-all ease-out" />
                        </div>
                        {/* hover */}
                        <DrafIssue setModalState={setOpenModal} />
                    </div>
                    <div className="w-10 h-10 border flex items-center justify-center rounded-lg text-sm font-bold">
                        <TfiSearch />
                    </div>
                </div>
            )}
            {projects && projects.length > 0 && (
                <Modal
                    isPadding={false}
                    mrTop={130}
                    isOpen={isOpenModal.isShow}
                    disableClickOverlay={disableOverlay}
                    handleClose={() => {
                        setOpenModal({ ...isOpenModal, isShow: false });
                    }}
                    content={
                        <CreateIssue
                            projects={projects}
                            setDisableOverlay={setDisableOverlay}
                            handleCloseModel={() => {
                                setOpenModal({ ...isOpenModal, isShow: false });
                            }}
                            isDraft={isOpenModal.isDraft}
                        />
                    }
                />
            )}
        </>
    );
};

export default MenuTools;
