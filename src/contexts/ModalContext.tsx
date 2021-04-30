import { createContext, useEffect, useState } from 'react';

//Components
import Modal from '../components/Modal';

//Interfaces
import { ModalContextData, OpenModalParams, ModalProviderProps } from './interfaces'

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isShowed, setIsShowed] = useState(false);
    const [title, setTitle] = useState("");
    const [type, setType] = useState<"character" | "comic" | "movie">("character");
    const [text, setText] = useState<string[]>([]);
    const [imgSource, setImgSource] = useState("");
    const [cardsPositionShowed, setCardsPositionShowed] = useState<number[]>([0, 1, 2]);
    const [cardSelected, setCardSelected] = useState(0);
    const [numberOfCards, setNumberOfCards] = useState(0);
    const [cardPosition, setCardPosition] = useState({
        x: 0,
        height: 0
    });
    const [sliderHeight, setSliderHeight] = useState(0);

    // useEffect(() => {
    //     const arrayWithNumberPositions = () => {
    //         const pageWidth = window.screen.width;
    
    //         if(pageWidth >= 1200){
    //             return [0, 1, 2]
    //         }
    //         if(pageWidth < 1200 && pageWidth > 480){
    //             return [0, 1]
    //         } else {
    //             return [19]
    //         }
    //     }

    //     setCardsPositionShowed(arrayWithNumberPositions());
    // }, [])

    const openModal = ( modalData: OpenModalParams ) => {
        setType(modalData.type);
        setText(modalData.text);
        setTitle(modalData.title);
        setImgSource(modalData.imgSource);
        setIsShowed(true);
        setCardPosition(modalData.cardPosition);
        setSliderHeight(modalData.sliderHeight);
    }

    const closeModal = () => {
        setIsShowed(false);    
        setType("character");
        setText([]);
    }

    const resetState = () => {
        setCardsPositionShowed([0, 1, 2]);
        setCardSelected(0);
    }

    const handleNumberOfCardsChange = (number: number) => {
        setNumberOfCards(number);
    }

    const handleChangeCardsPosition = () => {
        const newCardsPositionShowed = cardsPositionShowed.map(position => {
            if(position + 1 >= numberOfCards){
                return position - (numberOfCards - 1);
            } else {
                return position + 1;
            }
        });

        console.log(newCardsPositionShowed);
        setCardsPositionShowed(newCardsPositionShowed);
    }

    const handleClickCard = (selected: number) => {
        setCardSelected(selected);
        console.log(cardsPositionShowed);
        console.log(cardsPositionShowed.indexOf(selected), selected);
    }

    const calcTheSpacingLeft = () => {
        if(cardsPositionShowed.indexOf(cardSelected) !== 0) {
            return (cardPosition.x - ((41.1875 * getFontSize()) - (18.0625 * getFontSize())));
        } else {
            return cardPosition.x;
        }
    }

    const getFontSize = () => {
        const pageWidth = window.screen.width;
        if(pageWidth >= 992){
            return 16;
        }
        if(pageWidth < 992 && pageWidth >= 768){
            return 14;
        }
        if(pageWidth < 768  && pageWidth >= 576){
            return 12;
        } else {
            return 10;
        }
    }

    return(
        <ModalContext.Provider
            value={{
                isShowed,
                openModal,
                closeModal,
                handleChangeCardsPosition,
                handleClickCard,
                handleNumberOfCardsChange,
                resetState
            }}
        >
            { children }
            { isShowed && 
                <Modal
                    title={title}
                    text={text}   
                    type={type}
                    imgSource={imgSource}
                    position={cardsPositionShowed.indexOf(cardSelected)}
                    left={calcTheSpacingLeft()}
                    bottom={(sliderHeight - cardPosition.height)}
                />
            }
        </ModalContext.Provider>
    )
}