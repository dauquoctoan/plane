import Dashboard from '@/components/dashboard/page';
import RoadMap from '@/components/module/roadMap';
import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';
import { MdOutlineWindow } from 'react-icons/md';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <MainWorkspaceLayout
      header={
        <RoadMap
          roads={[
            {
              title: 'Dashboard',
              icon: <MdOutlineWindow />,
            },
          ]}
        />
      }
    >
      <div className="w-full p-8 box-border">
        <Dashboard />
      </div>
    </MainWorkspaceLayout>
  );
}
