import React, { useState } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import Form from "./components/Form";
import Button from "./components/Button";
import { TodoType } from "./types/Types";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const setTodoInput = (input: string) => {
    setTodo(input);
  };
  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = { id: Date.now(), todo, isDone: false };
    setTodos([...todos, newTodo]);
    setTodo("");
  };
  const todosList = todos.map((todo) => (
    <li key={todo.id}>
      {todo.todo}
      {" isDone: " + todo.isDone}
    </li>
  ));
  return (
    <React.Fragment>
      <Form onSubmit={addTodo}>
        <InputField
          value={todo}
          setValue={setTodoInput}
          placeholder={"Enter a task"}
        />
        <Button type="submit" activated={todo.length !== 0 ? true : false} />
      </Form>
      <TodoList todos={todos} />
    </React.Fragment>
  );
};

export default App;
