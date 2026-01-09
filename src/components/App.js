import React, { useState } from "react";
import TodoList from "./TodoList";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: true }
          : todo
      )
    );
  };

  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;




