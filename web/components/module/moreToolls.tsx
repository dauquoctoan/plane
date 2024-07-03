import React, { FC } from 'react';
import Confirm from '../ui/confirm';

export interface IPropsMoreTools {
  data: {
    text?: string;
    icon: React.ReactElement;
    render?: () => React.ReactElement;
    cb?: () => void;
  }[];
}

export interface IItem {
  text?: string;
  icon: React.ReactElement;
  render?: () => React.ReactElement;
  cb?: () => void;
}

const MoreToolls: FC<IPropsMoreTools> = ({ data }) => {
  return (
    <div className="flex flex-col gap-1 text-[13px] min-w-[150px]">
      {data.map((e, i) => {
        return e.text?.toLowerCase().includes('delete') ? (
          <Confirm
            title="Delete the"
            desc="Are you sure to delete this item?"
            onConfirm={() => {
              e.cb && e.cb();
            }}
          >
            <Item render={e.render} icon={e.icon} text={e.text} key={i} />
          </Confirm>
        ) : (
          <Item
            icon={e.icon}
            render={e.render}
            text={e.text}
            cb={e.cb}
            key={i}
          />
        );
      })}
    </div>
  );
};

const Item: FC<IItem> = ({ icon, text, cb, render }) => {
  return (
    <div
      onClick={() => {
        cb && cb();
      }}
      className="flex text-xs gap-2 items-center cursor-pointer rounded hover:bg-theme-secondary px-2 py-1 select-none"
    >
      {icon}
      {(render && render()) || <div>{text}</div>}
    </div>
  );
};

export default MoreToolls;
