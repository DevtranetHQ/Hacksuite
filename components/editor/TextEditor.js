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

import Link from "@tiptap/extension-link";

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

      Link.configure({
        openOnClick: false
      }),
      ,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      })
    ],
    onBlur({ editor, event }) {
      // Update when the editor isn't focused anymore
      onUpdate(editor.getHTML());
    }
  });

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
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

      <div className="mxs:px-0 mxs:gap-0 border-[#c9c9c9] border-b-2 flex gap-4 px-4 p-1 justify-evenly">
        <button
          type="button"
          className=" pr-1 pl-1 "
          onClick={() => editor.chain().focus().undo().run()}
          title="Undo">
          <UndoIcon className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          className="border-r pr-1"
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo">
          <RedoIcon className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1"
              : " pr-1 pl-1"
          }
          title="Bold">
          <BoldIcon className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1"
              : " pr-1 pl-1"
          }
          title="Italic">
          <ItalicIcon className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive("underline")
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1 border-r"
              : "border-r pr-1 pl-1"
          }>
          <Icon
            icon="fa-solid:underline"
            inline={true}
            width={43}
            height={33}
            className="mxs:w-3 mxs:h-3"
          />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" })
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1"
              : " pr-1 pl-1"
          }
          title="Align center">
          <Center className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" })
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1 border-r"
              : " pr-1 pl-1 border-r"
          }
          title="Justify">
          <Right className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          className={
            editor.isActive("bulletList")
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1"
              : " pr-1 pl-1"
          }
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet list">
          <BulletListIcon className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          className={
            editor.isActive("orderedList")
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1 border-r"
              : " pr-1 pl-1 border-r"
          }
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Ordered list">
          <OrderedListIcon className="mxs:w-3 mxs:h-3" />
        </button>

        <button type="button" className="border-r pr-1" title="Insert image">
          <input type="file" className="hidden" />
          <Picture className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          className={
            editor.isActive("link")
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1 border-r"
              : " pr-1 pl-1 border-r"
          }
          onClick={setLink}
          title="Apply link">
          <LinkIcon className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          className={
            editor.isActive("code")
              ? "is-active border-b border-b-[#03A9F4] pr-1 pl-1 border-r"
              : " pr-1 pl-1 border-r"
          }
          onClick={() => editor.chain().focus().toggleCode().run()}
          title="Code block">
          <CodeIcon className="mxs:w-3 mxs:h-3" />
        </button>
        <button
          type="button"
          className=""
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          title="Full screen">
          <Fullscreen className="mxs:w-3 mxs:h-3" />
        </button>
      </div>

      <EditorContent className="cursor-text prose prose-sm p-3 max-w-none w-full" editor={editor} />
    </div>
  );
}
