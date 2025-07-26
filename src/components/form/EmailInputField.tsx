import { useFormContext } from "react-hook-form";

interface InputProps {
    label: string;
    inputName: string;
    placeholder?: string;
    type: string;
}

export function EmailInputField({ label, inputName, placeholder, type }: InputProps) {
    const {
        register,
        formState: { errors }
    } = useFormContext();


    return (
        <>
            <label className={"text-left pt-4"} htmlFor={inputName}>
                {label}
            </label>
            <input
                id={inputName}
                className={"px-4 py-3 border border-gray-500 rounded-md focus:outline focus:outline-(--secondary) w-full"}
                placeholder={placeholder}
                {...register(inputName, { required: `${label} est requis` })}
                type={type}
            />
            {errors[inputName] && <p className={"text-red-600"}>{errors[inputName]?.message}</p>}
        </>
    );
}
