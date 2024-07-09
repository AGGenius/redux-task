import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, changeTask } from "../redux/todosSlice";

export function Tasks() {
    const tasks = useSelector((state) => state.tasks);
    const [taskText, setTaskText] = useState("");
    const dispatch = useDispatch();

    const handleTaskChange = (e) => {
        setTaskText(e.target.value);
    }

    const handleAddTask = () => {
        dispatch(addTask(taskText));
        setTaskText("");
    }

    const handleChangeState = (id) => {
        dispatch(changeTask(id));
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    }

    return (
        <>
            <div>
                <input type="text" value={taskText} onChange={handleTaskChange}></input>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul>
                {tasks.length >= 1 && tasks.map((task, index) => (
                    <li key={task.id}>
                        <p>task: {task.task}</p>
                        <p>state: {task.state ? "Done" : "Pending"}</p>
                        <button onClick={() => handleChangeState(task.id)}>Change State</button>
                        <button onClick={() => handleDeleteTask(index)}>Delete Task</button>
                    </li>
                ))}
            </ul>
        </>
    )
}