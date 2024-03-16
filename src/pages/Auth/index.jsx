import React from "react";
import AuthContext from "../../contexts/Hooks/AuthContext";

const AuthFormComponent = () => {
    return (
        <AuthContext>
            <AuthContext.LoginStatus />
        </AuthContext>
    )
}

export default AuthFormComponent;