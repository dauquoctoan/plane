import React from 'react';

interface IProps {
    index?: number;
    uuid: string;
    lsResult: string[];
    handleUpdateAndClosePopUp: (value: string) => void;
}

const ListResult: React.FC<IProps> = ({
    uuid,
    lsResult,
    handleUpdateAndClosePopUp,
    index,
}) => {
    return (
        <div
            datatype={uuid}
            className={`max-h-[200px] z-30 overflow-y-auto cursor-pointer bg-theme-primary origin-top rounded-md box-border border absolute scale-[1] top-[106%] shadow-theme-primary left-0 right-0 animate-dropDown`}
        >
            {lsResult.map((item, i) => (
                <div
                    key={i}
                    datatype={uuid}
                    onClick={() => {
                        handleUpdateAndClosePopUp(item);
                    }}
                    className={`overflow-x-hidden select-none itemselect p-1 hover:bg-theme-secondary ${
                        index === i ? 'bg-theme-secondary' : ''
                    }`}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default ListResult;
