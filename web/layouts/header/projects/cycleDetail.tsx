'use client';
import { SWR_KEY_PROJECTS } from '@/apiKey';
import CreateIssue from '@/components/module/createIssue';
import LayoutSwitch from '@/components/module/layoutSwitch';
import RoadMap from '@/components/module/roadMap';
import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { menuLayoutIssue } from '@/constants';
import { useCurentProject } from '@/hooks';
import projectService from '@/services/project-services';
import { issueViewSlice, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { IDisplayFilters, IParams, TLayout } from '@/types';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import lodash from 'lodash';

const CycleDetail = () => {
  const curentProject = useCurentProject();
  const [openModal, setOpenModal] = useState(false);
  const info = useSelector(selectInfo);
  const params = useParams<IParams>();
  const dispatch = useDispatch();

  const { data: projects } = useSWR(
    SWR_KEY_PROJECTS(info?.last_workspace_id),
    () => projectService.getProjects(info?.last_workspace_id || '')
  );

  const { data } = useSWR('cycle_user_properties', () => {
    return projectService.getCycleUserProperties(
      params.projectid,
      params.cycleid
    );
  });

  let changeLayout = lodash.debounce(function (
    id: string,
    viewProps: IDisplayFilters
  ) {
    projectService.updateCycleUserProperties(id, {
      display_filters: viewProps,
    });
  }, 1000);

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
      <div className="items-center gap-4 hidden md:flex">
        {data && (
          <LayoutSwitch
            defaultValue={data.display_filters.layout}
            menuItems={menuLayoutIssue}
            onChange={async (e: TLayout) => {
              dispatch(issueViewSlice.actions.setLayoutProjectView(e));

              changeLayout(data.id, {
                ...data.display_filters,
                layout: e,
              });
            }}
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
    </div>
  );
};

export default CycleDetail;
