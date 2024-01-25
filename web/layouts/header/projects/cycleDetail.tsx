'use client';
import { LS_PROJECT_KEY } from '@/apiKey';
import CreateIssue from '@/components/issue/createIssue';
import RoadMap from '@/components/module/roadMap';
import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { useCurentProject } from '@/hooks';
import projectService from '@/services/project-services';
import { useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IData, IParams, IProject } from '@/types';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import useSWR from 'swr';

const CycleDetail = () => {
    const curentProject = useCurentProject();
    const [openModal, setOpenModal] = useState(false);
    const info = useSelector(selectInfo);
    const params = useParams<IParams>();

    const { data: projects } = useSWR<IData<IProject[]>>(
        LS_PROJECT_KEY(info?.last_workspace_id),
        () =>
            projectService.getProjects<IData<IProject[]>>(
                info?.last_workspace_id || '',
            ),
    );

    return (
        <div className="flex justify-between items-center px-2">
            <div>
                <RoadMap
                    roads={[
                        {
                            title: curentProject?.name || '',
                            icon: <PiSuitcaseSimpleBold />,
                        },
                        {
                            title: 'Cycles',
                        },
                    ]}
                />
            </div>
            {projects && (
                <Modal
                    isOpen={openModal}
                    handleClose={() => {
                        setOpenModal(false);
                    }}
                    content={
                        <CreateIssue
                            projects={projects}
                            cycleId={params.cycleid}
                            handleCloseModel={() => {
                                setOpenModal(false);
                            }}
                            isDraft={false}
                        />
                    }
                />
            )}

            <Button
                text="Add issue"
                typeBTN="primary"
                className="text-sm"
                onClick={() => {
                    setOpenModal(true);
                }}
            />
        </div>
    );
};

export default CycleDetail;
