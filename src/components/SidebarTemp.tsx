import { Home, Folder, Search, Bot, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">NF</div>

      <button className="active">
        <Home size={22} />
      </button>

      <button>
        <Folder size={22} />
      </button>

      <button>
        <Search size={22} />
      </button>

      <button>
        <Bot size={22} />
      </button>

      <div style={{ flex: 1 }} />

      <button>
        <Settings size={22} />
      </button>
    </aside>
  );
}