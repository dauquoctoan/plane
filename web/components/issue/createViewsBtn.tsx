'use client';
import React, { useState } from 'react';
import { LiaPlusSolid } from 'react-icons/lia';
import Modal from '../ui/modal';
import CreateViewIssue from './createViewIssue';

const CreateViewsBtn = () => {
    const [isOpenCreateIssue, setIsOpenCreateIssue] = useState(false);
    return (
        <div
            onClick={() => {
                setIsOpenCreateIssue(true);
            }}
            className="rounded-full hover:bg-color-special-secondary cursor-pointer p-[7px]"
        >
            <LiaPlusSolid className="text-color-special-primary" />
            <Modal
                isOpen={isOpenCreateIssue}
                content={<CreateViewIssue />}
                handleClose={() => {
                    setIsOpenCreateIssue(false);
                }}
            />
        </div>
    );
};

export default CreateViewsBtn;
