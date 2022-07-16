import { configureStore } from "@reduxjs/toolkit"
import TeachersReducer from './features/teachersSlicie';

export const store = configureStore({
    reducer:{
        teachers: TeachersReducer
    }
})