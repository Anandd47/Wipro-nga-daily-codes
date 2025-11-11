import React, { useState, useEffect } from 'react';
import dispatcher from './dispatcher';

const todos = [];
const listeners = [];

function emitChange() {
  listeners.forEach((listener) => listener());
}

dispatcher.register((action) => {
  switch (action.type) {
    case 'ADD_TODO':
      todos.push(action.payload);
      emitChange();
      break;
    default:
      break;
  }
});

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const onChange = () => setList([...todos]);
    listeners.push(onChange);
    onChange(); 
    return () => {
      const idx = listeners.indexOf(onChange);
      if (idx > -1) listeners.splice(idx, 1);
    };
  }, []);

  const addTodo = () => {
    if (!text.trim()) return;
    dispatcher.dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>Simple Flux Todo</h2>
      <input
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo} style={{ marginLeft: 10 }}>Add</button>

      <ul style={{ marginTop: 20 }}>
        {list.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
