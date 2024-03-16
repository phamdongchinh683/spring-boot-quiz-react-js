import React from "react";
import Input from "../../../components/Forms/Input";

const AddTodo = () => {
  const commonProps = {
    type: "button",
    value: "Add",
    className: "todo_list_button add",
  };
  return <Input {...commonProps} />;
};

export default AddTodo;
