import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false }
  ]);

  const handleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = true;
    setTodos(updated);
  };

  return <TodoList todos={todos} handleComplete={handleComplete} />;
}

export default App;

