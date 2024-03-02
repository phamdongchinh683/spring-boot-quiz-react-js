import React from 'react';
// import { useNavigate } from "react-router-dom";

import NavigationLink from "../../../mock/test.json";
import Guest from '../Guest';
import { FlyAuth } from '../../../contexts';
import NavigationOfUser from '../../../components/layout/Navigation/NavigationOfUser';
import useTokens from '../../../token/useTokens';
import FlyOutAuth from "../../../contexts/hooks/AuthContext";


const LoginStatus = () => {
    const [state, dispatch] = React.useContext(FlyAuth);
    const { token, setToken } = useTokens();

    React.useEffect(() => {
        if (token) {
            dispatch({ type: "show", payload: true });
        }
    }, [dispatch, token]);

    return (
        <FlyOutAuth>
            {state.isLoggedIn ? (
                <NavigationOfUser
                    NavigationUser={NavigationLink.userRouter}
                    showDropdownUser={
                        <FlyOutAuth.LoginSuccessful
                            setToken={setToken}
                            TextStatus={'Welcome'} />
                    }
                    Status={<FlyOutAuth.Logout />}
                />
            ) : (
                <Guest TextStatus={"Guest"}
                    LinkTo={"login"} />
            )}
        </FlyOutAuth>
    );
};

export default LoginStatus