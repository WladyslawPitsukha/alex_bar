import { StaticImageData } from "next/image";

export type PropsMenuPage = {
    id: number;
    section: string;
    onclick?: () => void; 
    products: {
        id: number;
        name: string;
        price: number;
        info: {
            description: string;
            components: {
                text: string;
                amount: number;
            }[];
            photos: (StaticImageData | string)[];
        }
    }[]
}