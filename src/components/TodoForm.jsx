import { useState } from "react";

export const TodoForm = ({ onAddToDo }) => {
    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onAddToDo(inputValue);

        // clear input after adding a task
        setInputValue({ id: "", content: "", checked: false });
    };

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        style={{ color: "#000" }}
                        type="text"
                        className="todo-input"
                        autoComplete="off"
                        placeholder="Task Name"
                        value={inputValue.content}
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
    );
};