import RoadMap from '@/components/module/roadMap';
import Button from '@/components/ui/button';
import ViewsHeader from '@/layouts/header/projects/view';
import Header from '@/layouts/layout-components/header/header';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header header={<ViewsHeader />} />
      <div className="main">{children}</div>
    </>
  );
}
