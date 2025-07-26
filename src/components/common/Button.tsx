import type {ButtonHTMLAttributes, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

type Variant = "accent" | "secondary" | "danger" | "disabled";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
}
const variantClasses : Record<Variant, string> = {
    accent: "bg-accent-orange text-white font-medium",
    secondary: "bg-primary-blue text-white",
    danger: "bg-red-500 text-white",
    disabled: "bg-disabled-gray text-white cursor-not-allowed",
}

const sizeClasses: Record<Size, string> = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-3',
};

const Button = ({children, variant = "secondary", size = "md", ...props}: ButtonProps) => {
    const baseClass = "rounded-md text-center px-3 py-1 border-none";
    const finalClassName = twMerge(
        baseClass,
        variantClasses[variant],
        sizeClasses[size]
    )
    return (
        <button className={finalClassName} {...props} >{children}</button>
    )
}

export default Button;