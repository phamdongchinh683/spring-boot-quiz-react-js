import React from "react";

import NavigationLink from "../../../../../mock/test.json";
import Guest from "./Guest";
import { AuthContext } from "../../../../../contexts/index";
import NavigationOfUser from "../../../../../components/Layout/Navigation/Components/NavigationOfUser";
import useTokens from "../../../../../jwt/useTokens";
import AuthFeature from "../../../../../contexts/Hooks/AuthContext";

const LoginStatus = () => {
  const [state, dispatch] = React.useContext(AuthContext);
  const { token, setToken } = useTokens();

  const commonProps = {
    NavigationUser: NavigationLink.userRouter,
    showDropdownUser: (
      <AuthFeature.LoginSuccessful setToken={setToken} TextStatus={"Welcome"} />
    ),
    Status: <AuthFeature.Logout />,
  };

  React.useEffect(() => {
    if (token) {
      dispatch({ type: "show", payload: true });
    }
  }, [dispatch, token]);

  return (
    <AuthFeature>
      {state.isLoggedIn ? (
        <NavigationOfUser {...commonProps} />
      ) : (
        <Guest TextStatus={"Guest"} LinkTo={"/login"} />
      )}
    </AuthFeature>
  );
};

export default LoginStatus;
