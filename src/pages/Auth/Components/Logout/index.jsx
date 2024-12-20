import React from 'react';

import Input from '../../../../components/forms/Input';
import useTokens from '../../../../jwt';

const Logout = () => {
    const { deleteToken } = useTokens();
    const handleLogout = () => {
        window.location.reload();
        deleteToken();
    };
    return (
        <div className="container-button-logout">
            <i className="fa fa-sign-out" style={{ fontSize: "20px" }}>
                <Input
                    type={"button"}
                    value={"Sign out"}
                    onClick={handleLogout}
                    className={"button-logout-style"}
                />
            </i>
        </div>
    );
};

export default Logout;
