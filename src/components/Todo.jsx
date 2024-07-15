import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoTime } from "./TodoTime";
import { TodoClearAll } from "./TodoClearAll";


export const Todo = () => {
    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        // to check if the input field is empty or not
        if (!inputValue.content) return;

        // to check if the data is already existing or not
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
        if (ifTodoContentMatched) return;

        // add values to the array
        setTask((newTask) => [...newTask, { id, content, checked }]);
    };


    // todo single task delete
    const handleItemDelete = (value) => {
        const updatedTask = task.filter((item) => item.content !== value);
        setTask(updatedTask);
    }

    const handleCheckedTodo = (content) => {

        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            } else {
                return curTask;
            }
        });

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
                        task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleItemDelete={handleItemDelete}
                                    onHandleCheckedTodo={handleCheckedTodo}
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