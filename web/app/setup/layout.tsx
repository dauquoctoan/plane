export default function DashboardLayout({
  children, // sẽ là một trang hoặc bố cục lồng nhau
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-full">{children}</div>;
}
