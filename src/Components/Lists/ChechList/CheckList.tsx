import { useContext, useState } from "react";
import { v4 as uuid } from 'uuid';
import ColorContext from "../../../Context/ColorContext";
import styles from './CheckList.module.css';

interface Task {
    name: string,
    id: string,
    check: boolean
}
const CheckList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([]);
    const {lightOn, setLightOn} = useContext(ColorContext);

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
        <div className={lightOn ? styles.lightContent : styles.content}>
            <p className={lightOn ? styles.lightTitle : styles.title}>---- Check List ----</p>
            <div className={styles.addContent}>
                <input type="text" placeholder="Write your task" className={styles.inputTask} value={task} onChange={(e) => handleChangeAdd(e)}></input>
                <button type="button" className={styles.addBtn} onClick={handleClickAdd}>Add</button>
            </div>
            {tasks.map((taskItem) => {
                return (<div className={styles.taskContent}>
                            <input type="checkbox" value={taskItem.id} onChange={(e) => handleChangeCheckbox(e, taskItem.id)}></input>
                            <p className={lightOn ? styles.lightTaskItem : styles.taskItem}>{taskItem.name}</p>
                            <button type="button" onClick={() => handleClickDelteTask(taskItem.id)} className={styles.delete}>X</button>
                            {taskItem.check && <p className={styles.done}>Done</p>}
                        </div>)      
                    })}
                                        

        </div>
    )
}

export default CheckList;