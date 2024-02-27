import React from 'react';
import PropTypes from 'prop-types';

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

AuthForm.propTypes = {
  props: PropTypes.bool
};

export default AuthForm;
