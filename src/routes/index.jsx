import { Route, Routes } from "react-router-dom"
import { AddTeacherForm } from "../components/AddTeacherForm"
import { TeachersList } from "../components/TeachersList"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <TeachersList/> } />
            <Route path="/create-teacher" element={ <AddTeacherForm/> } />
        </Routes>
    )
}