import React from "react";
import FlyOutAuth from "../../contexts/hooks/AuthContext";

const AuthFormComponent = () => {
    return (
        <FlyOutAuth>
            <FlyOutAuth.LoginStatus />
        </FlyOutAuth>
    )
}

export default AuthFormComponent;