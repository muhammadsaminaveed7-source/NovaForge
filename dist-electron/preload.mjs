"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args) {
    const [channel, listener] = args;
    return electron.ipcRenderer.on(
      channel,
      (event, ...args2) => listener(event, ...args2)
    );
  },
  off(...args) {
    const [channel, ...rest] = args;
    return electron.ipcRenderer.off(channel, ...rest);
  },
  send(...args) {
    const [channel, ...rest] = args;
    return electron.ipcRenderer.send(channel, ...rest);
  },
  invoke(...args) {
    const [channel, ...rest] = args;
    return electron.ipcRenderer.invoke(channel, ...rest);
  }
});
electron.contextBridge.exposeInMainWorld("electronAPI", {
  openFolder: () => electron.ipcRenderer.invoke("open-folder"),
  readFile: (filePath) => electron.ipcRenderer.invoke("read-file", filePath),
  saveFile: (filePath, content) => electron.ipcRenderer.invoke("save-file", filePath, content)
});
