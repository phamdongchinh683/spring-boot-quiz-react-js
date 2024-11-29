class api {
  loginApi = process.env.REACT_APP_LOGIN_API;
  profileApi = process.env.REACT_APP_PROFILE_API;
  testListApi = process.env.REACT_APP_TEST_LIST_API;
  updateProfileApi = process.env.REACT_APP_UPDATE_PROFILE_API;
  updatePasswordApi = process.env.REACT_APP_UPDATE_PASSWORD_API;
  uploadImageApi = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;
  removeProfileImageApi = process.env.REACT_APP_REMOVE_PROFILE_IMAGE_API;
  provinceApi = process.env.REACT_APP_API_VIETNAM_PROVINCES_API;
  questionApi = process.env.REACT_APP_GET_QUESTION_API;
  submitResultApi = process.env.REACT_APP_SUBMIT_RESULT_API;
  examHistoryApi = process.env.REACT_APP_EXAM_HISTORY_API;
}



module.exports = new api();
