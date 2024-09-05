import { createContext, useState, useContext } from "react";

const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [todos, setTodos] = useState(initToDoList());

  // Save todos to localStorage whenever they change
  const updateTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.clear();
    newTodos.forEach((todo) => {
      localStorage.setItem(todo.id, JSON.stringify(todo));
    });
  };

  return (
    <ToDoContext.Provider value={{ todos, updateTodos }}>
      {children}
    </ToDoContext.Provider>
  );
}

export function useToDo() {
  const context = useContext(ToDoContext);
  if (context === undefined) {
    throw new Error("useToDo must be used within a ToDoProvider");
  }
  return context;
}

function initToDoList() {
  const todolist = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      todolist.push(JSON.parse(localStorage.getItem(key)));
    }
  }
  return todolist;
}
