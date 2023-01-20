import { useContext } from "react";
import { useSelector } from "react-redux";
import ColorContext from "../../../Context/ColorContext";
import { useAppDispatch } from "../Store/Store";
import { addTask, deleteTask, sendTask } from "../Store/tasks.slice";
import styles from './Todolist.module.css';

const Todolist = () => {
  const {lightOn, setLightOn} = useContext(ColorContext);
  const tasksStore = useSelector((state: any) => state.tasksStore);
  const dispatch = useAppDispatch();
  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addTask(e.target.value))
  }

  const handleClickSendTask = () => {
    dispatch(sendTask())
  }

  const handleClickDeleteTask = (index: number) => {
    dispatch(deleteTask(index))
  }

  return (
  <div className={lightOn ? styles.lightContent : styles.content}>
     <p className={lightOn ? styles.lightTitle : styles.title}>---- To do list with redux----</p>
     <div className={styles.taskNameContent}>
      <input placeholder="task" className={styles.input} onChange={(e) => handleChangeTask(e)}></input>
      <button type="button" className={styles.send} onClick={handleClickSendTask}>Send</button>
     </div>
      {tasksStore.tasks.map((task: string, index: number) => {
        return(
          <div>
            <p key={index}>{task}</p>
            <button type="button" className={styles.remove}  onClick={() => handleClickDeleteTask(index)}>Delete</button>
          </div>
        )
      })}
  </div>
  )
};

export default Todolist;
