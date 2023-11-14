import Setup from './setup';
import AuthProvider from '@/layouts/authprovider';

export default function GoToPlane() {
    return (
        <main className="w-full h-full flex flex-col box-border relative">
            <AuthProvider>
                <Setup />
            </AuthProvider>
        </main>
    );
}
