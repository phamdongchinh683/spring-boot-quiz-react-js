import React from "react";
import Input from "../../../components/Forms/Input";

const DeleteTodo = () => {
  const commonProps = {
    type: "button",
    value: "Delete",
    className: "todo_list_button",
  };
  return <Input {...commonProps} />;
};

export default DeleteTodo;
