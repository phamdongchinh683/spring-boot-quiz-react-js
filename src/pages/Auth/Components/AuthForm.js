import React from 'react';
import PropTypes from 'prop-types';

import AuthContext from '../../../contexts/Hooks/AuthContext';

const AuthForm = ({ swapForm }) => {
  return (
    <AuthContext>
      {swapForm ? <AuthContext.LoginAccount /> : <AuthContext.SignUpAccount />}
    </AuthContext>
  );
};

AuthForm.propTypes = {
  swapForm: PropTypes.bool
};

export default AuthForm;
