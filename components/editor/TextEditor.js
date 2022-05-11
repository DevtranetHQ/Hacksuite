import { useEditor, EditorContent, BubbleMenu, ReactNodeViewRenderer } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Link as EditorLink } from "@tiptap/extension-link";
import UndoIcon from "./icons/Undo";
import RedoIcon from "./icons/Redo";
import ItalicIcon from "./icons/Italic";
import BoldIcon from "./icons/Bold";
import BulletListIcon from "./icons/BulletList";
import OrderedListIcon from "./icons/OrderedList";
// import Left from "./icons/left";
import Right from "./icons/Right";
import Center from "./icons/Center";
import Picture from "./icons/Picture";
import Fullscreen from "./icons/Fullscreen";
import LinkIcon from "./icons/Link";
import CodeIcon from "./icons/Code";
import { useCallback } from "react";
import TextAlign from "@tiptap/extension-text-align";
import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import { Icon } from "@iconify/react";
import Underline from "@tiptap/extension-underline";

export default function TextEditor({ onUpdate }) {
  const editor = useEditor({
    extensions: [
      CharacterCount.configure({ limit: 3000 }),
      EditorLink,
      Image,
      StarterKit,
      Italic,
      Bold,
      HorizontalRule,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      })
    ],
    onBlur({ editor, event }) {
      // Update when the editor isn't focused anymore
      onUpdate(editor.getHTML());
    }
  });
  const addImage = useCallback(() => {
    const url = <input type="file" />;

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="form-input p-0">
      <style jsx global>{`
        .ProseMirror {
          min-height: 400px;
        }

        .ProseMirror:focus {
          outline: none;
        }

        .ProseMirror code,
        .ProseMirror p,
        .ProseMirror ul,
        .ProseMirror ol {
          font-size: 16px;
        }
      `}</style>
      <div className="border-[#c9c9c9] border-b-2 flex gap-4 px-4 p-1">
        <button
          type="button"
          className="border-r pr-3 pl-1 "
          onClick={() => editor.chain().focus().undo().run()}
          title="Undo">
          <UndoIcon />
        </button>
        <button
          type="button"
          className="border-r pr-3"
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo">
          <RedoIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active border-r pr-3" : "border-r pr-3"}
          title="Bold">
          <BoldIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active border-r pr-3" : "border-r pr-3"}
          title="Italic">
          <ItalicIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}>
          <Icon
            icon="fa-solid:underline"
            inline={true}
            width={43}
            height={33}
            className="border-r pr-3"
          />
        </button>
        {/* <button
         type="button"
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active border-r pr-3' : 'border-r pr-3'}
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          title="Align left">
          <Left />
        </button> */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active border-r pr-3" : "border-r pr-3"
          }
          title="Align center">
          <Center />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active border-r pr-3" : "border-r pr-3"
          }
          title="Justify">
          <Right />
        </button>
        <button
          type="button"
          className="border-r pr-3"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet list">
          <BulletListIcon />
        </button>
        <button
          type="button"
          className="border-r pr-3"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Ordered list">
          <OrderedListIcon />
        </button>
        <button type="button" className="border-r pr-3" title="Insert image">
          <input type="file" className="hidden" />
          <Picture />
        </button>
        <button
          type="button"
          className="border-r pr-3"
          onClick={() => editor.chain().focus().toggleLink().run()}
          title="Apply link">
          <LinkIcon />
        </button>
        <button
          type="button"
          className="border-r pr-3"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          title="Code block">
          <CodeIcon />
        </button>
        <button
          type="button"
          className=""
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          title="Full screen">
          <Fullscreen />
        </button>
      </div>

      <EditorContent className="cursor-text prose prose-sm p-3 max-w-none w-full" editor={editor} />
    </div>
  );
}
