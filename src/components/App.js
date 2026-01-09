import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" }
  ]);

  const handleComplete = () => {
    setTodos([]); // remove all todos AFTER click
  };

  return <TodoList todos={todos} handleComplete={handleComplete} />;
};

export default App;
