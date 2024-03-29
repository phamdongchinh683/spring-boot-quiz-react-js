import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationOfUser = ({ NavigationUser, showDropdownUser, Status }) => {
  return (
    <div className="dropdown-menu-user">
      <div>{showDropdownUser}</div>
      <ul className="dropdown-menu-content-user">
        {NavigationUser.map((NavigationUserItem) => (
          <Link
            to={NavigationUserItem.linkRouter}
            className="dropdown-content-link-user"
            key={NavigationUserItem.id}
          >
            {NavigationUserItem["name-navigation"]}
          </Link>
        ))}
        <div key="status">{Status}</div>
      </ul>
    </div>
  );
};

NavigationOfUser.propTypes = {
  NavigationUser: PropTypes.array,
  showDropdownUser: PropTypes.object,
  Status: PropTypes.object,
};

export default NavigationOfUser;
