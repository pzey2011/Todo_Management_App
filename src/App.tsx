import React, { useEffect, useState } from "react";
import "./assets/styles.css";
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
  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleEditTodo = (id: number, text: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = { id: todo.id, todo: text, isDone: todo.isDone };
        return newTodo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };
  const handleDoneTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = { id: todo.id, todo: todo.todo, isDone: !todo.isDone };
        return newTodo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <div className="main_container">
        <Form onSubmit={addTodo}>
          <InputField
            value={todo}
            setValue={setTodoInput}
            placeholder={"Add a task"}
          />
          <Button type="submit" activated={todo.length !== 0 ? true : false} />
        </Form>
        <TodoList
          todos={todos}
          handleDelete={(id: number) => handleDeleteTodo(id)}
          handleEdit={(id: number) => handleEditTodo(id)}
          handleDone={(id: number) => handleDoneTodo(id)}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
