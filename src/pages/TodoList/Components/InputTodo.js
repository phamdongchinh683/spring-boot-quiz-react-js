import React from "react";
import Input from "../../../components/Forms/Input";

const InputTodo = () => {
  const commonProps1 = {
    type: "text",
    placeholder: "Enter Todo",
    className: "todo_list_input",
  };

  const commonProps2 = {
    type: "text",
    placeholder: "Enter Todo",
    className: "todo_list_input",
  };

  const commonProps3 = {
    type: "text",
    placeholder: "Enter Todo",
    className: "todo_list_input",
  };
  return (
    <div className="container-input-todo">
      <Input {...commonProps1} />
      <Input {...commonProps2} />
      <Input {...commonProps3} />
    </div>
  );
};

export default InputTodo;
