import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  const anyCompleted = todos.some(todo => todo.completed);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          {!anyCompleted && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
