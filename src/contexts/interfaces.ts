import { ReactNode } from 'react';

export interface ModalProviderProps{
    children: ReactNode;
}

export interface ModalContextData {
    isShowed: boolean;
    openModal: (arg0: OpenModalParams) => void;
    closeModal: Function;
    handleChangeCardsPosition: Function;
    handleClickCard: Function;
    handleNumberOfCardsChange: Function;
    resetState: Function;
}

export interface OpenModalParams {
    type: "character" | "comic" | "movie";
    text: string[];
    title: string;
    imgSource: string;
    cardPosition: {
        x: number;
        height: number
    };
    sliderHeight: number;
}