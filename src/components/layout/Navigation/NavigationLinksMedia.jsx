import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const NavigationLinksMedia = ({ routerDropdown, status, loginAdmin }) => {
    return (
        <>
            <div className="menu-dropdown">
                <div className="icon">&#9776;</div>
                <div className="dropdown-content">
                    {routerDropdown.map((routerDropdownItem) => (
                        <Link to={routerDropdownItem.linkRouter} className="dropdown-content-link" key={routerDropdownItem.id}>
                            {routerDropdownItem["name-navigation"]}
                        </Link>
                    ))}
                    <div className="nav-router-page" key="status">
                        <div className="dropdown-content-link">
                            {status}
                        </div>
                    </div>
                    <div className="nav-router-page" key="loginAdmin">
                        <div className="dropdown-content-link">
                            {loginAdmin}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

NavigationLinksMedia.propTypes = {
    routerDropdown: PropTypes.array,
    status: PropTypes.object,
    loginAdmin: PropTypes.object
};

export default NavigationLinksMedia;