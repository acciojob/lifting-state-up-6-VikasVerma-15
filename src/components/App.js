import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a React app", completed: false },
    { text: "Deploy the React app", completed: false }
  ]);

  const handleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  return <TodoList todos={todos} handleComplete={handleComplete} />;
}

export default App;
