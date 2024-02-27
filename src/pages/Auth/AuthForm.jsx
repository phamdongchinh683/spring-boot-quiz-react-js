import React from 'react';

import SignUp from '../Auth/signup/index';
import FlyOutAuth from '../../contexts/hooks/AuthContext';

const AuthForm = (props) => {
  const { swapForm } = props;
  return (
    <FlyOutAuth>
      {swapForm ? <FlyOutAuth.LoginAccount /> : <SignUp />}
    </FlyOutAuth>
  );
};

export default AuthForm;
