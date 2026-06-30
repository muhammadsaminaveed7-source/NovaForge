/// <reference types="vite/client" />

interface Window {
  electronAPI: {
    openFolder: () => Promise<{
      path: string;
      files: string[];
    } | null>;

    readFile: (
      filePath: string
    ) => Promise<{
      success: boolean;
      content: string;
    }>;

    saveFile: (
      filePath: string,
      content: string
    ) => Promise<boolean>;
  };
}