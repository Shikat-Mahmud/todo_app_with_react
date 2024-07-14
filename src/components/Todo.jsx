import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";


export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // do not add null value
        if (!inputValue) return;

        // do not add duplicate value
        if (task.includes(inputValue)) {
            setInputValue(""); //clear input
            return;
        }

        // add values to the array
        setTask((newTask) => [...newTask, inputValue]);

        // clear input after adding a task
        setInputValue("");
    };

    console.log(task);

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            style={{ color: "#000" }}
                            type="text"
                            className="todo-input"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>

            <section>
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn">
                                    <MdCheck />
                                </button>
                                <button className="delete-btn">
                                    <MdDeleteForever />
                                </button>
                            </li>
                        })
                    }
                </ul>
            </section>
        </section>
    );
};