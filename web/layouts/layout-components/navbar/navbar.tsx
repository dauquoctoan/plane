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
      className={`custom-height overflow-x-hidden absolute md:static z-[100] md:border-r bg-theme-primary transition-all border-theme-border-primary box-border flex flex-col overflow-hidden left-0 top-0 ${
        isCollap
          ? 'w-0 md:w-width-menu-collap border-r-0'
          : 'w-width-menu border-r'
      }`}
    >
      <Info />
      <MenuMain />
      <FooterNav />
    </div>
  );
};

export default Navbar;
