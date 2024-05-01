//prop types for the  DropletButton component
import { CSSProperties, FC } from "react";

export interface IDropletButtonProps {
    isDroplet?: boolean;
    label: string; 
    onClick: () => void; 
    Icon: FC; 
    iconStyle?: CSSProperties; 
}
