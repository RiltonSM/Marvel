import { useState, useEffect, useContext } from 'react';

//Services
import api from '../../services/api';

//Contexts
import { ModalContext } from '../../contexts/ModalContext';

// Components
import Whapper from '../../components/Whapper/styles';
import Header from '../../components/Header';
import Main from '../../components/Main/styles';
import Slider from '../../components/Slider';
import Card from '../../components/Card';

//Interfaces
import { ComicInterface } from './interfaces';

const Comics = () => {
    const [comicsList, setComicsList] = useState<ComicInterface[]>([]);

    const { resetState, handleNumberOfCardsChange } = useContext(ModalContext)

    useEffect(() => {
        const getComicsAtMarvelApi = async () => {
            const { data } = await api.get(`/comics`, {
                params: {
                    series: 354
                }
            });

            setComicsList(data.data.results);
        }

        resetState();
        getComicsAtMarvelApi();
    }, []);

    useEffect(() => {
        handleNumberOfCardsChange(comicsList.length);
    }, [comicsList])

    const cardsGenerator = () => {
        console.log(comicsList);
        return comicsList.map((comic, index) => {
            return (
                <div
                    key={comic.id}
                >
                    <Card
                        id={index}
                        name={comic.title}
                        description={comic.description}
                        imageSrc={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
                        type="comic"
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
                {comicsList.length > 0 ? cardsGenerator() : (
                    
                    <Card
                        id={200}
                        description=""
                        imageSrc=""
                        name=""
                        type="comic"
                    />
                    
                )}
                </Slider>
            </Main>
        </Whapper>
    )
}

export default Comics;