'use client';
import { LS_PROJECT_KEY } from '@/apiKey';
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
import useSWR from 'swr';
import lodash from 'lodash';
import { useDispatch } from 'react-redux';

const ModuleDetail = () => {
  const curentProject = useCurentProject();
  const [openModal, setOpenModal] = useState(false);
  const info = useSelector(selectInfo);
  const params = useParams<IParams>();
  const dispatch = useDispatch();

  const { data: projects } = useSWR(
    LS_PROJECT_KEY(info?.last_workspace_id),
    () => projectService.getProjects(info?.last_workspace_id || '')
  );

  const { data } = useSWR('module_user_properties', () => {
    return projectService.getModuleUserProperties(
      params.projectid,
      params.moduleid
    );
  });

  let changeLayout = lodash.debounce(function (
    id: string,
    viewProps: IDisplayFilters
  ) {
    projectService.updateModuleUserProperties(id, {
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
              title: 'Module',
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
              moduleId={params.moduleid}
              handleCloseModel={() => {
                setOpenModal(false);
              }}
              isDraft={false}
            />
          }
        />
      )}

      <div className="hidden md:flex items-center gap-4">
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

export default ModuleDetail;
