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
import LinkIcon from "./icons/Link";
import CodeIcon from "./icons/Code";

export default function TextEditor({ onUpdate }) {
  const editor = useEditor({
    extensions: [CharacterCount.configure({ limit: 3000 }), EditorLink, Image, StarterKit],
    onBlur({ editor, event }) {
      // Update when the editor isn't focused anymore
      onUpdate(editor.getHTML());
    }
  });

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
      <div className="border-[#c9c9c9] border-b-2 flex gap-4 px-4">
        <button onClick={() => editor.chain().focus().undo().run()} title="Undo">
          <UndoIcon />
        </button>
        <button
          className="border-r pr-2"
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo">
          <RedoIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleBold().run()} title="Bold">
          <BoldIcon />
        </button>
        <button
          className="border-r pr-2"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Redo">
          <ItalicIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet list">
          <BulletListIcon />
        </button>
        <button
          className="border-r pr-2"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Ordered list">
          <OrderedListIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet list">
          <BulletListIcon />
        </button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} title="Code block">
          <CodeIcon />
        </button>
      </div>
      <EditorContent className="cursor-text prose prose-sm p-3 max-w-none w-full" editor={editor} />
    </div>
  );
}
