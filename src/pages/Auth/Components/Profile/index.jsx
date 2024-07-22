import React from 'react';

import "../Profile/index.scss";
import PropTypes from 'prop-types';

const Profile = ({ detail, profileImage, profileName, titleName, endPoints, detailContent, button, handleImage, error, response, handleError }) => {
  return (
    <div className="container-profile">
      <h1 className="title-page-h1">{titleName}</h1>
      <div>
        <hr></hr>
      </div>
      <div className="row">
        <div className="container-profile-image">
          <div className="profile-image-center">
            {profileImage}
            {profileName}
            {handleImage}
          </div>
        </div>
        <div className="personal-info">
          <div className="container-profile-info-nav">
            <h2>{detailContent}</h2>
            <div>
              {error && (
                <div className="alert alert-info alert-dismissible">
                  {handleError}
                  {response}
                </div>
              )}
            </div>
            <div className='container-profile-nav'>
              {endPoints}
            </div>
          </div>
          <div className="container-personal-info">
            <form className="form-horizontal">
              {detail}
            </form>
          </div>
          <div className="container-profile-btn">
            {button}
          </div>
        </div>

      </div>
    </div>
  )
}

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
  profileName: PropTypes.string
};

export default Profile;
