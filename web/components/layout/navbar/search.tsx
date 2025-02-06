import { icons, TKeyIcons } from '@/constants';
import useDebounce from '@/hooks/fetch';
import overviewService from '@/services/overview-service';
import { IParams } from '@/types';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { GoRocket } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineTextSnippet } from 'react-icons/md';
import useSWR from 'swr';

export interface IItem {
  name: string;
  icons?: React.ReactElement;
  type?: TKeyIcons;
}

const defaultIssue: IItem[] = [
  {
    type: 'issue',
    name: 'Create new issue',
    icons: icons.plus,
  },
];const defaultProject: IItem[] = [
  {
    type: 'project',
    name: 'Create new project',
    icons: icons.plus,
  },
];const defaultCycle: IItem[] = [
  {
    type: 'cycle',
    name: 'Create new cycle',
    icons: icons.plus,
  },
];const defaultModule: IItem[] = [
  {
    type: 'module',
    name: 'Create new module',
    icons: icons.plus,
  },
];const defaultWorkSpace: IItem[] = [
  {
    type: 'workspace',
    name: 'Search settings...',
    icons: icons.setting,
  },
];const defaultAccount: IItem[] = [
  {
    name: 'Create new workspace',
    icons: icons.plus,
  },
  {
    name: 'Change interface theme...',
    icons: icons.setting,
  },
];const defaultHelp: IItem[] = [
  { name: 'Open Plane documentation', icons: <GoRocket /> },
  { name: 'Open keyboard shortcuts', icons: <MdOutlineTextSnippet /> },
];const Search = () => {
  const [search, setSearch] = useState('');
  const param = useParams<IParams>();  const { data } = useSWR(useDebounce(search, 1000) || null, () =>
    overviewService.search(search)
  );  const defaultDataSearch: { [e: string]: IItem[] } = {
    Issue: [
      ...(data?.issues.map(
        (e): IItem => ({ name: e.name || '', type: 'issue' })
      ) || []),
      ...defaultIssue,
    ],
    Project: [
      ...(data?.projects.map(
        (e): IItem => ({ name: e.name || '', type: 'project' })
      ) || []),
      ...defaultProject,
    ],
    WorkspaceSettings: [
      ...(data?.workspaces.map(
        (e): IItem => ({ name: e.name || '', type: 'workspace' })
      ) || []),
      ...defaultWorkSpace,
    ],
    Account: [...defaultAccount],
    Help: [...defaultHelp],
    Cycle: param.projectid ? [...defaultCycle] : [],
    Module: param.projectid ? [...defaultModule] : [],
  };

  return (
    <div className="h-[400px] w-[700px] rounded border overflow-x-hidden flex flex-col py-1">
      <div className="border-b px-2 relative">
        <IoIosSearch className="absolute text-base left-2 top-1/2 -translate-y-1/2" />
        <input
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
          className="placeholder:text-color-text-sidebar text-sm outline-none border-none w-full h-full pl-7 "
          placeholder="Change interface theme..."
        />
      </div>
      {search && (
        <div className="px-2 py-2 text-xs text-color-text-sidebar">
          Search results for &quot;
          <span className="text-sm text-black">{search}</span>&ldquo; in
          workspace:
        </div>
      )}
      <div className="px-2 overflow-y-auto flex-1 overflow-x-hidden">
        {Object.keys(defaultDataSearch).map(e => {
          return defaultDataSearch[e].length ? (
            <div key={e} className="py-2">
              <div className="text-xs px-1">{e}</div>
              <div>
                {defaultDataSearch[e].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="text-xs select-none cursor-pointer rounded px-2 py-1 hover:bg-theme-secondary flex items-center gap-2"
                    >
                      {item.icons || (item.type && icons[item.type])}
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
