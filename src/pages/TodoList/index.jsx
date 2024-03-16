import React from "react";
import "./index.scss";
import AddTodo from "./Components/AddTodo";
import TaskList from "./Components/TaskList";

const TodoList = () => {

    return (
        <>
            <div className="container_todo_list_title">
                <h1>Tasks List</h1>
                <AddTodo />
            </div>
            <TaskList />
        </>
    );
};

export default TodoList;