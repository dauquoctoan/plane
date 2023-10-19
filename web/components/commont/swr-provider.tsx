'use client';
import { ReactElement } from 'react';
import { SWRConfig } from 'swr'

export interface ISWRProvide{
    children: ReactElement
}

const SWRProvider = ({ children }:ISWRProvide) => {
    return <SWRConfig value={{
        onError: (error, key) => {
            if(error?.response?.status == 401){
                console.log(error);
            }
        }
    }}>{children}</SWRConfig>
};

export default SWRProvider;