import React from "react";
import { useDispatch, useSelector } from "react-redux";

import InputInfo from '../InputInfo/index';
import {
    setPassword, setNewPassword, setErrorMessage,
    setResponseMessage,
} from "../../../../../redux/Auth";
import Input from '../../../../../components/forms/Input';
import { Link, useLocation } from 'react-router-dom';
import AuthFeature from '../../../../../contexts/Hooks/AuthContext';
import Service from "../../../../../service";

const ChangePassword = () => {
    const { password, newPassword, response, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { updatePassword } = Service();
    const { state } = useLocation();
    const profile = state?.data;

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
            const update = await updatePassword({ password, newPassword });
            if (update.status !== "success") {
                dispatch(setErrorMessage(true));
                dispatch(setResponseMessage(update.data));
            } else {
                dispatch(setErrorMessage(true));
                dispatch(setResponseMessage(update.message));
            }
        } catch (error) {
            dispatch(setErrorMessage(true));
            dispatch(setResponseMessage(error.response.data.message));
        }
    }

    const commonProps = {
        detail: [
            <InputInfo type={"password"} placeholder={"Current password"} onChange={(e) => handleInputChange('password', e.target.value)}
            />,
            <InputInfo type={"password"} placeholder={"New password"} onChange={(e) => handleInputChange('newPassword', e.target.value)}
            />,
        ],
        profileImage: <AuthFeature.ProfileImage avatar={profile.image} />,
        button: [<Input
            type={"button"}
            className={"btn btn-primary"}
            value={"Save Changes"}
            onClick={changePassword}
        />,
        <Link to="/profile" >
            <Input
                type={"button"}
                className={"btn btn-default"}
                defaultValue={"Cancel"}
            />
        </Link >],
        titleName: "Password and security",
        detailContent: "Password",
        error: error,
        response: response,
        handleError: <Input
            type={"button"}
            className={"panel-close close"}
            onClick={() => dispatch(setErrorMessage(false))}
            value={"x"}
        />,
    }

    return (
        <AuthFeature>
            <AuthFeature.Profile  {...commonProps} />
        </AuthFeature>
    )
}

export default ChangePassword;