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
                <div className='flex'>
                    <ProfileSettingLayout />
                    <div className='flex-1'>{children}</div>
                </div>
            </NotificationProvider>
        </AuthProvider>
    )
}
