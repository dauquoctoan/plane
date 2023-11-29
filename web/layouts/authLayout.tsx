'use client';
import React, { createContext } from 'react';
import Navbar from './layout-components/navbar/navbar';
import Header from './layout-components/header/header';
import AuthProvider from './authprovider';

interface IProps {
    children: React.ReactNode;
}

const ProductContext = createContext([]);

const AuthLayout: React.FC<IProps> = ({ children }) => {
    return (
        // <ProductContext.Provider value={}>
        <AuthProvider>
            <div className="relative w-full h-screen flex">
                <Navbar />
                <div className="relative flex-1 w-full h-screen overflow-auto">
                    <Header />
                    <div className="main">{children}</div>
                </div>
            </div>
        </AuthProvider>
        // </ProductContext.Provider>
    );
};

export default AuthLayout;
