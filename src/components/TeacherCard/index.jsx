import { useState } from "react"
import { ArrowDown, TeacherCardStyled } from "./style"


export const Teachercard = ({name, especialidad, materias}) => {

    const[showMaterias, setShowMaterias]=useState('close');

    const handleShowMaterias = ()=> setShowMaterias(showMaterias === 'close' ? 'open' : 'close');

    return(
        <TeacherCardStyled showlist={showMaterias} >
            <h2>{ name }</h2>
            <p>{ especialidad }</p>
            
                
            <ArrowDown onClick={handleShowMaterias} showlist={showMaterias} />
            <ul>
                <h3>Materias</h3>
                {
                    materias.map((materia, i) => (
                        <li key={i} >{materia.materia}</li>
                    ))
                }    
            </ul>
        </TeacherCardStyled>
    )
}