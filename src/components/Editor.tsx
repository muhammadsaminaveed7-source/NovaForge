import MonacoEditor from "@monaco-editor/react";

export default function Editor() {
  return (
    <main className="editor">

      <div className="tabs">
        <div className="tab activeTab">App.tsx</div>
        <div className="tab">Sidebar.tsx</div>
        <div className="tab">App.css</div>
      </div>

      <div className="editorArea">
        <MonacoEditor
          height="100%"
          defaultLanguage="typescript"
          theme="vs-dark"
          defaultValue={`function hello() {
  console.log("Welcome to NovaForge 🚀");
}

hello();
`}
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