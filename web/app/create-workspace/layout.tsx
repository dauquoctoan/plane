import GotBack from '@/components/gotBack';

export default function CreaetWorkspace({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <div className="h-10 py-6 px-5">
        <GotBack />
      </div>
      {children}
    </div>
  );
}
