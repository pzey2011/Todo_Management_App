import React from "react";
import { TodoType } from "../types/Types";
import Todo from "./Todo";
type Props = {
  todos: TodoType[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number, text: string) => void;
  handleDone: (id: number) => void;
};
const TodoList = ({ todos, handleDelete, handleEdit, handleDone }: Props) => {
  const todosList = todos.map((todo) => (
    <Todo
      key={todo.id}
      todoObj={todo}
      handleDelete={(id: number) => handleDelete(id)}
      handleEdit={(id: number, text: string) => handleEdit(id, text)}
      handleDone={(id: number) => handleDone(id)}
    />
  ));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{todosList}</div>
  );
};

export default TodoList;
