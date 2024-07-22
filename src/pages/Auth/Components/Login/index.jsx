import React from 'react';
import PropTypes from 'prop-types';

import "./index.scss";
const LoginForm = (
  { linkText,
    setToken,
    error,
    userName,
    passWord,
    button,
  }) => {
  return (
    <div className='container-login-center'>
      <div className="container-login">
        <form >
          <div className="title">Sign in with your management credentials</div>
          <div className='login-title-name'>Username or mobile phone number</div>
          <div className="input-box underline">
            {userName}
            <div className="underline"></div>
          </div>
          <div className='login-title-name'>Password</div>
          <div className="input-box">
            {passWord}
            <div className="underline"></div>
          </div>
          <div div className="input-box button">
            {button}
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  linkText: PropTypes.string,
  setToken: PropTypes.func,
  error: PropTypes.bool,
  userName: PropTypes.object,
  passWord: PropTypes.object,
  button: PropTypes.object,
};

export default LoginForm;
