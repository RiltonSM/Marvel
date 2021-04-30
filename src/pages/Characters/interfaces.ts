export interface CharacterInterface {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        extension: string;
        path: string;
    };
    series: {
        items: {
            name: string;
        }[];
    }
}