import { useSelector } from "react-redux"
import { Teachercard } from "../TeacherCard";

export const TeachersList = () => {
    const teachers = useSelector(state => state.teachers);
    console.log(teachers);
    return(
        <ul>
            {teachers.map( ({id, name, especialidad, materias}) => (
                <Teachercard key={id} name={name} especialidad={especialidad} materias={materias} />
            ))}
        </ul>
    )
}