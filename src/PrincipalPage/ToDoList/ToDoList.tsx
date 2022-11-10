import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import styles from './ToDoList.module.css';

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
        <div className={styles.content}>
            <p className={styles.title}>---- To do list ----</p>
            <div className={styles.taskNameContent}>
                <input type="text" placeholder="Add your task" className={styles.input} value={task} onChange={(e) => handleChangeAddTask(e)}></input>
                <button type="button" className={styles.addButton}onClick={() => handleClickAddTask(task)}>Add</button>
            </div> 
            {tasksList.map((task: ToDoTask) => {
                return (
                    <div>
                        {clickedEditTask && task.id === taskId ?
                            <div>
                                <input type="text" value={taskEdited} className={styles.input} onChange={(e) => handleChangeEditTask(e)}></input>
                                <button type="button" className={styles.save} onClick={() => handleClickSaveEditTask(taskEdited, task)}>Save</button>
                            </div>
                            :
                            <div className={styles.taskName}>
                                <p className={styles.task}>{task.name}</p>
                                <div>
                                    <button type="button" className={styles.remove} onClick={() => handleClickRemoveTask(task.id)}>X</button>
                                    <button type="button" className={styles.edited} onClick={() => handleClickEditedBtn(task.id)}>Edited</button>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}    
        </div>
   )
}

export default ToDoList;
