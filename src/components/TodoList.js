import React from "react";
function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => toggleTodo(index)}>
            Complete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
