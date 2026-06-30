import MonacoEditor from "@monaco-editor/react";
import { useEditorStore } from "../store/editorStore";

export default function Editor() {
  const currentFile = useEditorStore((state) => state.currentFile);
  const content = useEditorStore((state) => state.content);

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