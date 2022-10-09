import React from "react";

const ToDo = ({removeTask, id, task}) => {
    return (
        <>
            <ul>
                <li>{task}</li>
            </ul>
            <button onClick={removeTask}>Remove Task</button>
        </>
    )
}

export default ToDo; 