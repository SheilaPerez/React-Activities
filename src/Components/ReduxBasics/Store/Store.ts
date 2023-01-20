import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tasksReducer from './tasks.slice';

const store = configureStore({
    reducer: {
        tasksStore: tasksReducer.reducer,
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;