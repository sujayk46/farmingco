//prop types for the  DropletButton component
import { CSSProperties, FC } from "react";

export interface IDropletButtonProps {
    isDroplet?: boolean;
    label: string; 
    onClick: () => void; 
    Icon: FC; 
    iconStyle?: CSSProperties; 
}

export interface IProductCardProps {
    img: string;
    description: string;
    name: string;
    subName: string;
    price: number;
    originalPrice: number;
    discount: number; 
    onClick: () => void;
}
  
