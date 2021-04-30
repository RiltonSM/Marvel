import styled from 'styled-components';

//Interfaces
import { CardContainerParam } from './interfaces';

//Assets
import colors from '../../assets/css/colors';

export const Container = styled.div`
    display: flex;
    align-items: flex-end;

    width: 18.0625rem;
    height: 27.4375rem;

    border-radius: 1.875rem;
    background-image: url(${(p: CardContainerParam) => p.img});
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: 100%;
    height: 14.625rem;

    padding: 1.75rem 1.4375rem 1.4375rem 1.4375rem;

    background: transparent linear-gradient(180deg, #FF0000 0%, #8000004D 100%) 0% 0% no-repeat padding-box;
    border-radius: 1.875rem;
`;

export const Title = styled.h1`
    font: normal normal bold 1.25rem Axiforma;
    text-align: center;
    color: ${colors.white};
`;

export const DescriptionText = styled.p`
    margin: 0;
    font: normal normal 100 0.75rem Axiforma;
    color: #FFFFFF;
    flex: 2;
    max-height: 8rem;
    overflow-y: hidden;
`;

export const DetailsButton = styled.button`
    font: normal normal 100 1.25rem Axiforma;
    color: #FFFFFF;
    border: 0;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`