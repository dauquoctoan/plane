import React from 'react';
import RangeLoading from './rangeloading';
import { VscLoading } from 'react-icons/vsc';

interface Iprops {
  children: React.ReactNode;
}

const LoadingProvider: React.FC<Iprops> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <RangeLoading />
      <VscLoading />
      {children}
    </div>
  );
};

export default LoadingProvider;
