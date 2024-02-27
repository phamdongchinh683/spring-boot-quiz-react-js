import { Link } from "react-router-dom";

const LogoPage = ({ image }) => {
    return (
        <div className="page-logo">
            <Link to="/">
                <img src={image} alt="Logo" className="page-image-logo" />
            </Link>
        </div>
    );
};

export default LogoPage;