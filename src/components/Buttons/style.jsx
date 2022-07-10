import styled from 'styled-components';
import { theme } from '../../theme';

export const ButtonStyled = styled.button`
    background: ${ theme.naranja };
    color: #fff;
    border: solid 1px #fff;
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 18px;
    cursor: pointer;
    transition: .3s ease all;
    &:hover{
        box-shadow: 0 0 9px #ff9d00;
    }
`;