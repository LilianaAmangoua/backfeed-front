import {TextField} from "@mui/material";

interface InputProps {
    label: string;
}

export function InputTextField({label}: InputProps) {
    return (
        <TextField id="outlined-basic" label={label} variant="outlined"/>
    );
}