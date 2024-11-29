import PropTypes from "prop-types";
import React from "react";
import "../Profile/index.scss";

const Profile = ({
  detail,
  profileImage,
  profileName,
  titleName,
  endPoints,
  detailContent,
  button,
  handleImage,
  error,
  response,
  handleError,
}) => {
  return (
    <div className="container-profile p-8 bg-gray-50 shadow-md rounded-lg transition-all duration-300">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{titleName}</h1>
      <hr className="mb-6 border-gray-300" />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="container-profile-image flex flex-col items-center gap-4">
          <div className="profile-image-center animate-fade-in">
            {profileImage}
            <h2 className="text-xl font-medium">{profileName}</h2>
            {handleImage}
          </div>
        </div>
        <div className="personal-info w-full">
          <div className="container-profile-info-nav mb-4">
            <h2 className="text-2xl font-semibold">{detailContent}</h2>
            {error && (
              <div className="alert alert-info p-3 text-red-600 bg-red-100 rounded-md mb-4 animate-slide-in">
                {handleError}
                {response}
              </div>
            )}
            <div className="container-profile-nav flex gap-4 flex-wrap">
              {endPoints}
            </div>
          </div>
          <div className="container-personal-info bg-white p-4 rounded-md shadow-sm">
            <form className="form-horizontal grid gap-4">
              {detail}
            </form>
          </div>
          <div className="container-profile-btn mt-6 flex gap-4 justify-end">
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  detail: PropTypes.arrayOf(PropTypes.element).isRequired,
  profileImage: PropTypes.object,
  featureName: PropTypes.string,
  detailContent: PropTypes.string,
  titleName: PropTypes.string,
  endPoints: PropTypes.array,
  button: PropTypes.array,
  handleImage: PropTypes.array,
  error: PropTypes.bool,
  response: PropTypes.string,
  handleError: PropTypes.object,
  profileName: PropTypes.string,
};

export default Profile;
