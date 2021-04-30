import { useState, useEffect, useContext } from 'react';

//Services
import api from '../../services/api';

//Context
import { ModalContext } from '../../contexts/ModalContext';

//Components
import Whapper from '../../components/Whapper/styles';
import Header from '../../components/Header';
import Main from '../../components/Main/styles';
import Slider from '../../components/Slider';
import Card from '../../components/Card';

//Interfaces
import { CharacterInterface } from './interfaces'

const Characters = () => {
    const [characters, setCharacters] = useState<CharacterInterface[]>([]);

    const { resetState, handleNumberOfCardsChange } = useContext(ModalContext);

    useEffect(() => {
        const getCharactersAtMarvelApi = async () => {
            const {data} = await api.get(`characters`, {
                params: {
                    series: 354
                }
            });

            setCharacters(data.data.results);
        }
        
        resetState();
        getCharactersAtMarvelApi();
    }, []);

    useEffect(() => {
        handleNumberOfCardsChange(characters.length);
    }, [characters])

    const apperancesFilter = (character: CharacterInterface) => {
        const onlySeriesNames = character.series.items.filter((char, index) => index <= 4);
        return onlySeriesNames.map((series) => {
            return series.name
        });
    }

    const cardsGenerator = () => {
        return characters.map((character, index) => {
            return (
                <div
                    key={character.id}
                >
                    <Card
                        id={index}
                        name={character.name}
                        description={character.description}
                        imageSrc={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                        appearance={apperancesFilter(character)}
                        type="character"
                    />
                </div>
            )
        })
    }


    return(
        <Whapper>
            <Header/>
            <Main className="background">
                <Slider>
                    {characters.length > 0 ? cardsGenerator() : (
                        <Card
                            id={200}
                            description=""
                            imageSrc=""
                            name=""
                            type="character"
                        />
                    )}
                </Slider>
            </Main>
        </Whapper>
    )
}

export default Characters;