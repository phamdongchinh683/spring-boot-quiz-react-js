import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../../../components/Forms/Input";
import useTokens from "../../../../../jwt/useTokens";
import Service from "../../../../../service/index";
import { AuthContext } from "../../../../../contexts";
import { setUsername, setPassword } from "../../../../../redux/Auth";
import AuthFeature from "../../../../../contexts/Hooks/AuthContext";

const LoginAccount = () => {
  const [state, dispatchAuth] = useContext(AuthContext);
  const { username, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { setToken } = useTokens();
  const { Login } = Service();
  const inputUsername = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const inputPassword = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      dispatchAuth({
        type: "error",
        payload: "Username or password is incorrect",
      });
      return;
    }
    try {
      const token = await Login({ username, password });

      if (!token) {
        dispatchAuth({ type: "error", payload: token.error });
      } else {
        setToken(token);
        dispatch(setUsername(""));
        dispatch(setPassword(""));
        dispatchAuth({ type: "show", payload: true });
        window.location.reload();
      }
    } catch (error) {
      dispatchAuth({ type: "error", payload: error.response.data.message });
    }
  };

  const commonProps = {
    setToken: setToken,
    error: state.error,
    userName: (
      <Input
        type="text"
        placeholder=""
        className="input-box-placeholder"
        name="username"
        value={username}
        onChange={inputUsername}
        required
      />
    ),
    passWord: (
      <Input
        type="password"
        name="password"
        value={password}
        placeholder=""
        className="input-box-placeholder"
        onChange={inputPassword}
        required
      />
    ),
    button: (
      <Input
        type="submit"
        value="Login"
        className="button-login"
        onClick={handleSubmit}
      />
    ),
  };

  return (
    <AuthFeature>
      <AuthFeature.LoginForm {...commonProps} />
    </AuthFeature>
  );
};

export default LoginAccount;
