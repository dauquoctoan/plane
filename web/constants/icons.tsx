import { AiOutlineSetting } from 'react-icons/ai';
import { BsCircleHalf, BsTable, BsWindowStack } from 'react-icons/bs';
import { CgStack } from 'react-icons/cg';
import { GrDocumentText } from 'react-icons/gr';
import { IoIosLink, IoIosMore, IoMdMenu } from 'react-icons/io';
import {
  MdModeEditOutline,
  MdOutlineCheckCircle,
  MdOutlineContentCopy,
  MdOutlineCreateNewFolder,
  MdOutlineDeleteOutline,
  MdOutlineViewSidebar,
  MdViewModule,
} from 'react-icons/md';
import { PiPlusSquare, PiSuitcaseSimpleBold } from 'react-icons/pi';
import { TfiSearch } from 'react-icons/tfi';
import { ImNewTab } from 'react-icons/im';
import { TbFilterPin } from 'react-icons/tb';
import { IoText } from 'react-icons/io5';
import { CiImageOn } from 'react-icons/ci';
import { LiaSyncAltSolid } from 'react-icons/lia';
import { HiPlusSm } from 'react-icons/hi';

export type TKeyIcons =
  | 'issue'
  | 'cycle'
  | 'module'
  | 'viewDetail'
  | 'page'
  | 'edit'
  | 'setting'
  | 'search'
  | 'project'
  | 'newFolder'
  | 'plus'
  | 'workspace'
  | 'copyLink'
  | 'delete'
  | 'newTab'
  | 'view'
  | 'menu'
  | 'makeCopy'
  | 'more'
  | 'text'
  | 'table'
  | 'image'
  | 'sync'
  | 'plusSquare'
  | 'check';

type MyObject = {
  [key in TKeyIcons]: React.ReactElement;
};

export const icons: MyObject = {
  check: <MdOutlineCheckCircle />,
  sync: <LiaSyncAltSolid />,
  issue: <CgStack />,
  cycle: <BsCircleHalf />,
  module: <MdViewModule />,
  viewDetail: <MdOutlineViewSidebar />,
  page: <GrDocumentText />,
  setting: <AiOutlineSetting />,
  search: <TfiSearch />,
  project: <PiSuitcaseSimpleBold />,
  newFolder: <MdOutlineCreateNewFolder />,
  plusSquare: <PiPlusSquare />,
  plus: <HiPlusSm />,
  workspace: <BsWindowStack />,
  edit: <MdModeEditOutline />,
  copyLink: <IoIosLink />,
  delete: <MdOutlineDeleteOutline />,
  newTab: <ImNewTab />,
  view: <TbFilterPin />,
  menu: <IoMdMenu />,
  makeCopy: <MdOutlineContentCopy />,
  more: <IoIosMore />,
  text: <IoText />,
  table: <BsTable />,
  image: <CiImageOn />,
};
