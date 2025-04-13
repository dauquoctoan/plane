import React, { ReactElement } from 'react';
interface IProps {
  children?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'circle' | 'square';
}

const Avatar: React.FC<IProps> = ({
  children,
  size = 'lg',
  type = 'square',
}) => {
  const styleConfigs = {
    sm: 'w-[19px] h-[19px] text-[12px]',
    md: 'w-[22px] h-[22px] text-[12px]',
    lg: 'w-[35px] h-[35px] text-sm',
    xl: 'w-[60px] h-[60px] text-sm',
  };
  const currentStyle = styleConfigs[size];

  return (
    <div
      className={`flex items-center justify-center ${
        type == 'square' ? 'rounded' : 'rounded-full'
      } bg-slate-800 select-none text-center text-theme-secondary ${currentStyle}`}
    >
      {(children && children.length > 0 && children[0]?.toUpperCase()) || ''}
    </div>
  );
};

export default Avatar;
