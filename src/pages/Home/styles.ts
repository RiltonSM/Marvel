import styled, { keyframes } from 'styled-components';

//Assets
import colors from '../../assets/css/colors';

const windowWidth = window.screen.width;

const firstAnimationEl = `translate(-${windowWidth * 0.278}px, 0px)`;
const secondAnimationEl = `translate(-${windowWidth * 0.278}px, -241px)`;

const firstAnimationL = `translate(-${windowWidth * 0.165}px, 0px)`;
const secondAnimationL = `translate(-${windowWidth * 0.165}px, -241px)`;


const moveMarvelLogoExtraLarge = keyframes`
    0% {
    }
    50% {
        transform: ${firstAnimationEl};
    }
    100% {
        transform: ${secondAnimationEl};
    }
`;

const moveMarvelLogoLarge = keyframes`
    0% {
    }
    50% {
        transform: ${firstAnimationL};
    }
    100% {
        transform: ${secondAnimationL};
    }
`;

const moveMarvelLogoForSmallDevices = keyframes`
    from{

    }
    to {
        transform: translate(0px, -185px)
    }
`;

const moveMarvelLogoForExtraSmallDevices = keyframes`
    from{

    }
    to {
        transform: translate(0px, -155px)
    }
`;


export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;

    background-color: ${colors.black};
`;

export const MarvelMovableLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    
    animation-name: ${moveMarvelLogoExtraLarge};
    animation-duration: 4s;
    animation-fill-mode: forwards;

    
    width: 14.8125rem;
    height: 5.9375rem;

    background-color: ${colors.red};

    @media (max-width: 1024px) {
        animation-name: ${moveMarvelLogoLarge};
        animation-duration: 4s;
        animation-fill-mode: forwards;
    }

    @media (max-width: 992px) {
        animation-name: ${moveMarvelLogoForSmallDevices};
        animation-duration: 4s;
        animation-fill-mode: forwards;
    }

    @media (max-width: 500px) {
        animation-name: ${moveMarvelLogoForExtraSmallDevices};
        animation-duration: 4s;
        animation-fill-mode: forwards;
    }
`;

export const LogoText = styled.h1`
    margin: 0;
    font: normal normal normal 5.3125rem Marvel;
    height: 5.3125rem;
    line-height: 6.25rem;
    color: #FFFFFF;
`;

export const ContainerAfterAnimation = styled.div`
    display: flex;
    justify-content: flex-start;

    width: 100%;
    height: 36.5625rem;

    padding-left: 9.375rem;

    @media (max-width: 992px){
        padding: 0;
        justify-content: center;   
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 23.9375rem;
    height: 100%;
`;

export const MarvelLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 14.8125rem;
    height: 5.9375rem;

    background-color: ${colors.red};
    margin-bottom: 2.5rem;
`;

export const WelcomeBack = styled.h1`
    font: normal normal bold 1.875rem Axiforma;
    color: ${colors.red};
    margin-bottom: 0.75rem;
`;

export const Form = styled.form`
    text-align: left;
    width: 100%;
`;

export const FormLabel = styled.h2`
    font: normal normal 300 1.25rem Axiforma;
    color: ${colors.gray};
    margin-bottom: 1.3125rem;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 22.1875rem;
    height: 4.5625rem;

    
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6.25rem;
    
    /* color: #D1D1D6; */
    font-size: 1.375rem;
    
    /* padding-top: 5px; */
    padding: 0;
    padding-left: 1.75rem;
    
    border: 0;
    
    margin: 0;
    margin-bottom: 1.125rem;
    
    ::placeholder{
        line-height: 1.375rem;
        color: #D1D1D6;
        font-size: 1.375rem;
    }

    &:focus {
        outline: none;
    }
`;

export const PasswordActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 0.9375rem;
    
    margin-top: 0.9375rem;
    padding: 0 13px;
`;

export const CheckboxWithLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Text = styled.span`
    height: 1rem;
    font: normal normal normal 0.9375rem Axiforma;
    color: ${colors.gray};
`;

export const ForgetPassword = styled.span`
    font: normal normal normal 0.9375rem Axiforma;
    color: ${colors.gray};

    border-bottom: 1px solid ${colors.red};
    padding-bottom: 2px;
`;

export const Button = styled.button`
    width: 100%;
    height: 4.0625rem;

    box-shadow: 0px 3px 6px #00000029;
    border-radius: 2.0625rem;
    background-color: ${colors.red};

    font: normal normal normal 1.75rem Axiforma;
    color: ${colors.white};

    margin-top: 2.125rem;
    border: 0;
    outline: none;
`;

export const SignUpContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-top: 1.875rem;
`;

export const SignUpText = styled.span`
    height: 1rem;
    font: normal normal normal 0.9375rem Axiforma;
    color: ${colors.red};
    margin-left: 3px;
`;


