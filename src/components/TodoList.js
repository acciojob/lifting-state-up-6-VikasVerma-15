import React, { useState } from "react";

const TodoList = ({ todos, handleComplete }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          {!clicked && (
            <button
              onClick={() => {
                handleComplete(todo.id);
                setClicked(true);
              }}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;


