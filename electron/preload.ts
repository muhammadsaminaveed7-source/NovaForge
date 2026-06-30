import { ipcRenderer, contextBridge } from "electron";

// Existing IPC API
contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args)
    );
  },

  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...rest] = args;
    return ipcRenderer.off(channel, ...rest);
  },

  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...rest] = args;
    return ipcRenderer.send(channel, ...rest);
  },

  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...rest] = args;
    return ipcRenderer.invoke(channel, ...rest);
  },
});

// NovaForge API
contextBridge.exposeInMainWorld("electronAPI", {
  openFolder: () => ipcRenderer.invoke("open-folder"),

  readFile: (filePath: string) =>
    ipcRenderer.invoke("read-file", filePath),
  saveFile: (filePath: string, content: string) =>
  ipcRenderer.invoke("save-file", filePath, content),
});
