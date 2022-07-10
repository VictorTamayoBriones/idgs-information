export const AddTeacherForm = () => {
    return(
        <form action="">
            <input type="text" name="name" placeholder="Teacher name" />
            <input type="text" name="especialidad" placeholder="Especialidad" />
            <div>
                <input type="text" name="materia" placeholder="Materia" />
                <button>Add materia</button>
            </div>
            <button>Save Teacher</button>
        </form>
    )
}