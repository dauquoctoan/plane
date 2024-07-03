import { Spinner } from '@/components/ui/loading/Spinner';
import AuthLayout from '@/layouts/authLayout';
import AuthProvider from '@/layouts/authprovider';
import MainWorkspaceLayout from '@/layouts/mainWorkspaceLayout';
import dynamic from 'next/dynamic';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
