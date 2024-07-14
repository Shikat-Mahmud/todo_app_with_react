import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";


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

    // todo date and time
    // const [dateTime, setDateTime] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // used useEffect to prevent memory leakage
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            // setDateTime(`Date: ${formattedDate} Time: ${formattedTime}`)
            setDate(formattedDate)
            setTime(formattedTime)
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", backgroundColor: "#fff", padding: "6px 20px", borderRadius: "8px", color: "#000" }}>
                    <h2 style={{ display: "flex", alignItems: "center", gap: "5px" }}><MdOutlineDateRange /> {date}</h2>
                    <h2 style={{ display: "flex", alignItems: "center", gap: "5px" }}><IoMdTime /> {time}</h2>
                </div>
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
                <section className="clear-btn">
                    <button
                        type="button"
                        style={{ background: "none", color: "#fff" }}
                        onClick={handleClearAll}
                    >
                        Clear All
                    </button>
                </section>
            )}
        </section>
    );
};