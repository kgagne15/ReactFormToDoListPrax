import React, {useState} from "react";

const NewToDoForm = ({addTask}) => {
    const INITIAL_STATE = {
        task: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">To Do: </label>
            <input 
                id="task"
                type="text"
                name="task"
                placeholder="To Do"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewToDoForm;