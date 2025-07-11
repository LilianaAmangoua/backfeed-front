import { useState } from "react";
import { InputTextField } from "../../../components/InputTextField.tsx";
import styles from "./LoginForm.module.css";
import CommonButton from "../../../components/common-button/CommonButton.tsx";
import { logUser } from "../../../services/AuthService.ts";
import picture from "../../../assets/login-picture.jpg"
import logo from "../../../assets/logo.svg"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await logUser({ email, password });
            console.log(response.data);
        } catch (e) {
            console.log(e);
            setError("Invalid Credentials");
        }
    };

    return (
        <main className={styles.loginWrapper}>
            <title>Se connecter </title>

            <form onSubmit={handleLogin} className={styles.loginForm}>
                <img src={logo} alt={"logo de backfeed"} className={styles.logo}/>
                <h1 className={styles.loginTitle}>Se connecter</h1>
                <p>Retrouvez votre Backfeed.</p>
                <hr/>

                <InputTextField id={"email"} label={"Email"} onInputChange={handleEmailInput} />
                <InputTextField id={"password"} label={"Password"} onInputChange={handlePasswordInput} />
                {error && <p style={{color: "red"}}>{error}</p>}
                <CommonButton text={"Se connecter"} type={"submit"} variant={"secondary"}/>
            </form>
            <img src={picture} alt="personnes collaborant autour d'un ordinteur" className={styles.loginImage}/>
        </main>
    );
};

export default LoginForm;
