import React from "react";

import AuthContext from "../../../contexts/Hooks/AuthContext";

const AuthForm = () => {
  return (
    <AuthContext>
      <AuthContext.LoginAccount />
    </AuthContext>
  );
};

export default AuthForm;
