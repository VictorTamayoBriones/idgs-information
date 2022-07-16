import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTeacher } from "../../app/features/teachersSlicie";
import { v4 } from "uuid";

export const AddTeacherForm = () => {
    const uuid = v4();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formDataTeacher, setFormDateTeacher]=useState(
        {
            id: uuid,
            name: '',
            especialidad: '',
            materias: [{materia: 'Redes'},{materia: 'Desarrollo web'}]
        }
    );

    const handleChange = ({target:{name, value}}, i) =>{

        if (name === 'name') {
            setFormDateTeacher({...formDataTeacher, name: value})
        }else if(name === 'especialidad'){
            setFormDateTeacher({...formDataTeacher, especialidad: value})
        }else{
            const values = [...formDataTeacher.materias];
            values[i][name] = value;
            setFormDateTeacher({...formDataTeacher, values});
        }
    }

    const handleAddMateria = (e) => {
        e.preventDefault();
        setFormDateTeacher({...formDataTeacher, materias:[...formDataTeacher.materias, {materia:''}]})
    }

    const handleSaveTeacher = (e) =>{
        e.preventDefault();
        dispatch(addTeacher(formDataTeacher));
        navigate('/');
    }

    return(
        <form>
            <input type="text" name="name" placeholder="Teacher name" value={formDataTeacher.name} onChange={(e)=>handleChange(e)} />
            <input type="text" name="especialidad" placeholder="Especialidad" value={formDataTeacher.especialidad}  onChange={(e)=>handleChange(e)} />
            <div>
                {
                    formDataTeacher.materias.map((materia, i) => (
                        <input key={i} type="text" name="materia" value={formDataTeacher.materias[i].materia} onChange={(e)=>handleChange(e, i)} placeholder="Materia" />
                    ))
                }
                <button onClick={handleAddMateria} >Add materia</button>
            </div>
            <button onClick={handleSaveTeacher} >Save Teacher</button>
        </form>
    )
}