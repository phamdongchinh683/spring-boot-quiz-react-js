import React from 'react';

import PropTypes from 'prop-types';

import "./index.scss";

const SignUpForm = ({
  userName,
  passWord,
  Email,
  telePhone,
  button,
  error
}) => {

  return (
    <div className='signup-center'>
      <div className="container-signup">
        <form>
          <div className="title">Sign Up</div>
          <div className="input-box underline">
            {userName}
            <div className="underline"></div>
          </div>
          <div className="input-box">
            {passWord}
            <div className="underline"></div>
          </div>
          <div className="input-box">
            {Email}
            <div className="underline"></div>
          </div>
          <div className="input-box">
            {telePhone}
            <div className="underline"></div>
          </div>
          <div className="input-box button">
            {button}
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

SignUpForm.propsType = {
  username: PropTypes.string,
  passWord: PropTypes.string,
  Email: PropTypes.string,
  telephone: PropTypes.number,
  button: PropTypes.func,
  error: PropTypes.bool,
};

export default SignUpForm;