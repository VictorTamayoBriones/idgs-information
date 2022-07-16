export const Materia = ({name, onChange, value}) => {
    return(
        <div>
            <input type="text" name={name} placeholder="Materia"  value={value} onChange={onChange} />
        </div>
    )
}