import React from "react";
import DeleteTodo from "./DeleteTodo";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";

const Task = () => {
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Function</th>
      </tr>
      <tr>
        <th>1</th>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <th>
          <div className="container_todo_list_button">
            <DeleteTodo />
            <EditTodo />
          </div>
        </th>
      </tr>
    </table>
  );
};

export default Task;
