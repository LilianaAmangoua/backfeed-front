import {useState} from "react";
import {useFormContext} from "react-hook-form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface InputProps {
    label: string;
    inputName: string;
}

export function PasswordInputField({ label, inputName }: InputProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const [show, setShow] = useState(false);

    return (
        <>
            <label className={"text-left"} htmlFor={inputName}>{label}</label>
            <input
                type={show ? "text" : "password"}
                id={inputName}
                {...register(inputName, { required: `${label} est requis` })}
                className="px-4 py-3 border-solid border-gray-500 rounded-md w-[450px] focus:outline-solid outline-1 outline-(--secondary) relative"
            />
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute left-[450px] bottom-[335px] text-gray-500 cursor-pointer"
            >
                {show ? <VisibilityOffIcon/> : <VisibilityIcon />}
            </button>
            {errors[inputName] && <p className="text-red-600 mt-1">{errors[inputName]?.message}</p>}
        </>
    );
}
