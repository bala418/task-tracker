import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  return (
    <div
      className={`task ${props.task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => props.onoToggle(props.task.id)}
    >
      <h3>
        {props.task.text}
        <FaTimes
          style={{ cursor: "pointer", color: "red" }}
          onClick={() => props.onnnDelete(props.task.id)}
        />
      </h3>
      <p>{props.task.day}</p>
    </div>
  );
};

export default Task;
