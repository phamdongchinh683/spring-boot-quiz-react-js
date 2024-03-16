import React from 'react';

import NavigationLink from "../../../../../mock/test.json";
import Guest from './Guest';
import { FlyAuth } from '../../../../../contexts/index';
import NavigationOfUser from '../../../../../components/Layout/Navigation/Components/NavigationOfUser';
import useTokens from '../../../../../jwt/useTokens';
import AuthContext from "../../../../../contexts/Hooks/AuthContext";

const LoginStatus = () => {
    const [state, dispatch] = React.useContext(FlyAuth);
    const { token, setToken } = useTokens();

    const commonProps = {
        NavigationUser: NavigationLink.userRouter,
        showDropdownUser:
            <AuthContext.LoginSuccessful
                setToken={setToken}
                TextStatus={'Welcome'} />,
        Status: <AuthContext.Logout />
    };

    React.useEffect(() => {
        if (token) {
            dispatch({ type: "show", payload: true });
        }
    }, [dispatch, token]);

    return (
        <AuthContext>
            {state.isLoggedIn ? (
                <NavigationOfUser
                    {...commonProps}
                />
            ) : (
                <Guest TextStatus={"Guest"}
                    LinkTo={"login"} />
            )}
        </AuthContext>
    );
};

export default LoginStatus