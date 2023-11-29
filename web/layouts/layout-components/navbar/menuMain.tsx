import React from 'react';
import MenuProject from '@/components/layout/navbar/menuProject';
import Menus from '@/components/layout/navbar/menus';
import MenuTools from '@/components/layout/navbar/menuTools';

const MenuMain = () => {
    return (
        <div className="flex-1 overflow-y-auto hover-scroll overflow-x-hidden select-none">
            <MenuTools/>
            <Menus />
            <MenuProject />
        </div>
    );
};

export default MenuMain;
