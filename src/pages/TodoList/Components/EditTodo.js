import React from "react";
import Input from "../../../components/Forms/Input";

const EditTodo = () => {
  const commonProps = {
    type: "button",
    value: "Edit",
    className: "todo_list_button",
  };
  return <Input {...commonProps} />;
};

export default EditTodo;
