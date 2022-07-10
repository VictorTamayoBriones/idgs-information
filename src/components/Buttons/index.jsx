import { ButtonStyled } from "./style"

export const Button = ({ onClick, children }) =>{
    return(
        <ButtonStyled onClick={onClick} >
            {children}
        </ButtonStyled>
    )
}