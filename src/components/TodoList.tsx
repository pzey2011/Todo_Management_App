import React from "react";
import { TodoType } from "../types/Types";
import Todo from "./Todo";
type Props = {
  todos: TodoType[];
};
const TodoList = ({ todos }: Props) => {
  const todosList = todos.map((todo) => <Todo key={todo.id} todoObj={todo} />);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{todosList}</div>
  );
};

export default TodoList;
