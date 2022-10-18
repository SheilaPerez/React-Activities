import { useState } from "react";
import { v4 as uuid } from 'uuid';

interface Task {
    name: string,
    id: string,
    check: boolean
}
const CheckList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleChangeAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }
    const handleClickAdd = () => {
        setTask('');
        setTasks([...tasks, {
            name: task,
            id: uuid(),
            check: false
        }])
    }

    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                task.check = e.target.checked
            }
            return task
        }))
    }

    const handleClickDelteTask = (id: string) => {
        setTasks(tasks.filter((task) => {
            return task.id !== id;
        }))
    }

    return (
        <div style={{ border: '1px solid #B1AFFF', padding: '30px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold' }}>---- Check List ----</p>
            <div>
                <input type="text" placeholder="Write your task" value={task} onChange={(e) => handleChangeAdd(e)}></input>
                <button type="button" onClick={handleClickAdd}>Add</button>
            </div>
            {tasks.map((taskItem) => {
                return (<div>
                            <input type="checkbox" value={taskItem.id} onChange={(e) => handleChangeCheckbox(e, taskItem.id)} style={{display: 'inline-block', marginRight: '10px' }}></input>
                            <p style={{ display: 'inline-block', marginRight: '20px' }}>{taskItem.name}</p>
                            <button type="button" onClick={() => handleClickDelteTask(taskItem.id)} style={{display: 'inline-block', marginRight: '20px'}}>Delete</button>
                            {taskItem.check && <p style={{display: 'inline-block', color: 'green'}}>Done</p>}
                        </div>)      
                    })}
                                        

        </div>
    )
}

export default CheckList;