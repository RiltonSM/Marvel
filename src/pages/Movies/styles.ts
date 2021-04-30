import styled from 'styled-components';

//Assets
import colors from '../../assets/css/colors';
import selectIcon from '../../assets/images/select-arrow.svg';

//Interfaces
import { SelectProps } from './interfaces';

export const SelectContainer = styled.div`
    border: 1px solid ${colors.red};
    border-radius: 0.625rem;

`

export const Select = styled.select`
    appearance: none;

    width: 10.3135rem;
    height: 2.75rem;

    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid ${colors.red};
    border-radius: 0.625rem;

    margin-bottom: 1.3125rem;

    padding-left: 0.875rem;

    font: normal normal bold 1rem Axiforma;
    color: ${colors.red};

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background: ${colors.black} 0% 0% no-repeat padding-box;
    background-image: url(${selectIcon});
    background-position-x: 90%;
    background-position-y: 0.9375rem;

    &:focus {
        /* border-bottom: none; */
        outline: none;
    }
`;

export const Option = styled.option`
    font: normal normal bold 1rem Axiforma;
    color: ${colors.red};

    background-color: ${colors.black};

    border-left: 10px solid ${colors.red};
    border-right: 1px solid ${colors.red};

    &:focus {
        background-color: ${colors.black};
    }
`;

export const SelectContainerForDiv = styled.div`

`

export const SelectWithDiv = styled.div`
    position: relative;
    
    width: 10.3135rem;
    height: 2.75rem;

    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid ${colors.red};
    
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: ${(p: SelectProps) => p.isOpen ? "0rem" : "0.625rem"};
    border-bottom-left-radius: ${(p: SelectProps) => p.isOpen ? "0rem" : "0.625rem"};

    font: normal normal bold 1rem Axiforma;
    color: ${colors.red};

    margin-bottom: 1.3125rem;


    

    z-index: 100;

    cursor: pointer;
`;

export const OptionWithDiv = styled.div`
    display: ${(p: SelectProps) => p.isOpen ? "block" : "none"};

    width: calc(100% - 0.875rem);
    height: 2rem;

    padding-left: 0.875rem;

    margin-left: -1px;

    background-color: ${colors.black};
    color: ${colors.red};

    border-left: 1px solid ${colors.red};
    border-right: 1px solid ${colors.red};
    
    cursor: pointer;

    
`;

export const LastOptionWithDiv = styled.div`
    display: ${(p: SelectProps) => p.isOpen ? "block" : "none"};

    width: calc(100% - 0.875rem);
    height: 2rem;

    padding-left: 0.875rem;
    padding-bottom: 0.5rem;

    margin-left: -1px;

    background-color: ${colors.black};
    color: ${colors.red};

    border-left: 1px solid ${colors.red};
    border-right: 1px solid ${colors.red};
    border-bottom: 1px solid ${colors.red};
    border-bottom-right-radius: 0.625rem;
    border-bottom-left-radius: 0.625rem;

    cursor: pointer;
`;

export const SelectWithDivText = styled.p`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding-left: 0.875rem;
    padding-right: 0.875rem;
    
    margin: 0;
`;