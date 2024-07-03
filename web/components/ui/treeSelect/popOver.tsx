import { ReactElement, Ref, forwardRef, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { FaCaretRight } from 'react-icons/fa';
import { IItemSelected } from './treeSelect';

export interface IPopOver
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data: IItemData[];
  isMutiple?: boolean;
  handleSelect: (item: IItemData) => void;
  selected: IItemSelected;
}

export interface IItemData {
  value?: string;
  title: string;
  icon?: ReactElement;
  children?: IItemData[];
  render?: () => ReactElement;
  disable?: boolean;
}

const ItemTreeSlect = ({
  dataItem,
  handleSelect,
  selected,
}: {
  dataItem: IItemData;
  handleSelect: (item: IItemData) => void;
  selected: IItemSelected;
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="select-none text-sm mb-1">
      <div className="flex gap-1 items-center">
        <div className="w-5 cursor-pointer">
          {dataItem && dataItem?.children && dataItem?.children?.length > 0 && (
            <FaCaretRight
              className={`transition-all ${show ? 'rotate-90' : ''}`}
              onClick={(e: any) => {
                setShow(!show);
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          )}
        </div>
        <div
          onClick={() => {
            !dataItem.disable && dataItem.value && handleSelect(dataItem);
          }}
          className={`px-2 flex justify-between items-center ${
            !dataItem.disable && dataItem.value
              ? 'hover:bg-theme-secondary cursor-pointer'
              : ''
          }  mt-1 rounded w-full ${
            dataItem.value && selected[dataItem.value]
              ? 'bg-color-special-secondary'
              : 'bg-theme-primary'
          }`}
        >
          {(dataItem.render && dataItem.render()) || dataItem.title}
          {dataItem.value && selected[dataItem.value] && <BsCheck2 />}
        </div>
      </div>
      {show &&
        dataItem &&
        dataItem?.children &&
        dataItem?.children?.length > 0 && (
          <div className="ml-3">
            <Popover
              selected={selected}
              handleSelect={handleSelect}
              data={dataItem.children}
            />
          </div>
        )}
    </div>
  );
};

const Popover = forwardRef(function popOver(
  props: IPopOver,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div {...props} ref={ref}>
      {props.data.map((item, index) => {
        return (
          <ItemTreeSlect
            key={index}
            selected={props.selected}
            handleSelect={props.handleSelect}
            dataItem={item}
          />
        );
      })}
    </div>
  );
});

export default Popover;
