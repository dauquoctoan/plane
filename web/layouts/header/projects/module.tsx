'use client';
import RoadMap from '@/components/module/roadMap';
import AddUpdateCycle from '@/components/projects/cycle/addUpdateCycle';
import AddModule from '@/components/projects/module/addModule';
import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { useCurentProject, useNoti } from '@/hooks';
import { modalSlice, useSelector } from '@/store';
import { selectDefaultValueModule, selectOpenModalNewModule } from '@/store/slices/modalSlice/selectors';
import { IParams } from '@/types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';

const ModuleHeader = () => {
    const params = useParams<IParams>();
    const noti = useNoti();
    const curentProject = useCurentProject();
    const showAddCycle = useSelector(selectOpenModalNewModule);
    const dispatch = useDispatch()
    const defaultValue = useSelector(selectDefaultValueModule)

    useEffect(() => {
        if (!curentProject?.name && showAddCycle) {
            noti?.error('Dont find project');
        }
    }, []);

    return (
        <div className="flex gap-2 items-center justify-between text-sm pr-2">
            <div className="flex items-center gap-2">
                <RoadMap
                    roads={[
                        {
                            title: curentProject?.name || '',
                            icon: <PiSuitcaseSimpleBold />,
                        },
                        {
                            title: 'Modules',
                        },
                    ]}
                />
            </div>
            <div>
                <Button
                    onClick={() => {
                        dispatch(modalSlice.actions.setModule(undefined))
                        dispatch(modalSlice.actions.togleProjetModule())
                    }}
                    typeBTN="primary"
                    text="Add module"
                />
            </div>
            {curentProject?.name && (
                <Modal
                    handleClose={() => {
                        dispatch(modalSlice.actions.togleProjetModule())
                    }}
                    isOpen={showAddCycle}
                    content={
                        <AddModule
                            id={params.projectid}
                            defaultValue={defaultValue}
                            name={curentProject?.name}
                            handleCloseModel={() => {
                                dispatch(modalSlice.actions.togleProjetModule())
                            }}
                        />
                    }
                />
            )}
        </div>
    );
};

export default ModuleHeader;
