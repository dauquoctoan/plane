import ProfileSettingLayout from '@/components/profile/profileSettingLayout';
import NotificationProvider from '@/components/ui/notification';
import AuthProvider from '@/layouts/authprovider';

export default function WorkspaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex p-11'>
            <div className='w-[250px]'>
                <div>Preference</div>
                <div className='flex flex-col gap-2'>
                    <div className='px-2 py-1 rounded hover:bg-color-special-secondary'>Theme</div>
                    <div className='px-2 py-1 rounded hover:bg-color-special-secondary'>Email</div>
                </div>
            </div>
            <div className='flex-1'>{children}</div>
        </div>
    )
}
