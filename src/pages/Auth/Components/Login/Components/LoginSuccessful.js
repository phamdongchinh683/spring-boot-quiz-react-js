import Guest from "./Guest";
import PropTypes from "prop-types";

const LoginSuccessful = ({ setToken, TextStatus }) => {
  return (
    <div className="container-status-login">
      <Guest setToken={setToken} TextStatus={TextStatus} />
    </div>
  );
};

LoginSuccessful.propTypes = {
  setToken: PropTypes.func,
  TextStatus: PropTypes.string,
};
export default LoginSuccessful;
