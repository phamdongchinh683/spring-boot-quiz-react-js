import axios from "axios";
import api from "../api";
import useTokens from "../jwt/useTokens";

const Service = () => {
  const { getToken } = useTokens();
  const {
    loginApi,
    profileApi,
    testListApi,
    updateProfileApi,
    removeProfileImageApi,
    uploadImageApi,
    provinceApi,
    updatePasswordApi,
    questionApi,
    submitResultApi,
    examHistoryApi,
  } = api;
  const token = getToken();

  const Login = async (credentials) => {
    try {
      const res = await axios.post(loginApi, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      throw error;
    }
  };
  // profile
  const getProfile = async () => {
    try {
      const response = await axios.get(profileApi, {
        headers: {
          token: token.data,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  const removeProfileImage = async (id) => {
    try {
      const res = await axios.post(removeProfileImageApi, id, {
        headers: {
          token: token.data,
        },
      });
      if (!res) {
        return res.data;
      } else {
        return res.data;
      }
    } catch (error) {
      throw error;
    }
  };

  const updateProfile = async (credentials) => {
    try {
      const res = await axios.post(updateProfileApi, credentials, {
        headers: {
          token: token.data,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const updatePassword = async (credentials) => {
    try {
      const res = await axios.post(updatePasswordApi, credentials, {
        headers: {
          token: token.data,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const uploadImage = async (file) => {
    if (!file) {
      console.error("No file selected");
      return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME
    );
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    try {
      const res = await axios.post(uploadImageApi, data);
      return res.data.public_id;
    } catch (error) {
      return error.message;
    }
  };

  const provinceList = async () => {
    try {
      const res = await axios.get(provinceApi, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return res.data.results;
    } catch (error) {
      throw error;
    }
  };

  //exam
  const examList = async () => {
    try {
      const response = await axios.get(testListApi, {
        headers: {
          token: token.data,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  const takeExam = async (id) => {
    try {
      const res = await axios.post(
        questionApi + `${id}`,
        {},
        {
          headers: {
            token: token.data,
          },
        }
      );
      return res.data.data;
    } catch (error) {
      return error.response.data.message;
    }
  };

  const submitResults = async (param, id) => {
    try {
      const res = await axios.post(submitResultApi + `${id}`, param, {
        headers: {
          token: token.data,
        },
      });
      return res.data;
    } catch (error) {
      return error.response.data.message;
    }
  };

  const examHistory = async () => {
    try {
      const res = await axios.get(examHistoryApi, {
        headers: {
          token: token.data,
        },
      });
      return res.data.data;
    } catch (error) {
      return error.response.data.message;
    }
  };

  return {
    Login,
    getProfile,
    examList,
    updateProfile,
    uploadImage,
    removeProfileImage,
    provinceList,
    updatePassword,
    takeExam,
    submitResults,
    examHistory,
  };
};

export default Service;
