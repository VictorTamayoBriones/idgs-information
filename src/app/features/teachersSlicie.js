import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = []

export const TeachersSlice = createSlice({
    name: 'teachers',
    initialState: INITIAL_STATE,
    reducers:{
        addTeacher: (state, action)=>{
            state.push(action.payload);
        }
    }
})
export const { addTeacher } = TeachersSlice.actions;
export default TeachersSlice.reducer;