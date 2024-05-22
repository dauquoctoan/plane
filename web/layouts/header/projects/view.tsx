'use client'
import CreateViewIssue from '@/components/module/createViewIssue';
import RoadMap from '@/components/module/roadMap';
import Button from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import { icons } from '@/constants';
import { modalSlice, useSelector } from '@/store';
import { selectOpenModalProjectViews } from '@/store/slices/modalSlice/selectors';
import { IParams } from '@/types';
import { useParams } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';

const ViewsHeader = () => {
    const dispatch = useDispatch();
    const isOpenModal = useSelector(selectOpenModalProjectViews);
    const params = useParams<IParams>();

    function HandleCloseModal(is:boolean){
        dispatch(modalSlice.actions.togleProjectViews())
    }
    
  const roads =  [{title:'Views', icon: icons.view}, ...(params.projectviewid?[{title:'Views Detail', icon: icons.viewDetail}]:[])];

  return (
    <div className='flex justify-between items-center pr-2'>
        <RoadMap roads={roads}/>
        <Button onClick={()=>{
            dispatch(modalSlice.actions.togleProjectViews())
        }}
            text="Add View"
            typeBTN="primary"
        />
        <Modal
            isOpen={isOpenModal}
            content={
                <CreateViewIssue
                    setIsOpenCreateIssue={HandleCloseModal}
                    projectId={params.projectid}
                />
            }
            handleClose={() => {
                dispatch(modalSlice.actions.togleProjectViews())
            }}
        />
    </div>
  )
}

export default ViewsHeader;