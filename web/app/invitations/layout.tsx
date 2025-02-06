import AuthProvider from '@/layouts/authprovider';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
