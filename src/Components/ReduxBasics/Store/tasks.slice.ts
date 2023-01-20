import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        task: '',
        tasks: []
    },
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const task = action.payload;
            state.task = task;
        },
        sendTask: (state: any) => {
            state.tasks = [...state.tasks, state.task]
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((task, index) => {
                return index !== action.payload;
            })
        }

    }
})

export const {addTask, sendTask, deleteTask} = tasksSlice.actions;
export default tasksSlice;