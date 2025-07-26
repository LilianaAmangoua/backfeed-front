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
            <label className={"text-left pt-2"} htmlFor={inputName}>{label}</label>
            <div className="relative pb-4">
                <input
                    type={show ? "text" : "password"}
                    id={inputName}
                    {...register(inputName, { required: `${label} est requis` })}
                    className="px-4 py-3 border border-gray-500 rounded-md w-full focus:outline outline-(--secondary)"
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-[10px] bottom-[28px] text-gray-500 cursor-pointer"
                >
                    {show ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                </button>
            </div>

            {errors[inputName] && <p className="text-red-600 mt-1">{errors[inputName]?.message}</p>}
        </>
    );
}
