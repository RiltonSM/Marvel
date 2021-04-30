import { useContext } from 'react';

//Context
import { ModalContext } from '../../contexts/ModalContext';

//Styles
import {
    Overlay,
    Container,
    Image,
    DescriptionContainer,
    Title,
    ValuationText,
    Close,
    Appearances,
    AppearancesText,
    DescriptionText,
    SubTitle,
    LogoBackground,
    StarsContainer,
    ShopOptions
} from './styles';

//Interface
import { ModalProps } from './interfaces';

//Assets
import closeImg from '../../assets/images/close-img.svg';
import disneyPlus from '../../assets/images/disney-plus.svg';
import amazon from '../../assets/images/amazon.svg';
import americanas from '../../assets/images/americanas.svg';
import star from '../../assets/images/star.svg';

const Modal = ({ title, type, text, imgSource, position, left, bottom }: ModalProps) => {
    const { closeModal } = useContext(ModalContext);
    
    console.log(position);
    const handleClick = () => {
        closeModal();
    }

    const appearancesTextGenerator = () => {
        return text.map((appearance, index) => {
            return <AppearancesText key={index}>{appearance}</AppearancesText>
        })
    }

    const valuationTextAccordigToType = () => {
        switch(type){
            case "character":
                return "Avaliações dos Fãs";
            case "comic":
                return "Crítica"
            case "movie":
                return "Crítica"
        }
    }

    const contentAccordingToType = () => {
        switch(type){
            case "character":
                return(
                    <>
                        <Appearances>Aparições:</Appearances>
                        { appearancesTextGenerator() }
                    </>
                )
            case "comic":
                return(
                    <>
                        <DescriptionText>
                            { text[0] }
                        </DescriptionText>
                        <SubTitle>Disponível em streaming:</SubTitle>
                        <ShopOptions>
                            <img src={americanas} alt="ame"/>
                            <img src={amazon} alt="amazon"/>
                        </ShopOptions>
                    </>
                )
            case "movie":
                return(
                    <>
                        <DescriptionText>
                            { text[0] }
                        </DescriptionText>
                        <SubTitle>Disponível em streaming:</SubTitle>
                        <LogoBackground>
                            <img src={disneyPlus} alt="disney+"/>
                        </LogoBackground>
                    </>
                )
        }
    }

    return(
        <Overlay>
            <Container left={left} bottom={bottom}>
                <Image src={imgSource} positionOrder={position}/>
                <DescriptionContainer positionOrder={position}>
                    <Title>{title}</Title>
                    <div>
                        {contentAccordingToType()}
                    </div>

                    <div>
                        <ValuationText>{ valuationTextAccordigToType() }</ValuationText>

                        <StarsContainer>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                        </StarsContainer>    
                    </div>
                </DescriptionContainer>
                <Close onClick={handleClick} positionOrder={position}>
                    <img src={closeImg} alt="x" style={{width: 10}}/>
                </Close>
            </Container>
        </Overlay>
    )
}

export default Modal;