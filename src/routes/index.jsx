import { Route, Routes } from "react-router-dom"
import { TeachersList } from "../components/TeachersList"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <TeachersList/> } />
        </Routes>
    )
}