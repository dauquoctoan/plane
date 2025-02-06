'use client';
import React from 'react';
import RoadMap, { RoeadItem } from '../module/roadMap';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { usePathname } from 'next/navigation';

const Header = () => {
  const path = usePathname();  const menuItem = path.split('/').pop() || '';

  return (
    <div>
      <RoadMap
        roads={[
          {
            title: 'Settings',
            icon: <PiSuitcaseSimpleBold />,
          },
          {
            title: menuItem == 'settings' ? '' : menuItem,
          },
        ].filter(e => e.title)}
      />
    </div>
  );
};

export default Header;
