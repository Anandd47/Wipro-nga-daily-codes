import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../store/tasksSlice";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  if (!tasks || tasks.length === 0) {
    return <p style={{ marginTop: "20px" }}>No tasks yet. Add one above.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "8px 0",
            padding: "10px 14px",
            borderRadius: "8px",
            background: "var(--card-bg)",
            color: "var(--text)",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flex: 1,
              textDecoration: task.completed ? "line-through" : "none",
              color: "var(--text)",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
              style={{ accentColor: "var(--accent)" }}
            />
            {task.title}
          </label>

          <button
            onClick={() => dispatch(deleteTask(task.id))}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bold",
              color: "var(--text)",
            }}
            title="Delete Task"
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}
