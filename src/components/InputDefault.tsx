import {Input} from "@material-tailwind/react";

interface InputProps {
    label: string;
}

export function InputDefault({label}: InputProps) {
    return (
        <div className="w-72">
            <Input variant={"outlined"} label={label}/>
        </div>
    );
}