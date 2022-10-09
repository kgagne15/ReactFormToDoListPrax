import React, {useState} from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuid } from 'uuid';

const ToDoList = () => {
    const INITIAL_STATE = []

    const [tasks, setTasks] = useState(INITIAL_STATE);

    const addTask = (newTask) => {
        setTasks(tasks => [...tasks, {...newTask, id: uuid()}])
    }

    const removeTask = (id) => {
        let tasksCopy = [...tasks]
        tasksCopy.splice(id, 1);
        setTasks([...tasksCopy])
    }

    return (
        <div>
            <h3>To Do List</h3>
            <NewToDoForm addTask={addTask}/>
            <div>
                {tasks.map(({id, task}) => <ToDo removeTask={removeTask} id={id} key={id} task={task} />)}
            </div>
        </div>
    )
}

export default ToDoList;