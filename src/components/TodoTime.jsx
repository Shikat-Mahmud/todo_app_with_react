import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

export const TodoTime = () => {
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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", backgroundColor: "#fff", padding: "6px 20px", borderRadius: "8px", color: "#000" }}>
            <h2 style={{ display: "flex", alignItems: "center", gap: "5px" }}><MdOutlineDateRange /> {date}</h2>
            <h2 style={{ display: "flex", alignItems: "center", gap: "5px" }}><IoMdTime /> {time}</h2>
        </div>
    );
};