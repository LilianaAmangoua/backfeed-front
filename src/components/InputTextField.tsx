import styles from "./LoginInput.module.css"

interface InputProps {
    label: string;
    id: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputTextField({ label, id, onInputChange }: InputProps) {
    return (
        <>
            <label className={styles.loginLabel} htmlFor={id}>{label}</label>
            <input id={id} className={styles.loginInput} onChange={onInputChange} />
        </>
    );
}
