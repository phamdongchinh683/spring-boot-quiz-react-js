import React, { useReducer, useEffect, useContext } from "react";
import Guest from "./Guest";
import Input from "../../forms/Input";
import { DropDownUser } from "../../forms/DropDown";
import DropDown from "../../../mock/test.json";
import { useTokens } from "../Auth/useTokens";
import { FlyAuthContext } from "../../contexts/MyContext";
import LoginForm from "../../forms/Login";

export function FlyAuth(props) {
    const initialState = {
        isLoggedIn: false,
        username: "",
        password: "",
        error: false,
        hide: true,
    };

    const authReducer = (state, action) => {
        switch (action.type) {
            case "username":
                return {
                    ...state,
                    username: action.payload,
                };
            case "password":
                return {
                    ...state,
                    password: action.payload,
                };
            case "error":
                return {
                    ...state,
                    error: action.payload,
                };
            case "show":
                return {
                    ...state,
                    isLoggedIn: action.payload,
                };
            case "hideAdmin":
                return {
                    ...state,
                    hide: action.payload,
                }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <FlyAuthContext.Provider value={[state, dispatch]}>
            {props.children}
        </FlyAuthContext.Provider>
    );
}

const LoginAccount = () => {
    const [state, dispatch] = useContext(FlyAuthContext);

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

    const login = async (credentials) => {
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const { setToken } = useTokens();

    const handleSubmit = async () => {
        if (!state.username || !state.password) {
            dispatch({
                type: "error",
                payload: "Please fill in all fields.",
            });
            return;
        }

        try {
            const token = await login({
                username: state.username,
                password: state.password,
            });

            if (token.error) {
                dispatch({ type: "error", payload: token.error });
            } else {
                setToken(token);
                dispatch({ type: "hide", payload: false }) //hide admin
                dispatch({ type: "show", payload: true });
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <>
            <LoginForm
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
                        type={"submit"}
                        value={"Login"}
                        className={"button-login"}
                        onClick={handleSubmit}
                    />
                }
            />
        </>
    );
};


const LoginSuccessful = ({ setToken, TextStatus }) => {
    return (
        <div className="container-status-login">
            <Guest setToken={setToken} TextStatus={TextStatus} />
        </div>
    );
};

const LoginStatus = () => {
    const [state, dispatch] = React.useContext(FlyAuthContext);
    const { token, setToken } = useTokens();

    useEffect(() => {
        if (token) {
            dispatch({ type: "show", payload: true });
        }
    }, [dispatch, token]);

    return (
        <>
            {state.isLoggedIn ? (
                <DropDownUser
                    DropdownUser={DropDown.userRouter}
                    showDropdownUser={
                        <LoginSuccessful setToken={setToken} TextStatus={'Welcome'} />
                    }
                    Status={<Logout />}
                />
            ) : (
                <Guest TextStatus={"Guest"} LinkTo={"login"} />
            )}
        </>
    );
};


const Logout = () => {
    const { deleteToken } = useTokens();

    const handleLogout = () => {
        window.location.reload(false);
        deleteToken();
    };

    return (
        <div className="container-button-logout">
            <i className="fa fa-sign-out" style={{ fontSize: "20px" }}></i>
            <Input
                type={"button"}
                value={"Sign out"}
                onClick={handleLogout}
                className={"button-logout-style"}
            />
        </div>
    );
};

FlyAuth.Logout = Logout;
FlyAuth.LoginStatus = LoginStatus;
FlyAuth.LoginSuccessful = LoginSuccessful;
FlyAuth.LoginAccount = LoginAccount;

export default FlyAuth;
