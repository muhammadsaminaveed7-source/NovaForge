import { useState } from "react";
import {
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import { files } from "../data/files";

export default function Explorer() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="explorer">
      <h4>EXPLORER</h4>

      <div className="tree">
        {files.map((item) => {
          if (item.type === "folder") {
            return (
              <div key={item.id}>
                <div
                  className="treeItem"
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}

                  {open ? (
                    <FolderOpen size={16} />
                  ) : (
                    <Folder size={16} />
                  )}

                  <span>{item.name}</span>
                </div>

                {open &&
                  item.children?.map((child) => (
                    <div className="treeChild" key={child.id}>
                      <FileCode size={15} />
                      <span>{child.name}</span>
                    </div>
                  ))}
              </div>
            );
          }

          return (
            <div className="treeItem" key={item.id}>
              <FileText size={15} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}