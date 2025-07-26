import {useForm} from "react-hook-form";
import {useState} from "react";
import {logUser} from "./LoginService.ts";
import axios from "axios";

type LoginFormData = {
    email: string;
    password: string;
};

export const useLoginForm = () => {
    const methods = useForm();
    const [loginError, setLoginError] = useState("");

    const handleLogin = async (data: LoginFormData) => {
        try {
            const response = await logUser({
                email: data.email,
                password: data.password,
            });

            console.log(response.data)

            //TODO: Rédiriger vers son dashboard
        } catch (e: unknown) {
            if (axios.isAxiosError(e) && e.response) {
                if (e.response.status === 401) {
                    setLoginError(e.response.data.message);
                } else if (e.response.status === 500) {
                    setLoginError("Une erreur est survenue. Veuillez réessayer plus tard.");
                }
            } else {
                setLoginError("Erreur inconnue.");
            }
        }
    };
    return {
        loginError, handleLogin, methods
    }
}