import React from 'react'
import Header from '@/layouts/layout-components/header/header';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';
import { icons } from '@/constants';
import RoadMap from '@/components/module/roadMap';
import Pages from '@/components/projects/page/page';
import PageHeader from '@/layouts/header/projects/page';

const Page = () => {
  return (
    <>
        <Header
            header={
                <PageHeader/>
            }
        />
        <div className="main">
          <Pages/>
        </div>
    </>
  )
}

export default Page