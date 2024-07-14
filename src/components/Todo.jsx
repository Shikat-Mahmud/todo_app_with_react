import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { MdCheck, MdDeleteForever, MdOutlineDateRange } from "react-icons/md";


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
                <div style={{display: "flex",alignItems: "center", justifyContent: "center", gap: "20px", backgroundColor: "#fff", padding: "6px", borderRadius: "8px", color: "#000"}}>
                    <h2 style={{display: "flex", alignItems: "center", gap: "5px"}}><MdOutlineDateRange /> {date}</h2>
                    <h2 style={{display: "flex", alignItems: "center", gap: "5px"}}><IoMdTime /> {time}</h2>
                </div>
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

            <section className="myUnOrdList">
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