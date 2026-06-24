import { IconType } from "react-icons";
import { MdRestaurantMenu } from "react-icons/md";

export const iconMap: Record<string, IconType> = {
    "MdRestaurantMenu": MdRestaurantMenu,
};

export const getIcon = (iconName: string): IconType => {
    return iconMap[iconName] || MdRestaurantMenu;
};
