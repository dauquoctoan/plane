import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import { sortableOptions } from './board';

export interface IPorps {
    showTrash: boolean;
    ref: React.RefObject<HTMLDivElement>;
}

const ItemDeleteIssue = React.forwardRef((props: IPorps, ref: any) => (
    <div
        ref={ref}
        className={`${
            props.showTrash ? 'visible' : 'invisible'
        } fixed top-2 rounded left-[50%] z-50 box-border`}
    >
        <div className="absolute bg-transparent top-0 left-0 right-0 bottom-0 border border-color-error box-border rounded w-fit px-3 py-1">
            Drop here to delete the issue.
        </div>
        <ReactSortable
            className={`block relative blockTrack invisible overflow-hidden w-[250px] h-[35px]`}
            key={1}
            list={[]}
            setList={() => {}}
            multiDrag
            {...sortableOptions}
        ></ReactSortable>
    </div>
));

export default ItemDeleteIssue;
