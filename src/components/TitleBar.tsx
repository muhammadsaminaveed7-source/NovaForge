import { useFolderStore } from "../store/folderStore";
import { Search, Minus, Square, X } from "lucide-react";

export default function TitleBar() {
  const setFolder = useFolderStore((state) => state.setFolder);

  return (
    <header className="titlebar">
      <div className="leftSection">
        <div className="brand">
          <div className="brandLogo">NF</div>
          <h3>NovaForge</h3>
        </div>

        <nav className="menuBar">
          <button
            onClick={async () => {
              const result = await window.electronAPI.openFolder();

              if (!result) return;

              setFolder(result.path, result.files);
            }}
          >
            File
          </button>

          <button>Edit</button>
          <button>View</button>
          <button>Terminal</button>
          <button>AI</button>
          <button>Help</button>
        </nav>
      </div>

      <div className="searchBox">
        <Search size={18} />
        <input placeholder="Search..." />
      </div>

      <div className="windowButtons">
        <button>
          <Minus size={16} />
        </button>

        <button>
          <Square size={14} />
        </button>

        <button className="close">
          <X size={16} />
        </button>
      </div>
    </header>
  );
}