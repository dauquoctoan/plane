import React from 'react';

const Graph = () => {
  function createItem() {
    const lsItem = [];
    for (let i = 0; i < 25 * 7; i++) {
      lsItem.push(<div key={i} className="w-4 h-4 rounded bg-gray-100"></div>);
    }

    return lsItem;
  }

  return (
    <div className="w-full h-full flex flex-col overflow-x-auto no-scrool">
      <div className="flex justify-between items-center px-8 min-w-[500px]">
        <div>Jun</div>
        <div>Jul</div>
        <div>Aug</div>
        <div>Sep</div>
        <div>Oct</div>
        <div>Nov</div>
      </div>
      <div className="flex-1 flex">
        <div className="flex flex-col justify-between">
          <div>Sun</div>
          <div>Tue</div>
          <div>Thu</div>
          <div>Sat</div>
        </div>
        <div className="flex-1 grid grid-cols-25 grid-rows-7 px-2 py-2 min-w-[500px]">
          {createItem()}
        </div>
      </div>
      <div className="flex items-center gap-3 pl-8">
        <div className="text-sm">Less</div>
        <div className="w-4 h-4 rounded bg-gray-100"></div>
        <div className="w-4 h-4 rounded bg-blue-200"></div>
        <div className="w-4 h-4 rounded bg-blue-300"></div>
        <div className="w-4 h-4 rounded bg-blue-400"></div>
        <div className="w-4 h-4 rounded bg-blue-500"></div>
        <div className="text-sm">More</div>
      </div>
    </div>
  );
};

export default Graph;
