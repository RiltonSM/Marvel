import { useContext } from 'react'

//Context
import { ModalContext } from '../../contexts/ModalContext';

//Styles
import {
    Container,
    DescriptionContainer,
    Title,
    DescriptionText,
    DetailsButton
} from './styles';

//Interfaces
import { CardProps } from './interfaces'

const Card = ({ id, name, description, imageSrc, appearance, type }: CardProps) => {
    const { openModal, handleClickCard } = useContext(ModalContext);

    const handleDetailClick = () => {
        handleClickCard(id);

        
        const positionCard = document.getElementById(`card${id}`)?.getBoundingClientRect();
        const heigthSlider = document.getElementById("slider")?.getBoundingClientRect();
        console.log(positionCard, heigthSlider);
        openModal({
            type: type,
            text: appearance ? appearance : [description],
            title: name,
            imgSource: imageSrc,
            cardPosition: {
                x: positionCard !== undefined ? positionCard.left : 0,
                height: positionCard !== undefined ? positionCard.height : 0,
            },
            sliderHeight: heigthSlider !== undefined ? heigthSlider.height : 0,
        });
    }
    return(
        <Container img={imageSrc} id={`card${id}`}>
            <DescriptionContainer>
                <Title>{name}</Title>
                <DescriptionText>
                    {description === "" 
                        ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sit atque veritatis aut unde ea vitae fugiat labore dolores doloribus deserunt voluptate earum, voluptatibus, laborum temporibus non? Distinctio, sunt quis?" 
                        : description
                    }
                </DescriptionText>
                
                <DetailsButton onClick={handleDetailClick}>
                    ver detalhes
                </DetailsButton>
            </DescriptionContainer>
        </Container>
    )
}

export default Card;