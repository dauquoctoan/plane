'use client';
import React, { useState } from 'react';
import CustomAnalytics from './customAnalytics';
import ScopeAndDemand from './scopeAndDemand';

const Analytics = () => {
  const [tab, setTab] = useState(0);
  const analytics = [
    { title: 'Scope and Demand', component: <ScopeAndDemand /> },
    { title: 'Custom Analytics', component: <CustomAnalytics /> },
  ];

  return (
    <div className="w-full">
      {/* <div className="w-full flex gap-2 py-2 px-3">
                {analytics.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`text-sm cursor-pointer select-none px-2 py-1 rounded-full border ${
                                tab == index ? 'bg-theme-secondary' : ''
                            }`}
                            onClick={() => {
                                setTab(index);
                            }}
                        >
                            {item.title}
                        </div>
                    );
                })}
            </div> */}
      <div className="p-4">
        <div>{analytics[tab].component}</div>
      </div>
    </div>
  );
};

export default Analytics;
