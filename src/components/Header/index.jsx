import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../Buttons"
import { HeaderStyled } from "./style"

export const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate()

    const handleClick = () => pathname === '/create-teacher' ? navigate('/') : navigate('/create-teacher');

    return(
        <HeaderStyled>
            <h1>IDGS - DETAILS</h1>
            <Button onClick={handleClick} >{ pathname === '/create-teacher' ? 'Go Home' : 'Add Teacher' }</Button>
        </HeaderStyled>
    )
}