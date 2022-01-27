import { useState } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import Form from "./components/Form";
import Button from "./components/Button";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const setTodoInput = (input: string) => {
    setTodo(input);
  };
  const addTodo = (input: string) => {
    setSubmitted(!submitted);
    console.log("submitted!");
  };
  return (
    <Form onSubmit={addTodo}>
      <InputField
        value={todo}
        setValue={setTodoInput}
        placeholder={"Enter your password"}
      />
      <Button />
    </Form>
  );
};

export default App;
