import { StaticImageData } from "next/image";

export type PropsMenuPage = {
    id: number;
    name: string;
    onClick?: () => void; 
    products: {
        id: number;
        slug: string;
        name: string;
        category: string;
        cost: {
            price: number;
            oldPrice: number;
        }
        detailParams: {
            available: boolean;
            featured: boolean;
            spicyLevel: number;
            prepTimeMin: number;
            calories: number;
            weightGrams: number;
            allergens: string[]
        }
        dietary?: {
            vegetarian: boolean;
            vegan: boolean;
            glutenFree: boolean;
        };
        info: {
            description: string;
            shortDescription?: string;
            components: {
                text: string;
                amount: number;
            }[];
            photos: (StaticImageData | string)[];
            photoAlts?: string[];
        }
    }[]
}