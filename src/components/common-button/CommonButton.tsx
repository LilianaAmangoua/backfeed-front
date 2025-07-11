import type { FC } from "react";
import "./CommonButton.css"

interface CommonButtonProps {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "accent" | "secondary";
}

export const CommonButton: FC<CommonButtonProps> = ({ text, onClick, type = "button", variant = "accent" }) => {
    return (
        <button onClick={onClick} type={type} className={`btn btn-${variant}`}>
            {text}
        </button>
    );
};

export default CommonButton;
