import { Search, Minus, Square, X } from "lucide-react";

export default function TitleBar() {
  return (
    <header className="titlebar">

      <div className="brand">
        <div className="brandLogo">NF</div>
        <h3>NovaForge</h3>
      </div>

      <div className="searchBox">
        <Search size={18} />
        <input
          placeholder="Search files, commands..."
        />
      </div>

      <div className="windowButtons">
        <button>
          <Minus size={18} />
        </button>

        <button>
          <Square size={16} />
        </button>

        <button className="close">
          <X size={18} />
        </button>
      </div>

    </header>
  );
}