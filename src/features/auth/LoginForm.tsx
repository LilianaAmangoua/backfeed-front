import {FC, useEffect, useState} from 'react';
import {InputTextField} from "../../components/InputTextField.tsx";
import styles from "./LoginForm.module.css"
import CommonButton from "../../components/Button.tsx";
import {logUser} from "../../services/AuthService.ts";

const LoginForm: FC<{}> = ({}) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const emailInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        console.log(event.target.value)
    }

    const passwordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleLogin = async () => {
        console.log("clicked");
        try {
            const response = await logUser({email, password});
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <section className={styles.loginInputContainer}>
                <h2>Se connecter</h2>
                <p>Retrouvez votre Backfeed.</p>
                <InputTextField label={"Email"} onInputChange={emailInput}/>
                <InputTextField label={"Password"} onInputChange={passwordInput}/>
                <CommonButton text={"Se connecter"} onClick={handleLogin}/>
            </section>

        </>


    );
};

export default LoginForm;
