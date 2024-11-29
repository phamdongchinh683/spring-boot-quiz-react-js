import React, { useReducer } from "react";

import { AuthContext } from "../index";
import Logout from "../../pages/Auth/Components/Logout";
import LoginAccount from "../../pages/Auth/Components/Login/Components/LoginAccount";
import LoginForm from "../../pages/Auth/Components/Login";
import ProfileImage from "../../pages/Auth/Components/Profile/ProfileImage";
import Profile from "../../pages/Auth/Components/Profile";
import Guest from "../../pages/Auth/Components/Guest/Guest";

const AuthFeature = (props) => {
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
    <AuthContext.Provider value={[state, dispatchAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthFeature.LoginForm = LoginForm;
AuthFeature.Logout = Logout;
AuthFeature.LoginAccount = LoginAccount;
AuthFeature.ProfileImage = ProfileImage;
AuthFeature.Profile = Profile;
AuthFeature.Guest = Guest;

export default AuthFeature;
