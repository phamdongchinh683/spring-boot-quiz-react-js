import axios from "axios";

import api from "../api/api";

const Service = () => {
  const { loginApiUrl, sendEmailApiUrl } = api;

  const Login = async (credentials) => {
    console.log(loginApiUrl);
    try {
      const res = await axios.post(loginApiUrl, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("Login failed with status:", res.status);
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const sendEmail = async (parameter) => {
    try {
      const res = await axios.post(sendEmailApiUrl, parameter, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      throw new Error("Failed");
    }
  };

  return {
    Login,
    sendEmail,
  };
};

export default Service;
