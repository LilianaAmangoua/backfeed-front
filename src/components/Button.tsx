import {FC} from 'react';
import {Button} from "@mui/material";

interface CommonButtonProps {
    text: string,
    onClick?: () =>void
}

export function CommonButton({text, onClick}: CommonButtonProps) {

    return (
        <Button variant="outlined" sx={{mt: 2, mb: 2}} onClick={onClick}>{text}</Button>
    );
};

export default CommonButton;
