import { Folder, FileCode, ChevronRight } from "lucide-react";
import { useFolderStore } from "../store/folderStore";
import { useEditorStore } from "../store/editorStore";

export default function Explorer() {
  const folderPath = useFolderStore((state) => state.folderPath);
  const files = useFolderStore((state) => state.files);

  const openFile = useEditorStore((state) => state.openFile);

  const folderName =
    folderPath.split("\\").pop() || "No Folder";

  return (
    <aside className="explorer">
      <h4>EXPLORER</h4>

      <div className="tree">
        <div className="treeItem">
          <ChevronRight size={16} />
          <Folder size={16} />
          <span>{folderName}</span>
        </div>

        {files.map((file) => (
          <div
            key={file}
            className="treeChild"
            onClick={async () => {
              const result = await window.electronAPI.readFile(
                `${folderPath}\\${file}`
              );

              if (!result.success) return;

              openFile(file, result.content);
            }}
          >
            <FileCode size={15} />
            <span>{file}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}