import { TodoType } from "../types/Types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todoObj: TodoType;
};
const Todo = ({ todoObj }: Props) => {
  const { isDone, todo } = todoObj;
  return (
    <div style={{ display: "flex" }}>
      <div>{todo}</div>
      <AiFillEdit />
      <AiFillDelete />
      <MdDone />
    </div>
  );
};

export default Todo;
