import { IconType } from "react-icons";

export type FuncItemsProps = {
    icon?: IconType;
    name: string;
    onClick: () => void;
}