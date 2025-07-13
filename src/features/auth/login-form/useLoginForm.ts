import {useForm} from "react-hook-form";
import {useState} from "react";
import {logUser} from "./LoginService.ts";

type LoginFormData = {
    email: string;
    password: string;
};

export const useLoginForm = () => {
    const methods = useForm();
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
    return {
        loginError, handleLogin, methods
    }
}