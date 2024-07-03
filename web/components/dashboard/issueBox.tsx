import React from 'react';

const IssueBox = () => {
  return (
    <div className="w-full rounded border p-2">
      <div className="flex rounded bg-[rgba(239,68,68,.2)]">
        <div className="flex-[1] px-2 py-2">Overdue</div>
        <div className="flex-[2] px-2 py-2">Issue</div>
        <div className="flex-[1] px-2 py-2">Due Date</div>
      </div>
      <div className="w-full flex flex-col h-[250px]">
        <div className="w-full flex-1"></div>
        <p className="text-center text-sm">
          No issues found. Use{' '}
          <span className=" px-2 py-1 bg-theme-secondary rounded">C</span>{' '}
          shortcut to create a new issue
        </p>
      </div>
    </div>
  );
};

export default IssueBox;
