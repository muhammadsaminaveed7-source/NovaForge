import "./App.css";

import Sidebar from "./components/Sidebar";
import TitleBar from "./components/TitleBar";
import Explorer from "./components/Explorer";
import Editor from "./components/Editor";
import StatusBar from "./components/StatusBar";

function App() {
  return (
    <div className="app">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Workspace */}
      <section className="workspace">
        {/* Top Title Bar */}
        <TitleBar />

        {/* Explorer + Editor */}
        <div className="content">
          <Explorer />
          <Editor />
        </div>

        {/* Bottom Status Bar */}
        <StatusBar />
      </section>
    </div>
  );
}

export default App;