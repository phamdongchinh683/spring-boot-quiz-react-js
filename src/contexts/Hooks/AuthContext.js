import React, { useReducer } from "react";

import { FlyAuth } from "../index";
import Logout from '../../pages/Auth/Components/Logout/index';
import LoginSuccessful from '../../pages/Auth/Components/Login/Components/LoginSuccessful';
import LoginAccount from '../../pages/Auth/Components/Login/Components/LoginAccount';
import LoginStatus from '../../pages/Auth/Components/Login/Components/LoginStatus';
import LoginForm from '../../pages/Auth/Components/Login/index';
import SignUpAccount from '../../pages/Auth/Components/SignUp/Components/SignUpAccount';
import SignUpForm from "../../pages/Auth/Components/SignUp/index";

const AuthContext = (props) => {
    const initialState = {
        isLoggedIn: false,
        error: false,
        hide: true,
    };

    const authReducer = (state, action) => {
        switch (action.type) {
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
            default:
                return state;
        }
    };

    const [state, dispatchAuth] = useReducer(authReducer, initialState);

    return (
        <FlyAuth.Provider value={[state, dispatchAuth]}>
            {props.children}
        </FlyAuth.Provider>
    );
};


AuthContext.LoginForm = LoginForm;
AuthContext.SignUpForm = SignUpForm;
AuthContext.Logout = Logout;
AuthContext.LoginStatus = LoginStatus;
AuthContext.LoginAccount = LoginAccount;
AuthContext.LoginSuccessful = LoginSuccessful;
AuthContext.SignUpAccount = SignUpAccount;

export default AuthContext;
