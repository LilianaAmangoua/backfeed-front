import {createContext, type ReactNode, useContext, useEffect, useState} from "react";
import {getRole} from "../features/auth/login-form/LoginService.ts";

interface AuthContextProps {
    role: string | null;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: ReactNode) => {

    const [role, setRole] = useState<string | null>(null);
    const fetchRole = async () => {
        try{
            const response = await getRole();
            console.log("Role response : ", response.data)
            setRole(response.data);
        } catch(e){
            console.error(e);
        }
    }
    useEffect(() => {
        fetchRole();
    }, []);

    return (
        <AuthContext.Provider value={{role}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === null) {
        throw new Error("useAuth must be used within the AuthProvider");
    }
    return context;
}