import { cn } from "@/helpers";
import { BubbleMenu, Editor } from "@tiptap/react";
import React from 'react'
import { AiOutlineStrikethrough } from "react-icons/ai";
import { BsTypeStrikethrough } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { FiBold, FiCode, FiItalic, FiUnderline } from "react-icons/fi";
import { TfiAngleDown, TfiArrowTopRight } from "react-icons/tfi";
import Link from "./link";
import Node from "./node";

interface IMenuPopover{
    editor: Editor;
}

const MenuPopover:React.FC<IMenuPopover> = ({editor}) => {
  const menus = [
      {
        isActive: () => editor?.isActive("bold"),
        command: ()=>editor.chain().focus().toggleBold().run(),
        icon: FiBold,
      },
      {
        isActive: () => editor?.isActive("italic"),
        command: ()=>editor.chain().focus().toggleItalic().run(),
        icon: FiItalic,
      },
      {
        isActive: () => editor?.isActive("underline"),
        command: ()=>editor.chain().focus().toggleUnderline().run(),
        icon: FiUnderline,
      },
      {
        isActive: () => editor?.isActive("strike"),
        command: ()=>editor.chain().focus().toggleStrike().run(),
        icon: AiOutlineStrikethrough,
      },
      {
        isActive: () => editor?.isActive("code"),
        command: ()=>editor.chain().focus().toggleCode().run(),
        icon: FiCode,
      },
  ]
  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className="bg-theme-primary flex items-center rounded border shadow-theme-primary">
         <Node editor={editor}/>
         <Link/>
         {
            menus.map((item, index)=>{
                return (
                    <button
                    key={index}
                    type="button"
                    onClick={()=> item.command()}
                    className={cn(
                      "p-2 text-custom-text-300 hover:bg-theme-secondary active:bg-color-special-secondary transition-colors",
                      {
                        "text-custom-text-100 bg-color-special-secondary" : item.isActive(),
                      }
                    )}
                  >
                    <item.icon 
                        className={cn("h-4 w-4", {
                            "text-custom-text-100": item.isActive(),
                        })}
                    />
                  </button>
                )
            })
        }
    </BubbleMenu>
  )
}

export default MenuPopover