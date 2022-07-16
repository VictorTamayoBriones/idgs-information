import styled from 'styled-components';
import { theme } from '../../theme';
import { IconArrowDown } from '@tabler/icons';

export const TeacherCardStyled = styled.li`
    width: max-content;
    min-width: 200px;
    background: ${ theme.naranja };
    color: #fff;
    list-style: none;
    padding: 12px;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    ul{
        transition: .3s ease-in-out all;
        list-style: none;
        height: ${(props)=>props.showlist === 'open' ? 'max-content' : '0'};
        overflow: hidden;
    }
`;

export const ArrowDown = styled(IconArrowDown)`
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 3px;
    right: 6px;
    transition: .3s ease-in all;
    transform: ${ (props) => props.showlist === 'open' ? 'rotate(180deg)' : 'rotate(0deg)' };
    cursor: pointer;
`