export interface ModalProps {
    type: "character" | "comic" | "movie";
    text: string[];
    title: string;
    imgSource: string;
    position: number;
    left: number;
    bottom: number
}

export interface PositionModal {
    left: number;
    bottom: number;
}

export interface Order {
    positionOrder: number;
}