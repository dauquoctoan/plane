'use client';
import { SWR_KEY_PROJECT_PAGE } from '@/apiKey';
import Button from '@/components/ui/button';
import projectService from '@/services/project-services';
import { IPage, IParams } from '@/types';
import { useParams, usePathname } from 'next/navigation';
import { changeRoute, ContainerLink } from 'nextjs-progressloader';
import React, { FC, useEffect, useState } from 'react';
import useSWR from 'swr';

const PageDetail = () => {
  const params = useParams<IParams>();
  const pathName = usePathname();
  const link = pathName + '/edit';
  const { data, isLoading } = useSWR(
    SWR_KEY_PROJECT_PAGE(params.pageid),
    () => {
      return projectService.findOnePage(params.pageid);
    }
  );

  useEffect(() => {
    if (!isLoading && !data?.description_html) {
      changeRoute(link);
    }
  }, [isLoading]);

  return (
    <div className="">
      <ContainerLink links={[{ href: link }]} />
      {data?.description_html && (
        <div className="w-full">
          <div className="p-2 flex justify-between border-b">
            <div className="text-sm font-semibold">{data.name}</div>
            <Button
              text="Edit Page"
              typeBTN="primary"
              onClick={() => {
                changeRoute(link);
              }}
            />
          </div>
          <div className="px-16 py-8">
            <div
              className="tiptap ProseMirror"
              dangerouslySetInnerHTML={{ __html: data?.description_html }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PageDetail;
