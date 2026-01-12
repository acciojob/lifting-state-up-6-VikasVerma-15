import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
  ]);

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return <TodoList todos={todos} toggleTodo={toggleTodo} />;
}

export default App;
