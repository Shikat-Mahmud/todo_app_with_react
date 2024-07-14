import { useState } from "react";

export const TodoForm = ({onAddToDo}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onAddToDo(inputValue);

        // clear input after adding a task
        setInputValue("");
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
    );
}