import {FC} from 'react';
import {Button} from "@mui/material";
interface CommonButtonProps {
    text: string;
}
export function CommonButton ({text}: CommonButtonProps) {

    return (
        <Button variant="outlined" sx={{mt: 2, mb: 2}}>{text}</Button>
    );
};

export default CommonButton;
