import React from 'react';
import SignUp from '../../forms/SignUp';
import { FlyAuth } from './AuthContext';
import Admim from "../admin/index";
const AuthForm = (props) => {
  const { swapForm } = props;
  return (
    <FlyAuth>
      {swapForm ? <FlyAuth.LoginAccount /> : <SignUp />}
    </FlyAuth>
  );
};

export default AuthForm;
