import React, { useState } from "react";
type Props = {
  children: React.ReactNode;
  onSubmit: () => void;
};

const Form = ({ children, onSubmit }: Props) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
