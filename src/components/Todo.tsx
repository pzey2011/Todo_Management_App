import { TodoType } from "../types/Types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import "../assets/todo.css";
import { useState } from "react";
import InputField from "./InputField";

type Props = {
  todoObj: TodoType;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, text: string) => void;
  handleDone: (id: number) => void;
};
const Todo = ({ todoObj, handleDelete, handleEdit, handleDone }: Props) => {
  const { isDone, todo, id } = todoObj;
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo);
  const toggleEditing = () => {
    if (isDone) return;
    setIsEditing(!isEditing);
    if (isEditing) handleEdit(id, editingText);
  };
  const handleEditing = (value: string) => {
    setEditingText(value);
  };
  return (
    <div className="todo_container">
      <div className="todo_right">
        <input
          type="checkbox"
          className="done-checkbox"
          checked={isDone}
          onChange={() => handleDone(id)}
        />
        {!isDone ? (
          !isEditing ? (
            <span className="todo-text">{editingText}</span>
          ) : (
            <InputField
              value={editingText}
              setValue={handleEditing}
              placeholder={editingText}
            />
          )
        ) : (
          <s className="todo-text">{editingText}</s>
        )}
      </div>
      <div className="todo_left">
        <div onClick={() => toggleEditing()}>
          {!isEditing ? <AiFillEdit /> : <FiCheck />}
        </div>
        <div onClick={() => handleDelete(id)}>
          <AiFillDelete />
        </div>
      </div>
    </div>
  );
};

export default Todo;
