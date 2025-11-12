import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        style={{
          padding: "10px",
          width: "70%",
          borderRadius: "6px",
          border: "1px solid var(--border-color)",
          backgroundColor: "var(--input-bg)",
          color: "var(--input-text)",
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
        Add
      </button>
    </form>
  );
}
