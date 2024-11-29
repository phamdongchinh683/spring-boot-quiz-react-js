import React from "react";
import useTokens from "../../../../../../jwt";
import NavigationLinks from "../../../../../../components/layout/Navigation";
import Guest from '../../../Guest/Guest';

const LoginStatus = () => {
    const { token } = useTokens();
    return (
        <>
            {token ? (
                <NavigationLinks status={"Welcome"} />
            ) :
                <NavigationLinks status={<Guest TextStatus={"Guest"} />} />}
        </>
    )
}

export default LoginStatus;