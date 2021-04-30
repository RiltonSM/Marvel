import { useState, useEffect, useContext } from 'react';

//Contexts
import { ModalContext } from '../../contexts/ModalContext';

// Components
import Whapper from '../../components/Whapper/styles';
import Header from '../../components/Header';
import Main from '../../components/Main/styles';
import Slider from '../../components/Slider';
import Card from '../../components/Card';

//Styles
import {
    Select,
    Option,
    SelectContainerForDiv,
    SelectWithDivText,
    SelectWithDiv,
    OptionWithDiv,
    LastOptionWithDiv
} from './styles'

//Interfaces
import { MoviesInterface } from './interfaces';

//Assets
import selectIcon from '../../assets/images/select-arrow.svg';

//Data
import { moviesStaticData } from '../../data/moviesStaticData';

const Movies = () => {
    const [moviesList, setMoviesList] = useState<MoviesInterface[]>([]);
    const [orderRule, setOrderRule] = useState(0);
    const [selectedText, setSelectedText] = useState("Lançamento");
    const [isSelectOpen, setIsSelectOpen] = useState(false);


    const { resetState, handleNumberOfCardsChange } = useContext(ModalContext)

    useEffect(() => {
        resetState();
    }, []);

    useEffect(() => {
        console.log(moviesList);
        handleNumberOfCardsChange(moviesList.length);
    }, [moviesList]);

    useEffect(() => {
        let newListOrdened: MoviesInterface[] = [];
        console.log(orderRule);
        if(orderRule === 0) {
            newListOrdened = moviesStaticData.sort((a, b) => a.release - b.release);
        } else if(orderRule === 1) {
            newListOrdened = moviesStaticData.sort((a, b) => a.cronology - b.cronology);
        }

        setMoviesList(oldValue => [...newListOrdened]);
    }, [orderRule])

    const cardsGenerator = () => {
        return moviesList.map((movie, index) => {
            return (
                <div
                    key={movie.id}
                >
                    <Card
                        id={index}
                        name={movie.title}
                        description={movie.description}
                        imageSrc={`${movie.thumbnail.path}`}
                        type="comic"
                    />
                </div>
            )
        })
    }

    const handleChangeSelect = (ruleId: number) => {
        setOrderRule(ruleId);
        const text = ruleId === 0 ? "Lançamento" : "Cronologia";
        setSelectedText(text);
        setIsSelectOpen(false);
    }

    const handleToggleSelect = () => {
        setIsSelectOpen(!isSelectOpen)
    }

    const handleBlurSelect = () => {
        setIsSelectOpen(false)
    }

    return(
        <Whapper>
            <Header/>
            <Main className="background" haveSelect>
                <SelectContainerForDiv>
                    <SelectWithDiv 
                        isOpen={isSelectOpen}
                        onClick={handleToggleSelect} 
                        onBlur={handleBlurSelect}
                    >
                        <SelectWithDivText>
                            {isSelectOpen ? "Filtrar por" : selectedText}
                            <img src={selectIcon} alt="seta"/>
                        </SelectWithDivText> 
                        <div style={{marginTop: 0}}>
                            <OptionWithDiv isOpen={isSelectOpen} onClick={() => handleChangeSelect(0)}>Lançamento</OptionWithDiv>
                            <LastOptionWithDiv isOpen={isSelectOpen} onClick={() => handleChangeSelect(1)}>Cronologia</LastOptionWithDiv>
                        </div>
                    </SelectWithDiv>
                </SelectContainerForDiv>
                <Slider>
                    {moviesList.length > 0 ? cardsGenerator() : (
                        <Card
                            id={200}
                            description=""
                            imageSrc=""
                            name=""
                            type="movie"
                        />
                    )}
                </Slider>
            
            </Main>
        </Whapper>
    )
}

export default Movies;