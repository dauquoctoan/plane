'use client';
import RoadMap from '@/components/module/roadMap';
import AddCycle from '@/components/projects/cycle/addCycle';
import AddModule from '@/components/projects/module/addModule';
import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { useCurentProject, useNoti } from '@/hooks';
import { IParams } from '@/types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

const ModuleHeader = () => {
    const [showAddCycle, setShowAddCycle] = useState(false);
    const params = useParams<IParams>();
    const noti = useNoti();
    const curentProject = useCurentProject();

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
                        setShowAddCycle(true);
                    }}
                    typeBTN="primary"
                    text="Add module"
                />
            </div>
            {curentProject?.name && (
                <Modal
                    handleClose={() => {
                        setShowAddCycle(false);
                    }}
                    isOpen={showAddCycle}
                    content={
                        <AddModule
                            id={params.projectid}
                            name={curentProject?.name}
                            handleCloseModel={() => {
                                setShowAddCycle(false);
                            }}
                        />
                    }
                />
            )}
        </div>
    );
};

export default ModuleHeader;
