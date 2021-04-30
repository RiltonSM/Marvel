import styled from 'styled-components';

//Interfaces
import { PageOptionParam, MobileMenuInterface, MobileMenuRouteName } from './interfaces';

//Assets
import colors from '../../assets/css/colors';

export const UltraContainer = styled.div`
    width: 100%;
    height: 7.125rem;
`;

export const SuperContainer = styled.div`
    position: fixed;
    top: 0;
    z-index: 500;
    width: 100%;
`;

export const NavBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7.125rem;
    background-color: ${colors.black};
    border-bottom: 0.1875rem solid ${colors.redLight};
`;

export const Logo = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    width: 7.625rem;
    height: 3.375rem;
    background-color: ${colors.red};
    text-align: center;
    margin-left: 3.4375rem;
`;

export const LogoText = styled.h1`
    margin: 0;
    margin-top: 0.25rem;
    font: normal normal normal 3.125rem Marvel;
    color: ${colors.white};
`;

export const PageSelectorAndUserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 6.125rem;
    @media (max-width: 992px){
        display: none;
    }
`;

export const PageOption = styled.p`
    margin: 0;
    font: normal normal bold 1.875rem Axiforma;
    color: ${(p: PageOptionParam) => p.active ? colors.white : colors.gray};
    margin-right: 5.1875rem;

    cursor: pointer;
`;

export const Avatar = styled.img`
    width: 3.4375rem;
    height: 3.4375rem;

    border-radius: 1.6875rem;
`;

export const LogoutText = styled.a`
    font: normal normal 300 1.25rem Axiforma;
    color: ${colors.grayLight};
    margin-left: 0.9375rem;
    opacity: 0.25;
`;

export const MenuMobile = styled.div`
    display: none;
    z-index: 500;
    width: 100%;
    height: auto;
    background-color: ${colors.black};

    @media (max-width: 992px){
        display: ${(p: MobileMenuInterface) => p.isVisible ? "block" : "none"};
        padding-top: 15px;
        padding-left: 3.4375rem;
        padding-bottom: 15px;
    }
`;

export const MenuMobileRouteLabel = styled.h2`
    font: normal normal normal 1.5rem Circular Std Book;
    color: ${(p: MobileMenuRouteName) => p.isTheCurrentPage ? colors.white : colors.gray};
    width: 100%;
    margin-bottom: 10px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: ${colors.white};
        text-decoration: none;
    }
`;

export const MenuIconImage = styled.img`
    display: none;
    
    @media (max-width: 992px){
        display: block;
        margin-right: 3.4375rem;
    }
`