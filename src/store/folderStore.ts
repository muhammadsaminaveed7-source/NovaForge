import { create } from "zustand";

interface FolderState {
  folderPath: string;
  files: string[];
  setFolder: (path: string, files: string[]) => void;
}

export const useFolderStore = create<FolderState>((set) => ({
  folderPath: "",
  files: [],

  setFolder: (path, files) =>
    set({
      folderPath: path,
      files,
    }),
}));