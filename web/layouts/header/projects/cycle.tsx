'use client';
import AddUpdateCycle from '@/components/projects/cycle/addUpdateCycle';
import RoadMap from '@/components/module/roadMap';
import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { useCurentProject, useNoti } from '@/hooks';
import { modalSlice, useSelector } from '@/store';
import {
  selectDefaultValueCycle,
  selectOpenModalNewCycle,
} from '@/store/slices/modalSlice/selectors';
import { IParams } from '@/types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';

const CycleHeader = () => {
  const dispatch = useDispatch();
  const showAddCycle = useSelector(selectOpenModalNewCycle);
  const params = useParams<IParams>();
  const noti = useNoti();
  const curentProject = useCurentProject();
  const defaultValue = useSelector(selectDefaultValueCycle);

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
              title: 'Cycles',
            },
          ]}
        />
      </div>
      <div>
        <Button
          onClick={() => {
            dispatch(modalSlice.actions.togleProjetCycle());
          }}
          typeBTN="primary"
          text="Add cycle"
        />
      </div>
      {curentProject?.name && (
        <Modal
          handleClose={() => {
            dispatch(modalSlice.actions.setCycle(undefined));
            dispatch(modalSlice.actions.togleProjetCycle());
          }}
          isOpen={showAddCycle}
          content={
            <AddUpdateCycle
              id={params.projectid}
              name={curentProject?.name}
              defaultValues={defaultValue}
              handleCloseModel={() => {
                dispatch(modalSlice.actions.setCycle(undefined));
                dispatch(modalSlice.actions.togleProjetCycle());
              }}
            />
          }
        />
      )}
    </div>
  );
};

export default CycleHeader;
