import { FC } from 'react';

export interface IPropsDefaultImage {
  type: 'issue' | 'state' | 'priority';
}

const DefaultImage: FC<IPropsDefaultImage> = ({ type }) => {
  const images: { [e: string]: string } = {
    issue: '/upcoming-issues.svg',
    state: '/issues-by-state.svg',
    priority: '/issues-by-priority.svg',
  };

  return (
    <div className="h-80 flex items-center justify-center">
      <img src={images[type]} />
    </div>
  );
};

export default DefaultImage;
