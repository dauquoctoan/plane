import RoadMap from '@/components/module/roadMap'
import Project from '@/components/projects/page'
import Header from '@/layouts/layout-components/header/header'
import React from 'react'
import { PiSuitcaseSimpleLight } from 'react-icons/pi'

const Page = () => {
  return (
    <div>
      <Header header={<RoadMap roads={[{title:'Project', icon:<PiSuitcaseSimpleLight/>}]}/>} />
      <Project/>
    </div>
  )
}

export default Page