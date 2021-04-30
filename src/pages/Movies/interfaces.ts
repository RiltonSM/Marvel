export interface MoviesInterface {
    id: number;
    title: string;
    description: string;
    thumbnail: {
        extension: string;
        path: string;
    };
    release: number;
    cronology: number;
}

export interface SelectProps {
    isOpen: boolean;
}