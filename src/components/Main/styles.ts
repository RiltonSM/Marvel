import styled from 'styled-components';

// Interface
import { MainProps } from './interfaces';

const Main = styled.main`
    display:flex;
    flex-direction: column;
    flex-basis: calc(100% - 7.125rem);

    padding-top: ${(p: MainProps) => p.haveSelect ? "4.625rem" : "8.6875rem"};
    padding-left: 9.1875rem;

    @media (max-width: 700px){
        padding-left: 3.4375rem;
    }

    @media (max-width: 480px){
        padding-left: 30%;
    }

    @media (max-width: 375px){
        padding-left: 27%;
    }

    @media (max-width: 320px){
        padding-left: 22%;
    }
`;

export default Main;