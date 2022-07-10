import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [
    {
        id: '1',
        name:'Francisco Lopez Briones',
        especialidad: 'Redes',
        materias: ['Desarrollo web', 'Infrestructura de redes', 'Desarrollo web profesional', 'POO']
    },
    {
        id: '2',
        name:'Diana Lizeth Ahuatzy Reyes',
        especialidad: 'Documentación',
        materias: ['Gestión de proyecto', 'Metodologias de proyectos', 'PMP', 'IEEE']
    },
]

export const TeachersSlice = createSlice({
    name: 'teachers',
    initialState: INITIAL_STATE,
    reducers:{}
})

export default TeachersSlice.reducer;