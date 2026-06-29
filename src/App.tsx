import "./App.css";

import Sidebar from "./components/SidebarTemp";
import TitleBar from "./components/TitlebarTemp";
import Explorer from "./components/Explorer";
import Editor from "./components/Editor";
import StatusBar from "./components/StatusbarTemp";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <section className="workspace">

        <TitleBar />

        <div className="content">
          <Explorer />
          <Editor />
        </div>

        <StatusBar />

      </section>

    </div>
  );
}

export default App;