import { configureStore } from "@reduxjs/toolkit"
import TeachersReducer from './features/teachers';

export const store = configureStore({
    reducer:{
        teachers: TeachersReducer
    }
})