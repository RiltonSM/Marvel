import { useEffect } from 'react';
import $ from 'jquery';
import Slider from "react-slick";

//Componets
import ArrowNext from '../ArrowNext';

//Styles
import {
    Container
} from './styles';

//Interfaces
import { SliderCardsProps } from './interfaces';

/*
    IDEIA PARA RESOLVER PROBLEMA DE SABER A POSIÇÃO DO CARD CLICADO:
    CRIAR UM ESTADO COM O NÚMERO DA PÁGINA E CADA CARD TER UM NÚMERO DE SUA POSIÇÃO NA SEQUÊNCIA
*/

const SliderCards = ({ children }: SliderCardsProps) => {
    useEffect(() => {
        $('.slick-prev').hide();
    }, []);

    const customPaging = (i: number) => {
        return <span>{i + 1}</span>;
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ArrowNext/>,
        customPaging: customPaging,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    if(children !== []){
        return (
            <Container id="slider">
                <Slider {...settings}>
                    {children}
                </Slider>
            </Container>
        );
    } else {
        return null
    }

}
  
export default SliderCards;