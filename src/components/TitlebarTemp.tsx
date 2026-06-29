import { Search, Minus, Square, X } from "lucide-react";

export default function TitleBar() {
  return (
    <header className="titlebar">

      <div className="brand">
        <div className="brandLogo">NF</div>
        <span>NovaForge</span>
      </div>

      <div className="searchBox">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search files, commands..."
        />
      </div>

      <div className="windowControls">
        <button><Minus size={16} /></button>
        <button><Square size={14} /></button>
        <button className="close"><X size={16} /></button>
      </div>

    </header>
  );
}