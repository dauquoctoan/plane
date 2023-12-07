import React, { memo, useState } from 'react';
import ProjectMenuItem from '../../../components/layout/navbar/projectMenuItem';
import { selectIsCollap, useSelector } from '@/store';
import { HiPlusSm } from 'react-icons/hi';
import Modal from '@/components/ui/modal';
import AddProject from './addProject';
import projectService from '@/services/project-services';
import { IData, IProject } from '@/types';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import useSWR, { useSWRConfig } from 'swr';
import { LS_PROJECT_KEY } from '@/apiKey/project';
import { useNoti } from '@/hooks';

const MenuProject = () => {
    const noti = useNoti();
    const { mutate } = useSWRConfig();
    const isCollap = useSelector(selectIsCollap);
    const info = useSelector(selectInfo);
    const [open, setOpen] = useState(false);
    const { data } = useSWR<IData<IProject[]>>(
        LS_PROJECT_KEY(info?.last_workspace_id),
        () => {
            return projectService.getProjects<IData<IProject[]>>(
                info?.last_workspace_id || 0,
            );
        },
    );

    async function handleCreateProject(data: IProject) {
        mutate(
            LS_PROJECT_KEY(info?.last_workspace_id),
            async (project: any) => {
                const result = await projectService.createProject<IProject>(
                    data,
                );
                if (result) {
                    setOpen(false);
                    noti?.success('Create project success');
                    return [...project, result];
                }
                return [...project];
            },
            { revalidate: false },
        );
    }

    return (
        <>
            <div className="px-2 py-2">
                {!isCollap && (
                    <div className="font-bold text-sm flex items-center justify-between pr-2">
                        <h3>Projects</h3>
                        <HiPlusSm
                            onClick={() => {
                                setOpen(true);
                            }}
                            className={`cursor-pointer text-lg ${
                                open ? 'rotate-45' : ''
                            } transition-all`}
                        />
                    </div>
                )}
                <div>
                    {data &&
                        data.map((item, index) => (
                            <ProjectMenuItem
                                key={index}
                                idProject={item?.id}
                                emoji={item.emoji}
                                text={item?.name}
                            />
                        ))}
                </div>
            </div>
            <Modal
                isPadding={false}
                isOpen={open}
                handleClose={() => {
                    setOpen(false);
                }}
                content={
                    <AddProject
                        handleCreateProject={handleCreateProject}
                        setOpen={setOpen}
                    />
                }
            />
        </>
    );
};

export default memo(MenuProject);
