import React, { createContext } from 'react';
import Navbar from './layout-components/navbar/navbar';
import Header from './layout-components/header/header';
import AuthProvider from './authprovider';
import NotificationProvider from '@/components/ui/notification';

interface IProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<IProps> = ({ children }) => {
    return (
        <AuthProvider>
            <NotificationProvider>
                <div className="relative w-full h-screen flex">
                    <Navbar />
                    <div className="relative flex-1 w-full h-screen overflow-auto">
                        <Header />
                        <div className="main">{children}</div>
                    </div>
                </div>
            </NotificationProvider>
        </AuthProvider>
    );
};

export default AuthLayout;
