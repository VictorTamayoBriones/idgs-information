import { useSelector } from "react-redux"

export const TeachersList = () => {
    const teachers = useSelector(state => state.teachers);
    console.log(teachers);
    return(
        <ul>
            {
                teachers.map( teacher => (
                    <li>
                        <div>
                            <h2>{ teacher.name }</h2>
                            <p>{ teacher.especialidad }</p>
                            <div>
                                <ul>
                                    {
                                        teacher.materias.map(materia => (
                                            <li>{materia}</li>
                                        ))
                                    }    
                                </ul>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}