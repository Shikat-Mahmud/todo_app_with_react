import { MdCheck, MdDeleteForever } from "react-icons/md";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export const TodoList = ({ data, onHandleItemDelete }) => {
    return (
        <li className="todo-item">
            <span><BsArrowUpRightCircleFill style={{ color: "#4983ff", fontSize: "20px" }} /> {data}</span>
            <button className="check-btn">
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleItemDelete(data)}>
                <MdDeleteForever />
            </button>
        </li>
    );
};