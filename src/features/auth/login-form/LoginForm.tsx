import { useState } from "react";
import styles from "./LoginForm.module.css";
import CommonButton from "../../../components/button/CommonButton.tsx";
import { logUser } from "./AuthService.ts";
import picture from "../../../assets/login-picture.jpg";
import logo from "../../../assets/logo.svg";
import { FormProvider, useForm } from "react-hook-form";
import { EmailInputField } from "../../../components/form/EmailInputField.tsx";
import { PasswordInputField } from "../../../components/form/PasswordInputField.tsx";

type LoginFormData = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const methods = useForm();
    const { handleSubmit } = methods;
    const [loginError, setLoginError] = useState("");

    const handleLogin = async (data: LoginFormData) => {
        try {
            await logUser({
                email: data.email,
                password: data.password,
            });
        } catch (e) {
            console.log(e);
            setLoginError("Invalid Credentials");
        }
    };

    return (
        <main className={styles.loginWrapper}>
            <title>Se connecter </title>

            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleLogin)} className={styles.loginForm}>
                    <img src={logo} alt={"logo de backfeed"} className={styles.logo} />
                    <h1 className={styles.loginTitle}>Se connecter</h1>
                    <p>Retrouvez votre Backfeed.</p>
                    <hr />

                    <EmailInputField label={"Adresse mail"} inputName={"email"} placeholder={"exemple@gmail.com"} type={"email"} />
                    <PasswordInputField label={"Mot de passe"} inputName={"password"} />

                    <a href="#">Mot de passe oublié ?</a>
                    {loginError && <p className={"text-red-600 mt-1 text-center"}>{loginError}</p>}

                    <CommonButton text={"Se connecter"} type={"submit"} variant={"secondary"} />
                </form>
            </FormProvider>

            <img src={picture} alt="personnes collaborant autour d'un ordinteur" className="max-w-[50%] max-h-[100vh] hidden sm:block" />
        </main>
    );
};

export default LoginForm;
