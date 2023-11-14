'use client';
import React, { useState } from 'react';
import Modal from '@/components/ui/modal';
import MenuProject from '@/components/layout/navbar/menuProject';
import Menus from '@/components/layout/navbar/menus';
import MenuTools from '@/components/layout/navbar/menuTools';
import Issue from '@/components/layout/navbar/issue';

const MenuMain = () => {
    const [isOpenModal, setOpenModal] = useState({
        isShow: false,
        isDraft: false,
    });

    return (
        <div className="flex-1 overflow-y-auto overflow-x-hidden select-none">
            <MenuTools setModalState={setOpenModal} />
            <Menus />
            <MenuProject />
            <Modal
                isPadding={false}
                mrTop={130}
                isOpen={isOpenModal.isShow}
                handleClose={() => {
                    setOpenModal({ ...isOpenModal, isShow: false });
                }}
                content={<Issue isDraft={isOpenModal.isDraft} />}
            />
        </div>
    );
};

export default MenuMain;
