import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../../../components/Forms/Input";
import AuthFeature from "../../../../../contexts/Hooks/AuthContext";
import { AuthContext } from "../../../../../contexts";
import Service from "../../../../../service";

const SignUpAccount = () => {
  const [state, dispatch] = React.useContext(AuthContext);
  const dispatchAuth = useDispatch();
  const { userNameSignUp, passWordSignUp, emailSignUp, telePhoneSignUp } =
    useSelector((state) => state.auth);
  const { SignUp } = Service();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      !userNameSignUp ||
      !passWordSignUp ||
      !emailSignUp ||
      !telePhoneSignUp
    ) {
      dispatch({
        type: "error",
        payload: "Please fill in all information",
      });
      return;
    }
    try {
      const addUser = await SignUp({
        username: userNameSignUp,
        password: passWordSignUp,
        email: emailSignUp,
        telephone: telePhoneSignUp,
      });
      if (addUser.error) {
        console.log("SignUp failed");
      } else {
        console.log("SignUp successful");
      }
    } catch (error) {
      console.error("SignUp failed:", error);
    }
  };

  const commonProps = {
    userName: (
      <Input
        type={"text"}
        placeholder={"Enter Your Username"}
        value={userNameSignUp}
        className={"input-box-placeholder"}
        required
      />
    ),
    passWord: (
      <Input
        type={"password"}
        placeholder={"Enter Your Password"}
        className={"input-box-placeholder"}
        value={passWordSignUp}
        required
      />
    ),
    Email: (
      <Input
        type={"email"}
        placeholder={"Enter Your Email"}
        className={"input-box-placeholder"}
        value={emailSignUp}
        required
      />
    ),
    telePhone: (
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="VN"
        className={"input-box"}
        value={telePhoneSignUp}
      />
    ),
    button: (
      <Input
        type={"submit"}
        className={"button-signup"}
        onClick={handleSignUp}
        value={"Sign Up"}
      />
    ),
    error: state.error,
  };

  return (
    <AuthFeature>
      <AuthFeature.SignUpForm {...commonProps} />
    </AuthFeature>
  );
};

export default SignUpAccount;
