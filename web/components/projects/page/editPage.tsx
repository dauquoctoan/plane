'use client';
import { SWR_KEY_PROJECT_PAGE } from '@/apiKey';
import Button from '@/components/ui/button';
import TipTapPopover from '@/components/ui/tiptap/tipTapPopover';
import projectService from '@/services/project-services';
import { IPage, IParams } from '@/types';
import { useParams, usePathname } from 'next/navigation';
import { changeRoute, ContainerLink } from 'nextjs-progressloader';
import { FC, useRef, useState } from 'react';
import { IoSync } from 'react-icons/io5';
import useSWR, { mutate } from 'swr';

interface IEditPage {}

const EditPage: FC<IEditPage> = () => {
  const params = useParams<IParams>();
  const pathName = usePathname();
  const [isLoadingSave, setIsLoading] = useState(false);
  const refItmer = useRef<any>();
  const link = pathName.replace('/edit', '');
  const { data } = useSWR(SWR_KEY_PROJECT_PAGE(params.pageid), () => {
    return projectService.findOnePage(params.pageid);
  });

  async function updatePage(data: Partial<IPage>) {
    try {
      await projectService.updatePages({
        ...data,
        id: params.pageid,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div>
      <ContainerLink links={[{ href: link }]} />
      <TipTapPopover
        prefixHeader={
          <div className="flex gap-2 items-center">
            {isLoadingSave && <IoSync className="animate-spin" />}
            <Button
              typeBTN="primary"
              onClick={() => {
                changeRoute(link);
              }}
              text="View Page"
            />
          </div>
        }
        defaultValue={data?.description_html}
        onChange={(e) => {
          setIsLoading(true);
          clearTimeout(refItmer.current);
          refItmer.current = setTimeout(() => {
            updatePage({ description_html: e as string });
          }, 2000);
        }}
        style={{ border: 0, height: 'auto', padding: '30px 60px' }}
        isHeader
        isTable
        className="mb-4"
      />
    </div>
  );
};

export default EditPage;
