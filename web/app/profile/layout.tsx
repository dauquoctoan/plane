import HeaderSetting from '@/components/profile/headerSetting';
import ProfileSettingLayout from '@/components/profile/profileSettingLayout';
import NotificationProvider from '@/components/ui/notification';
import AuthProvider from '@/layouts/authprovider';

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div className="md:flex relative">
          <ProfileSettingLayout />
          <div className="md:flex-1">
            <HeaderSetting />
            {children}
          </div>
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}
