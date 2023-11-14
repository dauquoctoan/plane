import React, { ReactElement } from 'react';
import { PiCircleDashedThin } from 'react-icons/pi';
import { RxValueNone } from 'react-icons/rx';
import { AiOutlineTag } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import Popover from '@/components/ui/popover';

interface IPropsIitem {
    item: Item;
}

interface Item {
    icon?: ReactElement;
    text: string;
    popComponent: ReactElement;
}

const ToolItem: React.FC<IPropsIitem> = ({ item }) => {
    return (
        <Popover
            isChildRen
            content={item.popComponent}
            className={`${
                item.icon &&
                'border border-theme-border-primary hover:bg-theme-secondary'
            } w-fit rounded px-2 py-1 text-sm cursor-pointer select-none flex items-center gap-2`}
        >
            {item.icon as any}
            <span className="h-fit">{item.text}</span>
        </Popover>
    );
};

const IssueTools = () => {
    const lsItemTools: Item[] = [
        {
            icon: <PiCircleDashedThin />,
            text: 'Backlog',
            popComponent: <div>Backlog</div>,
        },
        {
            icon: <RxValueNone />,
            text: 'None',
            popComponent: <div>None</div>,
        },
        {
            icon: <BsPerson />,
            text: 'Assignee',
            popComponent: <div>Assignee</div>,
        },
        {
            icon: <AiOutlineTag />,
            text: 'Label',
            popComponent: <div>Label</div>,
        },
        {
            icon: <RxValueNone />,
            text: 'Due date',
            popComponent: <div>Due date</div>,
        },
        {
            text: '...',
            popComponent: <div>...</div>,
        },
    ];

    return (
        <div className="px-6 mb-5 flex items-center justify-between gap-2">
            {lsItemTools.map((e, i) => (
                <ToolItem key={i} item={e} />
            ))}
        </div>
    );
};

export default IssueTools;
