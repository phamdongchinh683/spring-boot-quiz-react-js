import React from 'react';

import useTokens from '../../../../jwt/useTokens';
import Input from '../../../../components/Forms/Input';

const Logout = () => {
    const { deleteToken } = useTokens();

    const handleLogout = () => {
        deleteToken()
    };

    return (
        <div className="container-button-logout">
            <i className="fa fa-sign-out" style={{ fontSize: "20px" }}></i>
            <Input
                type={"button"}
                value={"Sign out"}
                onClick={handleLogout}
                className={"button-logout-style"}
            />
        </div>
    );
};

export default Logout;
