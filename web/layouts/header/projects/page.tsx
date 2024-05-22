'use client'
import RoadMap from '@/components/module/roadMap'
import CreatePage from '@/components/projects/page/createPage'
import Button from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import { icons } from '@/constants'
import { modalSlice, useSelector } from '@/store'
import { selectOpenModalProjectPage } from '@/store/slices/modalSlice/selectors'
import React from 'react'
import { useDispatch } from 'react-redux'

const PageHeader = () => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectOpenModalProjectPage)
  return (
    <div className='flex justify-between'>
        <RoadMap roads={[{title:'Projects', icon:icons.project}]}/>
        <div>
            <Button 
                typeBTN='primary'
                onClick={()=>{
                    dispatch(modalSlice.actions.togleNewPage())
                }} text='Add page'
            />
        </div>
        <Modal
            isOpen={isShowModal}
            content={<CreatePage/>}
            handleClose={()=>{
                dispatch(modalSlice.actions.togleNewPage())
            }}
        />
    </div>
  )
}

export default PageHeader