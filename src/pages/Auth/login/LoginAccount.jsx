import React from "react";

import Input from '../../../components/forms/Input';
import { FlyAuth } from "../../../contexts";
import useTokens from "../../../token/useTokens";
import Service from "../../../service/index";
import FlyOutAuth from "../../../contexts/hooks/AuthContext";

const LoginAccount = () => {
    const [state, dispatch] = React.useContext(FlyAuth);
    const { setToken } = useTokens();
    const { Login } = Service();

    const inputUsername = (e) => {
        dispatch({
            type: "username",
            payload: e.target.value,
        });
    };

    const inputPassword = (e) => {
        dispatch({
            type: "password",
            payload: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!state.username || !state.password) {
            dispatch({
                type: "error",
                payload: "Please fill in all fields.",
            });
            return;
        }
        try {
            const token = await Login({
                username: state.username,
                password: state.password,
            });
            if (token.error) {
                dispatch({ type: "error", payload: token.error });
            } else {
                setToken(token);
                dispatch({ type: "show", payload: true });
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <FlyOutAuth>
            <FlyOutAuth.LoginForm
                linkText={"New customer?"}
                setToken={setToken}
                error={state.error}
                userName={
                    <Input
                        type={"text"}
                        placeholder={"Username or Email"}
                        className={"input-box-placeholder"}
                        name={"username"}
                        value={state.username}
                        onChange={(e) => inputUsername(e)}
                        required
                    />
                }
                passWord={
                    <Input
                        type={"password"}
                        name={"password"}
                        value={state.password}
                        placeholder={"Enter Your Password"}
                        className={"input-box-placeholder"}
                        onChange={(e) => inputPassword(e)}
                        required
                    />
                }
                button={
                    <Input
                        type={"button"}
                        value={"Login"}
                        className={"button-login"}
                        onClick={handleSubmit}
                    />
                }
            />
        </FlyOutAuth>
    );
};

export default LoginAccount;
