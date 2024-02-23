import React from 'react';
import "../../styles/login.scss";

const LoginForm = (
  { linkText,
    setToken,
    error,
    userName,
    passWord,
    button,
    submit }) => {
  return (
    <div className='login-center'>
      <div className="container-login">
        <form action='/' onSubmit={submit}>
          <div className="title">Login</div>
          <div className="input-box underline">
            <>{userName}</>
            <div className="underline"></div>
          </div>
          <div className="input-box">
            <>{passWord}</>
            <div className="underline"></div>
          </div>
          <div className="input-box button">
            {button}
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
        <div className='option-login'><a href='/signup'>{linkText}</a></div>
      </div>
    </div>
  );
};

export default LoginForm;
