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
        formState: { errors },
        watch
    } = useFormContext();

    console.log(watch(label))

    return (
        <>
            <label className={"text-left"} htmlFor={inputName}>
                {label}
            </label>
            <input
                id={inputName}
                className={"px-4 py-3 border-solid border-gray-500 rounded-md w-[450px] focus:outline-solid outline-1 outline-(--secondary)"}
                placeholder={placeholder}
                {...register(inputName, { required: `${label} est requis` })}
                type={type}
            />
            {errors[inputName] && <p className={"text-red-600"}>{errors[inputName]?.message}</p>}
        </>
    );
}
