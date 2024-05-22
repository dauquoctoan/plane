import './index.css';
import {
    useEditor,
    EditorContent,
    BubbleMenu,
    EditorContentProps,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { Extension } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import { ICurentFieldProps } from '../types';
import MenuPopover from './menuPopover';
import Underline from '@tiptap/extension-underline';
import Code from '@tiptap/extension-code';
import Strike from '@tiptap/extension-strike';
import Italic from '@tiptap/extension-italic';
import Document from '@tiptap/extension-document';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';

import Gapcursor from '@tiptap/extension-gapcursor'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image';

import { ChangeEvent, ChangeEventHandler, CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { icons } from '@/constants';
import APP_CONFIG from '@/configs';
import uploadService from '@/services/uploadservice';
import { GrBottomCorner } from 'react-icons/gr';

export const FontSize = Extension.create({
    name: 'fontSize',
    addOptions() {
        return {
            types: ['textStyle'],
            defaultFontSize: '16px',
        };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: this.options.defaultFontSize,
                        parseHTML: (element) =>
                            element.style.fontSize ||
                            this.options.defaultFontSize,
                        renderHTML: (attributes) => {
                            if (!attributes.fontSize) {
                                return {};
                            }
                            return {
                                style: `font-size: ${attributes.fontSize}`,
                            };
                        },
                    },
                },
            },
        ];
    },
});

export interface ITipTap {
    onChange?: (e: string) => void;
    defaultValue?: string;
    className?: string;
    style?: CSSProperties;
    isHeader?: boolean;
    prefixHeader?: React.ReactElement;
    isTable?: boolean;
}

type IProps = ITipTap &
    ICurentFieldProps &
    Omit<EditorContentProps, 'editor' | 'ref' | 'editor'>;

export default function TiptapPopover(props: IProps) {
    const [loading, setLoading] = useState(false);
    const refInput = useRef<HTMLInputElement>(null);
    const {
        onChange,
        defaultValue,
        error,
        disableMessage,
        className = '',
        value,
        style,
        isHeader=false,
        prefixHeader,
        isTable=false,
        
    } = props;
    const editor = useEditor({
        extensions: [
            Document,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Italic,
            Underline,
            Code,
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return `Heading ${node.attrs.level}`;
                    }
                    if (
                        node.type.name === 'image' ||
                        node.type.name === 'table'
                    ) {
                        return '';
                    }

                    return "Press '/' for commands...";
                },
                includeChildren: true,
            }),
            Strike,
            TextStyle,
            FontSize,
            Gapcursor,
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            Image,
            ImageResize.configure()
        ],
        onUpdate: async ({ editor }) => {
            if (editor.getHTML() == '<p></p>') onChange && onChange('');
            else {
                onChange && onChange(editor.getHTML());
            }
        },
        content: defaultValue || ' ',
    });

    useEffect(() => {
        if (props?.value == '') {
            editor?.commands.setContent(' ');
        }
    }, [props.value]);

    function handleChangeInput(e:ChangeEvent<HTMLInputElement>){
        e?.target?.files && uploadFile(e.target.files[0])
    }

    const menuHeader = [
        {
            actions: ()=> editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(),
            icons: icons.table,
        },
        {
            actions:  ()=> refInput.current?.click(),
            icons: <div>{icons.image}<input accept="image/png, image/gif, image/svg, image/jpeg" onChange={handleChangeInput} type='file' className='invisible absolute w-0 h-0' ref={refInput}/></div>,
        },
    ];

    const uploadFile = async (files:any) => {
        const formData = new FormData();
      
        formData.append('image', files)

        try {
            const file: any = await uploadService.uploadImage(
                formData,
            );
            editor && editor
                .chain()
                .focus()
                .setImage({
                    src:
                        APP_CONFIG.NEXT_PUBLIC_STATIC +
                        '/images/' +
                        file?.image_url,
                })
                .run();
        } catch (e) {
            console.error(e);
        }
    };

    editor?.setOptions({
        editorProps: {
            handlePaste: () => {
                if (loading) return;
                void (async (e) => {
                    setLoading(true);
                    const clipboardItems = await navigator.clipboard.read();
                    setLoading(false);
                    const clipboardItem = clipboardItems[0];
                    const { types } = clipboardItem;
                    const type = types[0];
                    const blob = await clipboardItems[0].getType(type);
                    if (/(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(type)) {
                        const formData = new FormData();

                        formData.append(
                            'image',
                            new File(
                                [blob],
                                new Date().getTime() + '.' + type.split('/')[1],
                                { type },
                            ),
                        );

                        try {
                            const file: any = await uploadService.uploadImage(
                                formData,
                            );
                            editor
                                .chain()
                                .focus()
                                .setImage({
                                    src:
                                        APP_CONFIG.NEXT_PUBLIC_STATIC +
                                        '/images/' +
                                        file?.image_url,
                                })
                                .run();
                        } catch (e) {
                            console.error(e);
                        }
                    }
                })();
            },
        },
    });

    return (
        <div
            onClick={() => {
                // editor?.chain().focus().run();
            }}
        >
            <div>
                {isHeader && <div className='border-b flex justify-between px-2 py-1'>
                    <div className='flex-1 flex gap-2'>
                        {
                            menuHeader.map((e,i)=>{
                                return <button key={i}
                                onClick={()=>{e?.actions()}}
                                className={`bg-theme-secondary text-lg w-7 h-7 flex items-center justify-center rounded cursor-pointer relative`}>
                                    {e.icons}
                                </button>
                            })
                        }
                    </div>
                    <div>{prefixHeader}</div>
                </div>}
                {editor && <MenuPopover editor={editor} isTable={isTable}/>}
                <EditorContent
                    onClick={()=>{
                        editor?.chain().focus().run();
                    }}
                    style={{ outline: 'none', ...style }}  
                    editor={editor}
                    defaultValue={value}
                    className={`${
                        error ? 'border border-color-error' : 'border'
                    } rounded h-[200px] overflow-x-hidden overflow-y-auto outline-none ${className}`}
                />
                {!disableMessage && error && (
                    <div className="text-color-error text-sm">{error}</div>
                )}
            </div>
        </div>
    );
}
