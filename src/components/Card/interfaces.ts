export interface CardProps {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    appearance?: string[];
    type: "character" | "comic" | "movie";
}

export interface CardContainerParam {
    img: string;
}