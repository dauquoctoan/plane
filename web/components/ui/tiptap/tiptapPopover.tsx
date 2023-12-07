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
import { useEffect } from 'react';

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
}

type IProps = ITipTap &
    ICurentFieldProps &
    Omit<EditorContentProps, 'editor' | 'ref' | 'editor'>;

export default function TiptapPopover(props: IProps) {
    const {
        onChange,
        defaultValue,
        error,
        disableMessage,
        className = '',
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
        ],
        onUpdate: async ({ editor }) => {
            if (editor.getHTML() == '<p></p>') onChange && onChange('');
            else {
                console.log('change', editor.getHTML());
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

    return (
        <div
            onClick={() => {
                editor?.chain().focus().run();
            }}
        >
            <div>
                {editor && <MenuPopover editor={editor} />}
                <EditorContent
                    style={{ outline: 'none' }}
                    editor={editor}
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
