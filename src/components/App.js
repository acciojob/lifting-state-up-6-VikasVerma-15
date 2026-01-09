import React, { useState } from "react";
import TodoList from "./TodoList";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Master Lifting State Up", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;



