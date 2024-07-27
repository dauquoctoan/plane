import React, { useState } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import { BsChevronCompactDown } from 'react-icons/bs';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { modalSlice, selectIsCollap, useSelector } from '@/store';
import Modal from '@/components/ui/modal';
import CreateIssue from '../../module/createIssue';
import useSWR from 'swr';
import projectService from '@/services/project-services';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import { SWR_KEY_PROJECTS } from '@/apiKey';
import { useNoti } from '@/hooks';
import Search from './search';
import {
  selectDefaultValueIssue,
  selectOpenModalNewIssue,
} from '@/store/slices/modalSlice/selectors';
import { useDispatch } from 'react-redux';
import Popover from '@/components/ui/popover';

interface IStateModal {
  isShow: boolean;
  isDraft: boolean;
}

const DrafIssue = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(
          modalSlice.actions.togleNewIssue({ isDraft: true, isShow: true })
        );
        dispatch(modalSlice.actions.setIssue());
      }}
      className='flex after:content-[""] after:absolute after:bottom-[100%] after:right-0 after:h-[5px] after:left-0 after:bg-transparent invisible flex-1 items-center border rounded-lg justify-between absolute top-[100%] mt-1 left-0 right-0 px-1 py-2 group-hover:visible group-hover:animate-modalContentPopup shadow-theme-primary bg-theme-primary'
    >
      <div className="flex text-sm items-center px-2">
        <HiOutlinePencilSquare />
        <span className="ml-1">Last Drafted Issue</span>
      </div>
    </div>
  );
};

const MenuTools = () => {
  const info = useSelector(selectInfo);
  const notification = useNoti();
  const isCollapse = useSelector(selectIsCollap);
  const [disableOverlay, setDisableOverlay] = useState(false);
  const dispatch = useDispatch();
  const [isOpenSearch, setOpenSearch] = useState(false);
  const showModalIssue = useSelector(selectOpenModalNewIssue);
  const issue = useSelector(selectDefaultValueIssue);

  const { data: projects } = useSWR(
    SWR_KEY_PROJECTS(info?.last_workspace_id),
    () => projectService.getProjects(info?.last_workspace_id || '')
  );

  async function handleCheckValidCreateIssue(payload: any) {
    try {
      if (projects && projects.length > 0) {
        dispatch(modalSlice.actions.togleNewIssue(payload));
      } else {
        notification?.warning(
          'Your work does not contain any projects, please create a project to implement this feature.'
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isCollapse ? (
        <div className={`flex py-3 cursor-pointer flex-col gap-2 box-border`}>
          <Popover
            isHover
            placement='bottomLeft'
            content={
              <div
                onClick={(e) => {
                  handleCheckValidCreateIssue({
                    isDraft: true,
                    isShow: true,
                  });
                }}
                className="text-sm flex w-fit items-center cursor-pointer select-none py-2 bg-theme-primary"
              >
                <HiOutlinePencilSquare />
                <span className="ml-1">Last Drafted Issue</span>
              </div>
            }
          >
            <div onClick={(e) => {
              handleCheckValidCreateIssue({
                isDraft: false,
                isShow: true,
              });
            }} className="flex items-center justify-center w-10 h-10 hover:bg-theme-secondary rounded">
              <HiOutlinePencilSquare />
            </div>
          </Popover>
          <div
            onClick={() => {
              setOpenSearch(true);
            }}
            className="flex items-center justify-center w-10 h-10 hover:bg-theme-secondary rounded"
          >
            <TfiSearch />
          </div>
        </div>
      ) : (
        <div className={`flex py-3 cursor-pointer gap-2 box-border`}>
          <div
            className={`flex flex-1 items-center group min-h-[40px] border rounded-lg justify-between relative box-border`}
          >
            <div
              onClick={() => {
                handleCheckValidCreateIssue({
                  isDraft: false,
                  isShow: true,
                });
                dispatch(modalSlice.actions.setIssue());
              }}
              className="flex items-center px-2"
            >
              <HiOutlinePencilSquare className="w-[16px] h-[16px]" />
              <span className="ml-1 whitespace-nowrap text-sm">New issue</span>
            </div>
            <div className="border-l h-full w-9 flex items-center justify-center">
              <BsChevronCompactDown className="group-hover:rotate-180 transition-all ease-out" />
            </div>
            {/* hover */}
            <DrafIssue />
          </div>
          <div
            onClick={() => {
              setOpenSearch(true);
            }}
            className="w-10 h-10 border flex items-center justify-center rounded-lg text-sm font-bold"
          >
            <TfiSearch />
          </div>
        </div>
      )}
      {projects && projects.length > 0 && (
        <Modal
          isPadding={false}
          isOpen={showModalIssue.isShow}
          disableClickOverlay={disableOverlay}
          handleClose={() => {
            dispatch(
              modalSlice.actions.togleNewIssue({
                ...showModalIssue,
                isShow: false,
              })
            );
          }}
          content={
            <CreateIssue
              issue={issue}
              projects={projects}
              setDisableOverlay={setDisableOverlay}
              handleCloseModel={() => {
                dispatch(
                  modalSlice.actions.togleNewIssue({
                    ...showModalIssue,
                    isShow: false,
                  })
                );
              }}
              isDraft={showModalIssue.isDraft}
            />
          }
        />
      )}
      <Modal
        mrTop={100}
        isPadding={false}
        isOpen={isOpenSearch}
        handleClose={() => {
          setOpenSearch(false);
        }}
        content={<Search />}
      />
    </>
  );
};

export default MenuTools;
