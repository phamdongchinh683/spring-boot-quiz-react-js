class api {
  loginApiUrl = process.env.REACT_APP_LOGIN_API;
  sendEmailApiUrl = process.env.REACT_APP_SEND_EMAIL_API;
  signupApiUrl = process.env.REACT_APP_SIGNUP_API;
};

module.exports = new api();
