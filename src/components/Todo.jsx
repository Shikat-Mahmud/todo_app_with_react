import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoTime } from "./TodoTime";
import { TodoClearAll } from "./TodoClearAll";


export const Todo = () => {
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {

        // do not add null value
        if (!inputValue) return;

        // do not add duplicate value
        if (task.includes(inputValue)) return;

        // add values to the array
        setTask((newTask) => [...newTask, inputValue]);
    };


    // todo single task delete
    const handleItemDelete = (value) => {
        const updatedTask = task.filter((item) => item !== value);
        setTask(updatedTask);
    }

    // todo clear all
    const handleClearAll = () => {
        setTask([]);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoTime />
            </header>
            <TodoForm onAddToDo={handleFormSubmit} />
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return (
                                <TodoList
                                    Key={index}
                                    data={curTask}
                                    onHandleItemDelete={handleItemDelete}
                                />
                            );
                        })
                    }
                </ul>
            </section>
            {task.length > 0 && (
                <TodoClearAll onHandleClearAll={handleClearAll} />
            )}
        </section>
    );
};