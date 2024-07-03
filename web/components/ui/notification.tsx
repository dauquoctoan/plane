'use client';
import React, { useEffect, useRef, createContext, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { IoIosWarning, IoMdCloseCircle } from 'react-icons/io';
import { IoCheckmarkCircle, IoInformationCircleSharp } from 'react-icons/io5';

export const NotiContext = createContext<INotiConext | undefined>(undefined);
interface options {
  duration: number;
  placement: IPlacement;
}

export interface INotiConext {
  error: IPushNoti;
  warning: IPushNoti;
  info: IPushNoti;
  success: IPushNoti;
}

type IPlacement = 'top' | 'left' | 'right';

type Itype = 'error' | 'warning' | 'info' | 'success';

type IPushNoti = (text: string, options?: options) => void;

interface INotification {
  children: ReactElement | string | ReactElement[];
}

const NotificationProvider: React.FC<INotification> = ({ children }) => {
  const refNoti = useRef<HTMLDivElement>(null);
  const lsIcons = {
    error:
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-color-error text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"></path></svg>',
    success:
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-color-success text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path></svg>',
    info: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-color-info text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm64 226H200v-32h44v-88h-32v-32h64v120h44z"></path></svg>',
    warning:
      '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-color-warning text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z"></path></svg>',
  };

  function handleAppenChild(
    name: string,
    type: Itype,
    option: options = { duration: 3, placement: 'top' }
  ) {
    const newItem = document.createElement('div');

    newItem.setAttribute(
      'class',
      `bg-theme-primary flex first:mt-4 z-50 items-center shadow-theme-primary px-2 rounded text-sm py-[4px] select-none animate-openNoti origin-top opacity-1 max-h-[100px] mt-2 transition-all duration-[.3s] ease-out`
    );

    newItem.innerHTML = `
            ${lsIcons[type]}
            <div class="ml-1">${name}</div>
        `;

    refNoti.current?.append(newItem);

    function handleRemoveItem() {
      newItem.setAttribute(
        'class',
        `bg-theme-primary flex first:mt-0 z-50 items-center shadow-theme-primary px-2 rounded text-sm py-0 select-none animate-closeNoti origin-top opacity-0 max-h-0 mt-0 transition-all duration-[.3s] ease-out`
      );
      setTimeout(() => {
        newItem.remove();
      }, 2000);
    }

    setTimeout(() => {
      handleRemoveItem();
    }, option.duration * 1000);
  }

  const handleCreateNotification: INotiConext = {
    info: (text: string, options?: options) => {
      handleAppenChild(text, 'info', options);
    },
    error: (text: string, options?: options) => {
      handleAppenChild(text, 'error', options);
    },
    warning: (text: string, options?: options) => {
      handleAppenChild(text, 'warning', options);
    },
    success: (text: string, options?: options) => {
      handleAppenChild(text, 'success', options);
    },
  };

  return (
    <NotiContext.Provider value={handleCreateNotification}>
      {children}
      {createPortal(
        <div
          className="w-full pointer-events-none absolute z-[999] top-0 left-[-100%] translate-x-[100%] right-0 flex flex-col items-center max-h-[100vh] overflow-y-hidden pb-7"
          ref={refNoti}
        ></div>,
        document.body
      )}
    </NotiContext.Provider>
  );
};

export default NotificationProvider;
