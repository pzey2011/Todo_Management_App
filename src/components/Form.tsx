import React from "react";
import "../assets/form.css";
type Props = {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

const Form = ({ children, onSubmit }: Props) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
