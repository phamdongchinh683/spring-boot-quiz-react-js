import React from "react";
import { FlyAuth } from "../Auth/AuthContext";
function AuthFormComponent() {
    return (
        <FlyAuth>
            <FlyAuth.LoginStatus />
        </FlyAuth>
    )
}

export default AuthFormComponent;