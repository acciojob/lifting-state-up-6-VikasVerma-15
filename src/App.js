import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button
            onClick={() => handleComplete(todo.id)}
            disabled={todo.completed}
          >
            Complete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default App;
