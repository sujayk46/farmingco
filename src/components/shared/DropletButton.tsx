import { Button } from "@mui/material";
import { FC } from "react";
import { IDropletButtonProps } from "../../models/componet.interface";

const DropletButton: FC<IDropletButtonProps> = ({
    isDroplet = true,
    label,
    onClick,
    Icon,
    iconStyle,
}) => {
    return (
        <Button
            size="large"
            onClick={onClick}
            className={`GradientPrimary rounded-r-3xl ${isDroplet ? "rounded-bl-3xl" : "rounded-l-3xl"
                }`}
            sx={{
                boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.3)', // Shadow cast downward
                transition: 'box-shadow 0.3s', // Smooth transition on hover
                '&:hover': {
                    boxShadow: '0px 15px 15px -5px rgba(0, 0, 0, 0.4)', // Stronger shadow on hover
                },
            }}
        >
            <div className="flex">
                <span className="pl-1 pt-0.44">{label}</span>
                <div>
                    {Icon && (
                        <div style={{ ...iconStyle, marginLeft: "6px" }}>
                            <Icon/>
                        </div>
                    )}
                </div>
            </div>
        </Button>
    );
};

export default DropletButton;
