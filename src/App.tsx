import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>NF</h2>

        <button>📁</button>
        <button>🔍</button>
        <button>🤖</button>
        <button>🐙</button>
        <button>⚙️</button>
      </aside>

      <main className="workspace">
        <h1>NovaForge</h1>
        <p>Welcome to the future of software development.</p>

        <div className="welcome-card">
          <h2>🚀 Project Ready</h2>
          <p>Your AI development workspace starts here.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
