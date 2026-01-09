import React, { useState } from "react";
import TodoList from "./TodoList";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Master Lifting State Up", completed: false },
  ]);

  const [hideButtons, setHideButtons] = useState(false);

  const handleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
    setHideButtons(true); 
  };

  return (
    <div>
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        hideButtons={hideButtons}
      />
    </div>
  );
};

export default App;


