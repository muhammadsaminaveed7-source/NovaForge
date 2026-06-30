 import { Home, FolderOpen, Search, Bot, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">NF</div>

      <nav>
        <button className="active">
          <Home size={22} />
        </button>

        <button
  onClick={async () => {
    const folder = await window.electronAPI.openFolder();
    console.log(folder);
  }}
>
  <FolderOpen size={22} />
</button>

        <button>
          <Search size={22} />
        </button>

        <button>
          <Bot size={22} />
        </button>
      </nav>

      <button className="settings">
        <Settings size={22} />
      </button>
    </aside>
  );
}