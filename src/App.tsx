import { useState } from "react";
import "./styles.css";
import InputField from "./components/InputField";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const setTodoInput = (input: string) => {
    setTodo(input);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <InputField
        value={todo}
        setValue={setTodoInput}
        placeholder={"Enter your password"}
      />
    </div>
  );
};

export default App;
