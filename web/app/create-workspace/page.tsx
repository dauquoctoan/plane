import Workspace from '@/components/setup/set-up-workspace';
import AuthProvider from '@/layouts/authprovider';
import React from 'react';

export default function Page() {
  return (
    <div className="w-full flex items-center justify-center h-[100vh]">
      <AuthProvider>
        <div className="w-full p-3 md:w-[800px] h-auto">
          <Workspace />
        </div>
      </AuthProvider>
    </div>
  );
}
