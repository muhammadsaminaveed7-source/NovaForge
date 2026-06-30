import { create } from "zustand";

interface EditorState {
  currentFile: string;
  content: string;

  openFile: (file: string, content: string) => void;
  setContent: (content: string) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  currentFile: "",
  content: "",

  openFile: (file, content) =>
    set({
      currentFile: file,
      content,
    }),

  setContent: (content) =>
    set({
      content,
    }),
}));