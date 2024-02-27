class api {
  apiUrl = process.env.REACT_APP_API_URL;
  loginApiUrl = "http://localhost:8080/login";
  sendEmailApiUrl = "http://localhost:8080/register";
}

module.exports = new api();
