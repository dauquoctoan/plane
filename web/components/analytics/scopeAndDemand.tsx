import React from 'react';
import Avatar from '../ui/avatar';

const ScopeAndDemand = () => {
    return (
        <div className="w-full">
            <div className="w-full flex gap-4 h-[350px] xl:flex-col xl:h-[700px]">
                <div className="border flex flex-1 p-3 rounded flex-col">
                    <div className="font-semibold">DEMAND</div>
                    <div>Total open tasks</div>
                    <div>2</div>
                    <div className="flex-1"></div>
                </div>
                <div className="border flex flex-1 p-3 rounded flex-col">
                    <div className="font-semibold">SCOPE</div>
                    <div>Pending issues</div>
                    <div className="flex-1"></div>
                </div>
            </div>

            <div className="flex justify-between w-full mt-4 gap-4 xl:flex-col">
                <div className="flex-1 p-2 border rounded">
                    <div className="font-bold">Most issues created</div>
                    <div className="flex items-center">
                        <Avatar children="D" size="sm" type="circle" />
                        <div className="ml-2">dauquococ</div>
                    </div>
                </div>
                <div className="flex-1 p-2 border rounded">
                    <div className="font-bold">Most issues closed</div>
                    <div className="flex items-center">
                        <Avatar children="D" size="sm" type="circle" />
                        <div className="ml-2">dauquococ</div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[350px] flex p-2 border mt-4 rounded">
                <div className="font-bold">Issues closed in a year</div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
};

export default ScopeAndDemand;
