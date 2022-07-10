import { useState } from "react"
import { ArrowDown, TeacherCardStyled } from "./style"


export const Teachercard = ({name, especialidad, materias}) => {

    const[showMaterias, setShowMaterias]=useState(false);

    const handleShowMaterias = ()=>setShowMaterias(!showMaterias);

    return(
        <TeacherCardStyled showList={showMaterias} >
            <h2>{ name }</h2>
            <p>{ especialidad }</p>
            
                
            <ArrowDown onClick={handleShowMaterias} showList={showMaterias} />
            <ul>
                <p>Materias</p>
                {
                    materias.map((materia, i) => (
                        <li key={i} >{materia}</li>
                    ))
                }    
            </ul>
        </TeacherCardStyled>
    )
}