import React, { useState } from "react";

import "./App.css";
import InputFeild from "./component/InputFeild";
import TodoList from "./component/TodoList";
import { Todo } from "./modal";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    console.log(todos);
  };
  console.log(todo);
  return (
    <div className="App">
      <span className="heading">Todo</span>

      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
