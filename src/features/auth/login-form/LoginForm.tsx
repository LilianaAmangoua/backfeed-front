import Button from "../../../components/common/Button.tsx";
import picture from "../../../assets/login-picture.jpg";
import logo from "../../../assets/logo.svg";
import { FormProvider } from "react-hook-form";
import { EmailInputField } from "../../../components/form/EmailInputField.tsx";
import { PasswordInputField } from "../../../components/form/PasswordInputField.tsx";
import { useLoginForm } from "./useLoginForm.ts";

const LoginForm = () => {
    const { methods, loginError, handleLogin } = useLoginForm();
    const { handleSubmit } = methods;

    return (
        <>
            <title>Se connecter </title>
            <main className="flex justify-center px-8 md:px-0 md:pl-6 h-[100vh] md:justify-between">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col justify-center gap-1 w-[500px] text-black-text">
                        <img src={logo} alt={"logo de backfeed"} className="max-h-10 max-w-10" />
                        <div className="mb-5 mt-3 text-primary-blue">
                            <h1 className="font-normal text-4xl md:text-5xl">Se connecter</h1>
                            <p>Retrouvez votre Backfeed.</p>
                        </div>

                        <hr className="w-5/6" />

                        <EmailInputField label={"Adresse mail"} inputName={"email"} placeholder={"exemple@gmail.com"} type={"email"} />
                        <PasswordInputField label={"Mot de passe"} inputName={"password"} />

                        <a href="#" className="underline">
                            Mot de passe oublié ?
                        </a>
                        {loginError && <p className={"text-red-600 mt-1 text-center"}>{loginError}</p>}

                        <Button type="submit" variant="secondary">
                            Se connecter
                        </Button>
                    </form>
                </FormProvider>

                <div className="h-screen hidden md:w-3/6 md:block ">
                    <img src={picture} alt="collègues qui collaborent autour d'un ordinateur" className="w-full h-full object-cover" />
                </div>
            </main>
        </>
    );
};

export default LoginForm;
