import { useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import { useEditorStore } from "../store/editorStore";
import { useFolderStore } from "../store/folderStore";

export default function Editor() {
  const currentFile = useEditorStore((state) => state.currentFile);
  const content = useEditorStore((state) => state.content);
  const setContent = useEditorStore((state) => state.setContent);

  const folderPath = useFolderStore((state) => state.folderPath);

  useEffect(() => {
    const handleSave = async (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();

        if (!currentFile) return;

        const fullPath = `${folderPath}\\${currentFile}`;

        const saved = await window.electronAPI.saveFile(
          fullPath,
          content
        );

        if (saved) {
          console.log("✅ File Saved");
        } else {
          console.log("❌ Save Failed");
        }
      }
    };

    window.addEventListener("keydown", handleSave);

    return () => {
      window.removeEventListener("keydown", handleSave);
    };
  }, [currentFile, content, folderPath]);

  return (
    <main className="editor">
      <div className="tabs">
        <div className="tab activeTab">
          {currentFile || "No File Open"}
        </div>
      </div>

      <div className="editorArea">
        <MonacoEditor
          height="100%"
          language="typescript"
          theme="vs-dark"
          value={content}
          onChange={(value) => {
            setContent(value || "");
          }}
          options={{
            minimap: {
              enabled: true,
            },
            fontSize: 15,
            automaticLayout: true,
            roundedSelection: true,
            scrollBeyondLastLine: false,
            wordWrap: "on",
          }}
        />
      </div>
    </main>
  );
}