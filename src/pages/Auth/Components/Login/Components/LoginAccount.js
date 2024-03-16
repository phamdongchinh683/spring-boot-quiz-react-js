import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from '../../../../../components/Forms/Input';
import useTokens from "../../../../../jwt/useTokens";
import Service from "../../../../../service/index";
import AuthContext from "../../../../../contexts/Hooks/AuthContext";
import { FlyAuth } from "../../../../../contexts";
import { setUsername, setPassword } from "../../../../../redux/Auth/AuthSlice";

const LoginAccount = () => {
    const [state, dispatchAuth] = React.useContext(FlyAuth);
    const { username, password } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { setToken } = useTokens();
    const { Login } = Service();

    const inputUsername = (e) => {
        dispatch(setUsername(e.target.value));
    }

    const inputPassword = (e) => {
        dispatch(setPassword(e.target.value));
    };

    const handleSubmit = async (e) => {

        e.preventDefault()
        if (!username || !password) {
            dispatchAuth({
                type: "error",
                payload: "Please fill in all fields.",
            });
            return;
        }
        try {
            const token = await Login(
                {
                    username: username,
                    password: password,
                });
            if (token.error) {
                dispatchAuth({ type: "error", payload: token.error });
            } else {
                setToken(token);
                dispatchAuth({ type: "show", payload: true });
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const commonProps = {
        linkText: "New customer?",
        setToken: setToken,
        error: state.error,
        userName: <Input
            type={"text"}
            placeholder={"Username or Email"}
            className={"input-box-placeholder"}
            name={"username"}
            value={username}
            onChange={inputUsername}
            required
        />,
        passWord:
            <Input
                type={"password"}
                name={"password"}
                value={password}
                placeholder={"Enter Your Password"}
                className={"input-box-placeholder"}
                onChange={inputPassword}
                required
            />,
        button:
            <Input
                type={"button"}
                value={"Login"}
                className={"button-login"}
                onClick={handleSubmit}
            />,
    };


    return (
        <AuthContext>
            <AuthContext.LoginForm
                {...commonProps}
            />
        </AuthContext>
    );
};

export default LoginAccount;
