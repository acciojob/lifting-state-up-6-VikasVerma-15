import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false }
  ]);

  const handleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: true }
          : todo
      )
    );
  };

  return <TodoList todos={todos} handleComplete={handleComplete} />;
};

export default App;
