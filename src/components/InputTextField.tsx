import {TextField} from "@mui/material";

interface InputProps {
    label: string;
    onInputChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputTextField({label, onInputChange}: InputProps) {
    return (
        <TextField id="outlined-basic" label={label} variant="outlined" onChange={onInputChange}/>
    );
}