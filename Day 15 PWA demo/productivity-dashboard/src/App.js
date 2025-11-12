import React, { useState } from "react";
import "./App.css";
import { useUser } from "./contexts/UserContext";
import ThemeToggle from "./components/ThemeToggle";
import InstallPrompt from "./components/InstallPrompt";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const { user, login, logout } = useUser();
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header>
        <h1>Productivity Dashboard</h1>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <ThemeToggle />
          <InstallPrompt />
        </div>
      </header>

      {user.loggedIn ? (
        <>
          <p>
            Welcome, <strong>{user.name}</strong>
          </p>
          <button onClick={logout}>Logout</button>

          <section>
            <h2>Your Tasks</h2>
            <TaskForm />
            <TaskList />
          </section>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (name.trim()) login(name);
          }}
          style={{ marginTop: "20px" }}
        >
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: "var(--input-bg)",
              color: "var(--input-text)",
              border: "1px solid var(--border-color)",
              borderRadius: "6px",
              padding: "8px 10px",
            }}
          />
          <button
            type="submit"
            style={{
              marginLeft: "10px",
              backgroundColor: "var(--button-bg)",
              color: "var(--button-text)",
              border: "1px solid var(--border-color)",
              borderRadius: "6px",
              padding: "8px 14px",
            }}
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
