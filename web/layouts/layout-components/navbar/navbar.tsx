'use client';
import React from 'react';
import Info from './info';
import FooterNav from './footerNav';
import { useSelector } from '@/store';
import { selectIsCollap } from '@/store/slices/layoutSlice/selectors';
import MenuMain from './menuMain';

const Navbar = () => {
    const isCollap = useSelector(selectIsCollap);

    return (
        <div
            className={`${
                isCollap ? 'w-width-menu-collap' : 'w-width-menu'
            } transition-all border-r border-theme-border-primary box-border flex flex-col overflow-hidden lg:border-r-0 lg:w-0`}
        >
            <Info />
            <MenuMain />
            <FooterNav />
        </div>
    );
};

export default Navbar;
