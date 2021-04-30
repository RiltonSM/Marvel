//Interfaces
import { MoviesInterface } from '../pages/Movies/interfaces';

//Assets
import ironMan1 from '../assets/images/iron-man-1.svg';
import ironMan2 from '../assets/images/iron-man-2.svg';
import thor from '../assets/images/thor.svg';
import captainAmerica from '../assets/images/captain-america.svg';
import captainMarvel from '../assets/images/captain-marvel.svg';

export const moviesStaticData: MoviesInterface[] = [
    {
        id: 0,
        title: "Homem de Ferro",
        description: "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
        thumbnail: {
            path: ironMan1,
            extension: 'svg'
        },
        release: 0,
        cronology: 2
    },
    {
        id: 1,
        title: "Homem de Ferro 2",
        description: "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas",
        thumbnail: {
            path: ironMan2,
            extension: 'svg'
        },
        release: 1,
        cronology: 3
    },
    {
        id: 2,
        title: "Thor",
        description: "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.",
        thumbnail: {
            path: thor,
            extension: 'svg'
        },
        release: 2,
        cronology: 4
    },
    {
        id: 3,
        title: "Capitão América",
        description: "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.",
        thumbnail: {
            path: captainAmerica,
            extension: 'svg'
        },
        release: 3,
        cronology: 0
    },
    {
        id: 4,
        title: "Capitã Marvel",
        description: "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.",
        thumbnail: {
            path: captainMarvel,
            extension: 'svg'
        },
        release: 4,
        cronology: 1
    },
]