import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
interface ToDoTask {
    name: string;
    id: string;
}
const ToDoList = () => {
    const [task, setTask] = useState('');
    const [tasksList, setTaskslist] = useState<ToDoTask[]>([]);
    const [taskId, setTaskId] = useState<string>('')
    const [clickedEditTask, setClickedEditTask] = useState<Boolean>(false);
    const [taskEdited, setTaskEdited] = useState<string>(task);

    const handleChangeAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleClickAddTask = (task: string) => {
        setTask('')
        setTaskslist([...tasksList, {
                            name: task,
                            id: uuid()
                    }])
    }

    const handleClickRemoveTask = (id: string) => {
        setTaskslist(tasksList.filter((task) => {
            return task.id !== id;
        }))
    }

    const handleClickEditedBtn = (id: string) => {
        setClickedEditTask(true);
        setTaskId(id);
    }

    const handleChangeEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskEdited(e.target.value);
    }

    const handleClickSaveEditTask = (taskEdited: string, currentTask: ToDoTask) => {
        setTaskslist(
            tasksList.map((task) => {
                if (task.id === currentTask.id) {
                    currentTask.name = taskEdited;
                    return currentTask;
                } else {
                    return task;
                }
                
            })
        )
        setClickedEditTask(false);
    }

    return (
        <div style={{ border: '1px solid green', padding: '30px', marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold' }}>---- To do list ----</p>
            <div>
                <input type="text" placeholder="Add your task" value={task} onChange={(e) => handleChangeAddTask(e)}></input>
                <button type="button" onClick={() => handleClickAddTask(task)}>Add</button>
            </div> 
            {tasksList.map((task: ToDoTask) => {
                return (
                    <div>
                        {clickedEditTask && task.id === taskId ?
                            <div>
                                <input type="text" value={taskEdited} onChange={(e) => handleChangeEditTask(e)}></input>
                                <button type="button" onClick={() => handleClickSaveEditTask(taskEdited, task)}>Save</button>
                            </div>
                            :
                            <div>
                                <p>{task.name}</p>
                                <button type="button" onClick={() => handleClickRemoveTask(task.id)}>Remove</button>
                                <button type="button" onClick={() => handleClickEditedBtn(task.id)}>Edited</button>
                            </div>
                        }
                    </div>
                )
            })}    
        </div>
   )
}

export default ToDoList;
