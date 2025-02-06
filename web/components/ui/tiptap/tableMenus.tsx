import { icons } from '@/constants';
import { cn } from '@/helpers';
import { Editor } from '@tiptap/react';
import React, { useState } from 'react';
import {
  AiOutlineDeleteColumn,
  AiOutlineMergeCells,
  AiOutlineSplitCells,
} from 'react-icons/ai';
import {
  CgDisplayFlex,
  CgDisplayFullwidth,
  CgDisplaySpacing,
  CgRemoveR,
} from 'react-icons/cg';
import { CiViewTable } from 'react-icons/ci';
import { FiBold } from 'react-icons/fi';
import {
  MdOutlineFormatListNumbered,
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
} from 'react-icons/md';
import {
  PiCheckSquareOffset,
  PiCodeSimple,
  PiListBulletsLight,
  PiSquareSplitHorizontalLight,
  PiTextAlignLeftLight,
  PiTextHOneLight,
  PiTextHThreeLight,
  PiTextHTwoLight,
} from 'react-icons/pi';
import { RiInsertColumnLeft, RiInsertColumnRight } from 'react-icons/ri';

interface ITabMenus {
  editor: Editor;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  tab: number;
}

const TableMenus = ({ editor, tab, index, setOpenTab }: ITabMenus) => {
  const node = [
    {
      icon: <CiViewTable className="w-4 h-4" />,
      command: () =>
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run(),
      name: 'Insert Table',
    },
    {
      icon: <RiInsertColumnLeft className="w-4 h-4" />,
      command: () => editor.chain().focus().addColumnBefore().run(),
      name: 'Add Column Before',
    },
    {
      icon: <RiInsertColumnRight className="w-4 h-4" />,
      command: () => editor.chain().focus().addColumnAfter().run(),
      name: 'Add Column After',
    },
    {
      icon: <AiOutlineDeleteColumn className="w-4 h-4" />,
      command: () => editor.chain().focus().deleteColumn().run(),
      name: 'Delete Column',
    },
    {
      icon: <RiInsertColumnRight className="w-4 h-4 -rotate-45" />,
      command: () => editor.chain().focus().addRowBefore().run(),
      name: 'Add Row Before',
    },
    {
      icon: <RiInsertColumnRight className="w-4 h-4 rotate-90" />,
      command: () => editor.chain().focus().addRowAfter().run(),
      name: 'Add Row After',
    },
    {
      icon: <AiOutlineDeleteColumn className="w-4 h-4 rotate-90" />,
      command: () => editor.chain().focus().deleteRow().run(),
      name: 'Delete Row',
    },

    {
      icon: <CgRemoveR className="w-4 h-4" />,
      command: () => editor.chain().focus().deleteTable().run(),
      name: 'Delete Table',
    },
    {
      icon: <AiOutlineMergeCells className="w-4 h-4" />,
      command: () => editor.chain().focus().mergeCells().run(),
      name: 'Merge Cells',
    },
    {
      icon: <AiOutlineSplitCells className="w-4 h-4" />,
      command: () => editor.chain().focus().splitCell().run(),
      name: 'Split Cell',
    },
    {
      icon: <CgDisplaySpacing className="w-4 h-4" />,
      command: () => editor.chain().focus().toggleHeaderColumn().run(),
      name: 'Toggle Header Column',
    },
    {
      icon: <CgDisplayFullwidth className="w-4 h-4" />,
      command: () => editor.chain().focus().toggleHeaderRow().run(),
      name: 'Toggle Header Row',
    },

    {
      icon: <CgDisplayFlex className="w-4 h-4" />,
      command: () => editor.chain().focus().toggleHeaderCell().run(),
      name: 'Toggle Header Cell',
    },
    {
      icon: <PiSquareSplitHorizontalLight className="w-4 h-4" />,
      command: () => editor.chain().focus().mergeOrSplit().run(),
      name: 'Merge Or Split',
    },
    {
      icon: <PiCodeSimple className="w-4 h-4" />,
      command: () =>
        editor.chain().focus().setCellAttribute('colspan', 2).run(),
      name: 'Set Cell Attribute',
    },
    {
      icon: <PiCodeSimple className="w-4 h-4" />,
      command: () => editor.chain().focus().fixTables().run(),
      name: 'Fix Tables',
    },
    {
      icon: <MdOutlineSkipNext className="w-4 h-4" />,
      command: () => editor.chain().focus().goToNextCell().run(),
      name: 'Go To Next Cell',
    },
    {
      icon: <MdOutlineSkipPrevious className="w-4 h-4" />,
      command: () => editor.chain().focus().goToPreviousCell().run(),
      name: 'Go To Previous Cell',
    },
  ];

  return (
    <div className="relative cursor-pointer flex items-center gap-1 border-r px-2">
      <button
        onClick={() => {
          setOpenTab(tab == -1 ? index : -1);
        }}
        className="flex items-center gap-1"
        type="button"
      >
        {icons.table}
      </button>
      {tab === index && (
        <div className="border rounded absolute h-80 overflow-y-auto bg-theme-primary px-2 mt-2 py-1 animate-popUp origin-top-left top-[100%] left-0 w-[220px] shadow-theme-primary">
          {node.map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setOpenTab(-1);

                  return item.command();
                }}
                className={cn(
                  'p-2 text-custom-text-300 hover:bg-theme-secondary active:bg-color-special-secondary rounded transition-colors flex w-full'
                )}
              >
                <div className="flex items-center gap-2 w-max">
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TableMenus;
