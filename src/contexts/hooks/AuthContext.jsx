import React, { useReducer } from "react";

import { FlyAuth } from "../index";
import Logout from '../../pages/Auth/logout/index';
import LoginSuccessful from '../../pages/Auth/login/LoginSuccessful';
import LoginAccount from '../../pages/Auth/login/LoginAccount';
import LoginStatus from '../../pages/Auth/login/LoginStatus';
import LoginForm from '../../pages/Auth/login/index';

const FlyOutAuth = (props) => {
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
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <FlyAuth.Provider value={[state, dispatch]}>
            {props.children}
        </FlyAuth.Provider>
    );
};


FlyOutAuth.Logout = Logout;
FlyOutAuth.LoginStatus = LoginStatus;
FlyOutAuth.LoginSuccessful = LoginSuccessful;
FlyOutAuth.LoginAccount = LoginAccount;
FlyOutAuth.LoginForm = LoginForm;

export default FlyOutAuth;
