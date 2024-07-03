import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import IssueDragItem from './issueDragItem';
import MoreItem from './moreItem';
import ItemDeleteIssue from './itemDeleteIssue';
import { IIssue } from '@/types';
import issueService from '@/services/issue-services';
import { useNoti } from '@/hooks';
import { usePathname } from 'next/navigation';

export const sortableOptions = {
  animation: 150,
  fallbackOnBody: false,
  swapThreshold: 0.65,
  ghostClass: 'ghost',
  group: 'shared',
  forceFallback: false,
};

export interface IPropsBlockWrapper {
  block: IBoardIssues;
  blockIndex: number[];
  setBlocks: React.Dispatch<React.SetStateAction<IBoardIssues[]>>;
  refRemove?: React.RefObject<HTMLDivElement>;
  setShowTrash?: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdateWhenChange?: (index: number, id: string) => void;
  parentId?: string;
  blocks: IBoardIssues[];
}

export interface IBoardIssues {
  id: string;
  icon?: ReactElement;
  title: string;
  type: 'container' | 'delete' | 'item';
  width?: number;
  children?: IBoardIssues[];
  data?: IIssue;
}

export default function KanbanBoard({ data }: { data: IBoardIssues[] }) {
  const itemDelete: IBoardIssues = {
    id: '1',
    title: '',
    type: 'delete',
    children: [],
  };

  const pathName = usePathname();

  const [blocks, setBlocks] = useState<IBoardIssues[]>([itemDelete]);
  const refRemove = useRef<HTMLDivElement>(null);
  const [showTrash, setShowTrash] = useState(false);
  const noti = useNoti();

  useEffect(() => {
    setBlocks([itemDelete, ...data]);
  }, [data]);

  async function handleUpdateWhenChange(index: number, idState: string) {
    const indexID = blocks.findIndex(e => e.id === idState);
    setTimeout(async () => {
      if (indexID && indexID > -1) {
        const childrent = blocks[indexID].children;
        if (childrent) {
          const result = await issueService.updateIssue(childrent[index].id, {
            state_id: idState,
          });
          if (result) noti?.success('Update state success');
          else noti?.error('Update state error');
        }
      }
    }, 100);
  }

  return (
    <div>
      <ItemDeleteIssue
        noti={noti}
        pathname={pathName}
        block={blocks}
        showTrash={showTrash}
        ref={refRemove}
      />
      <ReactSortable
        list={blocks}
        setList={setBlocks}
        {...sortableOptions}
        className="flex gap-7 w-full overflow-x-auto hover-scroll"
        multiDrag
        scroll={true}
        scrollSensitivity={0}
        bubbleScroll
        disabled
        animation={2}
        scrollSpeed={50}
      >
        {blocks.map((block, blockIndex) => (
          <BlockWrapper
            blocks={blocks}
            key={block.id}
            block={block}
            blockIndex={[blockIndex]}
            setBlocks={setBlocks}
            refRemove={refRemove}
            handleUpdateWhenChange={handleUpdateWhenChange}
            setShowTrash={setShowTrash}
          />
        ))}
      </ReactSortable>
    </div>
  );
}

function Container({
  block,
  blockIndex,
  setBlocks,
  blocks,
  refRemove,
  setShowTrash,
  handleUpdateWhenChange,
}: IPropsBlockWrapper) {
  return (
    <>
      <div className="text-base font-medium flex items-center gap-2 pl-3">
        <div>{block.icon}</div>
        <div>{block.title}</div>
      </div>
      <ReactSortable
        id={block.id}
        className={`block p-4 min-w-[450px] rounded bg-theme-secondary`}
        key={block.id}
        onMove={(evt: any) => {
          if (evt.to.classList.contains('blockTrack')) {
            refRemove && refRemove.current?.classList.add('shadow-2xl');
            refRemove && refRemove.current?.classList.add('shadow-red-500');
          }
          return 1;
        }}
        onEnd={evt => {
          block.id !== evt.to.id &&
            handleUpdateWhenChange &&
            handleUpdateWhenChange(evt.newIndex as any, evt.to.id);
          setShowTrash && setShowTrash(false);
        }}
        list={block.children}
        onStart={evt => {
          setShowTrash && setShowTrash(true);
          return 1;
        }}
        setList={currentList => {
          setBlocks(sourceList => {
            const tempList = [...sourceList];
            tempList[blockIndex[0]].children = currentList;
            return tempList;
          });
        }}
        multiDrag
        {...sortableOptions}
      >
        {block.children &&
          block.children.map((childBlock, index: number) => {
            return (
              <BlockWrapper
                key={childBlock?.id}
                parentId={block.id}
                blocks={blocks}
                block={childBlock}
                blockIndex={[...blockIndex, index]}
                setBlocks={setBlocks}
              />
            );
          })}
      </ReactSortable>
      <MoreItem block={block} />
    </>
  );
}

function BlockWrapper({
  block,
  blockIndex,
  setBlocks,
  refRemove,
  blocks,
  parentId,
  setShowTrash,
  handleUpdateWhenChange,
}: IPropsBlockWrapper) {
  if (!block || block.type == 'delete') return null;
  if (block.type === 'container') {
    return (
      <div className={`block bg-theme-primary p-5 mb-3 rounded`}>
        <Container
          block={block}
          setBlocks={setBlocks}
          blocks={blocks}
          handleUpdateWhenChange={handleUpdateWhenChange}
          blockIndex={blockIndex}
          refRemove={refRemove}
          setShowTrash={setShowTrash}
        />
      </div>
    );
  } else {
    return (
      <IssueDragItem
        blocks={blocks}
        parentId={parentId}
        setBlocks={setBlocks}
        data={block}
        indexs={blockIndex}
      />
    );
  }
}
