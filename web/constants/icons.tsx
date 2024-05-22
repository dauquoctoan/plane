import { IconType } from "react-icons";
import { AiOutlineSetting } from "react-icons/ai";
import { BsCircleHalf, BsTable, BsWindowStack } from "react-icons/bs";
import { CgStack } from "react-icons/cg";
import { GrDocumentText } from "react-icons/gr";
import { IoIosLink, IoIosMore, IoMdMenu } from "react-icons/io";
import { MdModeEditOutline, MdOutlineContentCopy, MdOutlineCreateNewFolder, MdOutlineDeleteOutline, MdOutlineViewSidebar, MdViewModule } from "react-icons/md";
import { PiPlusSquare, PiSuitcaseSimpleBold } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import { ImNewTab } from "react-icons/im";
import { TbFilterPin } from "react-icons/tb";
import { IoText } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

export type TKeyIcons = 'issue' | 'cycle'|'module'|'viewDetail'|'page'|'edit'|
            'setting'|'search'|'project'|'newFolder'|'pluss'|'workspace'|
            'copyLink'|'delete'|'newTab'|'view'|'menu'|'makeCoppy'|'more'|'text'|'table'|'image';

type MyObject = {
    [key in TKeyIcons]: React.ReactElement;
};

export const icons:MyObject = {
    issue: <CgStack />,
    cycle: <BsCircleHalf />,
    module: <MdViewModule />,
    viewDetail: <MdOutlineViewSidebar />,
    page: <GrDocumentText />,
    setting: <AiOutlineSetting />,
    search: <TfiSearch />,
    project: <PiSuitcaseSimpleBold/>,
    newFolder: <MdOutlineCreateNewFolder/>,
    pluss: <PiPlusSquare />,
    workspace: <BsWindowStack />,
    edit: <MdModeEditOutline />,
    copyLink: <IoIosLink/>,
    delete: <MdOutlineDeleteOutline/>,
    newTab: <ImNewTab />,
    view:<TbFilterPin />,
    menu: <IoMdMenu/>,
    makeCoppy: <MdOutlineContentCopy />,
    more: <IoIosMore/>,
    text:<IoText />,
    table:<BsTable />,
    image:<CiImageOn />
}
