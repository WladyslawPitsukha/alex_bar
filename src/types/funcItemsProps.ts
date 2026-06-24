import { IconType } from "react-icons";

export type FuncItemsProps = {
    id?: number;
    icon: IconType;
    name: string;
    onClick?: () => void;
}