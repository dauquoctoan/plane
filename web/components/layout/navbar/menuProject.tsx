import React, { memo, useState } from 'react';
import ProjectMenuItem from '../../../components/layout/navbar/projectMenuItem';
import { selectIsCollap, useSelector } from '@/store';
import { HiPlusSm } from 'react-icons/hi';
import Modal from '@/components/ui/modal';
import AddProject from './addProject';
import useSWR from 'swr';
import projectService from '@/services/project-services';
import { IProject } from '@/types';

const MenuProject = () => {
    const isCollap = useSelector(selectIsCollap);
    const [open, setOpen] =  useState(false);
    const { data } = useSWR<IProject[]|0>('project', (e:string)=> projectService.getProjects<0 | IProject[]>());

    return (
        <>
            <div className="px-2 py-2">
                {!isCollap && (
                    <div className="font-bold text-sm flex items-center justify-between pr-2"><h3>Projects</h3><HiPlusSm onClick={()=>{setOpen(true)}} className="cursor-pointer text-lg"/></div>
                )}
                <div>
                    {data && data.map((item, index) => (
                        <ProjectMenuItem key={index} idProject={item?.id} text={item?.name} />
                    ))}
                </div>
            </div>
            <Modal isPadding={false} isOpen={open} handleClose={()=>{setOpen(false)}} content={<AddProject setOpen={setOpen}/>}/>
        </>
    );
};

export default memo(MenuProject);
