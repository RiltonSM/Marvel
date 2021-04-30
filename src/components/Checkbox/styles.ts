import styled from 'styled-components';

//Interfaces
import { CheckboxInterface } from './interfaces';

//Assets
import colors from '../../assets/css/colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 0.9375rem;
    height: 0.9375rem;

    background-color: ${(p: CheckboxInterface) => p.checked ? colors.red : colors.white};
    border: 1px solid ${colors.red};
    border-radius: 0.25rem;

    margin-right: 0.3125rem;
`;