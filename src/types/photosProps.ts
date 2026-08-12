import { StaticImageData } from "next/image";

export type PhotosProps = {
    id: number;
    photo: string | StaticImageData;
    title: string;
    description: string;
}