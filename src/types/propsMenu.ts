import { StaticImageData } from "next/image";

export type PropsMenuPage = {
    id: number;
    icon: string;
    name: string;
    onClick?: () => void; 
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