import { TodoType } from "../types/Types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../assets/todo.css";

type Props = {
  todoObj: TodoType;
};
const Todo = ({ todoObj }: Props) => {
  const { isDone, todo, id } = todoObj;

  const handleEdit = (todo: TodoType) => {
    console.log("edit");
  };
  const handleDelete = (todo: TodoType) => {
    console.log("delete");
  };

  return (
    <div className="todo_container">
      <div className="todo_right">{todo}</div>
      <div className="todo_left">
        <div onClick={() => handleEdit(todoObj)}>
          <AiFillEdit />
        </div>
        <div onClick={() => handleDelete(todoObj)}>
          <AiFillDelete />
        </div>
        <div onClick={() => handleDelete(todoObj)}>
          <MdDone />
        </div>
      </div>
    </div>
  );
};

export default Todo;
