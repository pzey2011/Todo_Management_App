import {useState,Component} from 'react';
import "./styles.css";
import InputField from "./components/InputField";
type Props = {};

type State = {
  todo: string;
};
class App extends Component<Props,State> {

  state = {};
  setTodoInput = (input:string) =>{
    setTodo(input);
  }
  return(){
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <InputField value={todo} setValue={setTodoInput} placeholder={"Enter your password"}/>   
      </div>
    );
  }
}

export default App;
