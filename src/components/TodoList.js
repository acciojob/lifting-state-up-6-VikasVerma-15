import React, { useState } from "react";

const TodoList = ({ todos, handleComplete }) => {
  const [hideButton, setHideButton] = useState(false);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: hideButton ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          {!hideButton && (
            <button
              onClick={() => {
                handleComplete(todo.id);
                setHideButton(true);
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


