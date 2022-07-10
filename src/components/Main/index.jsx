import styled from 'styled-components';
import { theme } from '../../theme';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: ${theme.azul};
    padding: 20px;
    h1{
        color: ${theme.amarrillo};
        text-shadow: 0px 0px 9px #ffae00ac;
        font-size: 50px;
        text-align: center;
        animation: light 3s infinite;

        @keyframes light {
            10%{
                text-shadow: 0px 0px 9px #ffae00ac;
            }
            25%{
                text-shadow: 0px 0px 9px rgba(255, 174, 0, 0);
            }
            50%{
                text-shadow: 0px 0px 9px #ffae00ac;
            }
            75%{
                text-shadow: 0px 0px 9px rgba(255, 174, 0, 0);
            }
            100%{
                text-shadow: 0px 0px 9px #ffae00ac;
            }
        }
    }
`;