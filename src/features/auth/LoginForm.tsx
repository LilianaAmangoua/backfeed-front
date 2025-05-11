import {FC} from 'react';
import {InputDefault} from "../../components/InputDefault.tsx";

const LoginForm: FC<{}> = ({}) => {
    return (
        <div>
            <InputDefault label={"Email"}/>
            <InputDefault  label={"Password"}/>
        </div>
    );
};

export default LoginForm;
