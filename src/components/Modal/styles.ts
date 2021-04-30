import styled from 'styled-components';

//Interfaces
import { PositionModal, Order } from './interfaces'

//Assets
import colors from '../../assets/css/colors';

export const Overlay = styled.div`
    background: transparent linear-gradient(89deg, #000000 0%, #212121BC 67%, #80808000 100%) 0% 0% no-repeat padding-box;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    @media (max-width: 480px){
        align-items: flex-end;
        justify-content: center;
    }
`

export const Container = styled.div`
    position: relative;
    bottom: ${(p: PositionModal) => `${p.bottom}px`};
    left: ${(p: PositionModal) => `${p.left}px`};
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 41.1875rem;
    height: 27.4375rem;

    background: transparent linear-gradient(90deg, #FF0000 0%, #400E0E 100%) 0% 0% no-repeat padding-box;
    border-radius: 1.875rem;

    @media (max-width: 480px){
        left: 0;
        width: auto;
    }
`;

export const Image = styled.img`
    width: 18.0625rem;
    height: 100%;
    order: ${(p: Order) => p.positionOrder === 0 ? 1 : 2};
    border-radius: 1.875rem;

    @media (max-width: 480px){
        width: 14.0625rem;
    }
`;

export const DescriptionContainer = styled.div`
    width: calc(100% - 18.0625rem);
    height: 100%;

    order: ${(p: Order) => p.positionOrder === 0 ? 2 : 1};

    padding-left: 2.5625rem;
    padding-right: 1.25rem;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.h1`
    margin: 0;
    font: normal normal bold 1.625rem Axiforma;
    color: ${colors.white};
    margin-top: 3.4375rem;
`;

export const ValuationText = styled.h2`
    margin: 0;
    line-height: 1.375rem;
    font: normal normal bold 1.375rem Axiforma;
    color: ${colors.white};
    margin-bottom: 0.9375rem;
`;

export const Close = styled.button`
    position: relative;
    top: 11.25rem;
    bottom: 0px;
    left: ${(p: Order) => p.positionOrder === 0 ? "19.6875rem" : "16.5675rem"};
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 1.875rem;
    height: 1.5625rem;
    
    order: 1;
    padding: 0px;
    border: 2px solid ${colors.white};
    border-radius: 0.9375rem;
    outline: none;
    background-color: transparent;
`;

export const Appearances = styled.h2`
    margin: 0;
    font: normal normal bold 1rem Axiforma;
    color: ${colors.white};
`;

export const AppearancesText = styled.p`
    margin: 0;
    line-height: 0px;
    font: normal normal 100 1rem Axiforma;
    color: ${colors.white};
`;

export const DescriptionText = styled.p`
    margin: 0;
    font: normal normal 100 0.75rem Axiforma;
    color: ${colors.white};
`;

export const SubTitle = styled.h3`
    margin: 0;
    font: normal normal normal 0.75rem Axiforma;
    margin-top: 0.375rem;
    margin-bottom: 0.3125rem;
    color: #FFFFFF;
`;

export const ShopOptions = styled.div`
    display: flex;
    align-items: center;
`

export const LogoBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 3.0625rem;
    height: 2.9375rem;

    border-radius: 0.5625rem;
    background-color: ${colors.white};
`;

export const StarsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 9.75rem;

    margin-bottom: 3rem;
`;