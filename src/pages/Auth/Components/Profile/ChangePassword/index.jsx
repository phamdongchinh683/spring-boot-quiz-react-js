import { jwtDecode } from "jwt-decode";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation } from 'react-router-dom';
import Input from '../../../../../components/forms/Input';
import AuthFeature from '../../../../../contexts/Hooks/AuthContext';
import useTokens from "../../../../../jwt";
import {
    setErrorMessage,
    setNewPassword,
    setPassword,
    setResponseMessage,
} from "../../../../../redux/Auth";
import Service from "../../../../../service";
import InputInfo from '../InputInfo/index';
const ChangePassword = () => {
    const { password, newPassword, response, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { updatePassword } = Service();
    const { state } = useLocation();
    const profile = state?.data;
    const { token } = useTokens();

    const handleInputChange = (field, value) => {
        if (value === profile[field]) {
            switch (field) {
                case 'password':
                    dispatch(setPassword(""));
                    break;
                case 'newPassword':
                    dispatch(setNewPassword(""));
                    break;
                default:
                    break;
            }
        } else {
            switch (field) {
                case 'password':
                    dispatch(setPassword(value));
                    break;
                case 'newPassword':
                    dispatch(setNewPassword(value));
                    break;
                default:
                    break;
            }
        }
    };

    const changePassword = async (e) => {
        e.preventDefault();
        try {
            const decoded = jwtDecode(token)
            const update = await updatePassword({ password, newPassword }, decoded.sub);
            if (update.data !== "Please check current password") {
                dispatch(setErrorMessage(true));
                dispatch(setResponseMessage(update.message));
            } else {
                dispatch(setErrorMessage(false));
                alert(update.message);
                dispatch(setResponseMessage(update.message));
            }
        } catch (error) {
            dispatch(setErrorMessage(true));
            dispatch(setResponseMessage(error.response.data.message));
        }
    }

    const commonProps = {
        detail: [
            <InputInfo info="Current password" type={"password"} placeholder={"Current password"} onChange={(e) => handleInputChange('password', e.target.value)}
            />,
            <InputInfo info="New password" type={"password"} placeholder={"New password"} onChange={(e) => handleInputChange('newPassword', e.target.value)}
            />,
        ],
        profileImage: <AuthFeature.ProfileImage avatar={profile.image} />,
        button: [<Input
            type={"button"}
            className="btn-toggle bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700"
            value={"Save Changes"}
            onClick={changePassword}
        />,
        <Link to="/profile" >
            <Input
                type={"button"}
                className="btn-toggle bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700"
                defaultValue={"Cancel"}
            />
        </Link >],
        titleName: "Password and security",
        detailContent: "Password",
        error: error,
        response: response,
        handleError: <Input
            type={"button"}
            className={"panel-close close m-1"}
            onClick={() => dispatch(setErrorMessage(false))}
        />,
    }

    return (
        <AuthFeature>
            <AuthFeature.Profile  {...commonProps} />
        </AuthFeature>
    )
}

export default ChangePassword;