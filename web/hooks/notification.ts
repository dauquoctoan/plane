import { NotiContext } from '@/components/ui/notification';
import { useContext } from 'react';

export const useNoti = () => {
  return useContext(NotiContext);
};
