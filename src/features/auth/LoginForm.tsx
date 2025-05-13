import {FC} from 'react';
import {InputTextField} from "../../components/InputTextField.tsx";
import styles from "./LoginForm.module.css"
import CommonButton from "../../components/Button.tsx";

const LoginForm: FC<{}> = ({}) => {
    return (
        <>
            <section className={styles.loginInputContainer}>
                <h2>Se connecter</h2>
                <p>Retrouvez votre Backfeed.</p>
                <InputTextField label={"Email"}/>
                <InputTextField label={"Password"}/>
                <CommonButton text={"Se connecter"}/>
            </section>

        </>


    );
};

export default LoginForm;
