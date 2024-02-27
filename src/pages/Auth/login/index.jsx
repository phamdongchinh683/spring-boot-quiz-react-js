import React from 'react';
import "./login.scss";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginForm = (
  { linkText,
    setToken,
    error,
    userName,
    passWord,
    button,
    submit }) => {
  return (
    <>
      <div className='login-center'>
        <div className="container-login">
          <form onSubmit={submit}>
            <div className="title">Login</div>
            <div className="input-box underline">
              <>{userName}
                <div className="underline"></div>
              </>
            </div>
            <div className="input-box">
              <>{passWord}
                <div className="underline"></div>
              </>
            </div>
            <div className="input-box button">
              {button}
            </div>
          </form>
          {error && <div className="error-message">{error}</div>}
          <div className='option-login'><Link to='/signup'>{linkText}</Link></div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
