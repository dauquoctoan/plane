import React from 'react';
import MenuProject from '@/components/layout/navbar/menuProject';
import Menus from '@/components/layout/navbar/menus';

const MenuMain = () => {
    return (
        <div className="flex-1 overflow-y-auto hover-scroll overflow-x-hidden select-none">
            <Menus />
            <MenuProject />
        </div>
    );
};

export default MenuMain;
