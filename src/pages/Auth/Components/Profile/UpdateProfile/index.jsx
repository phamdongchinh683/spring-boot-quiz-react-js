
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import {
    setPassword,
    setAge,
    setPublicIdImage,
    setErrorMessage,
    setResponseMessage,
    setAddress,
    setCity,
    setEmail,
    setFirstName,
    setLastName,
    setNewPassword,
    setPhoneNumber,
    setGender,
    setBirthDay,
} from "../../../../../redux/Auth";
import Service from "../../../../../service";
import AuthFeature from "../../../../../contexts/Hooks/AuthContext";
import Input from "../../../../../components/forms/Input";
import InputInfo from "../InputInfo";
import DropDown from "../../../../../components/forms/DropDown";
import handler from '../../../../../handler/index';
import "../index.scss"

const UpdateProfile = () => {
    const { state } = useLocation();
    const dispatch = useDispatch();
    const { formatDate } = handler();
    const [file, setFile] = useState(null);
    const [province, setProvinces] = useState([]);
    const checkFetch = React.useRef(false);

    const { updateProfile, uploadImage, removeProfileImage, provinceList } = Service();
    const {
        firstName,
        lastName,
        age,
        email,
        phoneNumber,
        city,
        address,
        image,
        error,
        birthday,
        gender,
        response,
    } = useSelector((state) => state.auth);
    const profile = state?.data;


    const currentBirthday = formatDate(profile.birth_day)

    useEffect(() => {
        if (profile) {
            dispatch(setFirstName(profile.first_name));
            dispatch(setLastName(profile.last_name));
            dispatch(setPassword(profile.password));
            dispatch(setNewPassword(""));
            dispatch(setAge(profile.age));
            dispatch(setEmail(profile.email));
            dispatch(setPhoneNumber(profile.phone_number));
            dispatch(setCity(profile.city_name));
            dispatch(setAddress(profile.address));
            dispatch(setGender(profile.gender));
            dispatch(setBirthDay(currentBirthday));
            dispatch(setPublicIdImage(profile.image));
        }
    }, [currentBirthday, dispatch, profile]);

    const provinceApi = async () => {
        if (!checkFetch.current) {
            checkFetch.current = true;
            const provinces = await provinceList();
            setProvinces(provinces);
        }
    };

    useEffect(() => {
        provinceApi();
    }, []);

    const handleInputChange = (field, value) => {
        if (value === profile[field] || value === "") {
            switch (field) {
                case 'first_name':
                    dispatch(setFirstName(profile.first_name));
                    break;
                case 'last_name':
                    dispatch(setLastName(profile.last_name));
                    break;
                case 'age':
                    dispatch(setAge(profile.age));
                    break;
                case 'email':
                    dispatch(setEmail(profile.email));
                    break;
                case 'phone_number':
                    dispatch(setPhoneNumber(profile.phone_number));
                    break;
                case 'city':
                    dispatch(setCity(profile.city_name));
                    break;
                case 'address':
                    dispatch(setAddress(profile.address));
                    break;
                case 'gender':
                    dispatch(setGender(profile.gender));
                    break;
                case 'birthday':
                    dispatch(setBirthDay(currentBirthday));
                    break;
                default:
                    break;
            }
        } else {
            switch (field) {
                case 'first_name':
                    dispatch(setFirstName(value));
                    break;
                case 'last_name':
                    dispatch(setLastName(value));
                    break;
                case 'age':
                    dispatch(setAge(value));
                    break;
                case 'email':
                    dispatch(setEmail(value));
                    break;
                case 'phone_number':
                    dispatch(setPhoneNumber(value));
                    break;
                case 'city':
                    dispatch(setCity(value));
                    break;
                case 'address':
                    dispatch(setAddress(value));
                    break;
                case 'gender':
                    dispatch(setGender(value));
                    break;
                case 'birthday':
                    dispatch(setBirthDay(value));
                    break;
                default:
                    break;
            }
        }
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const getImage = profile.image;

    const saveImage = async () => {
        try {
            const updateImage = await uploadImage(file);
            if (updateImage) {
                dispatch(setPublicIdImage(updateImage));
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const removeImage = async () => {
        try {
            const remove = await removeProfileImage({ userId: profile.id });
            if (remove.status !== "success") {
                console.log("Failed to remove image");
            } else {
                dispatch(setErrorMessage(true));
                dispatch(setResponseMessage(remove.data));
            }
        } catch (error) {
            dispatch(setErrorMessage(true));
            dispatch(setResponseMessage(error.data));
        }
    };

    const saveChanges = async (e) => {
        e.preventDefault();
        if (file) {
            await saveImage();
        }

        try {
            const update = await updateProfile({
                age,
                address,
                email,
                firstName,
                lastName,
                phoneNumber,
                city,
                image,
                birthday,
                gender,
            });

            if (update.status !== "success") {
                dispatch(setErrorMessage(true));
                dispatch(setResponseMessage(update.message));
            } else {
                dispatch(setErrorMessage(false));
                dispatch(setResponseMessage(update.data));
            }
        } catch (error) {
            dispatch(setErrorMessage(true));
            dispatch(setResponseMessage(error.response.data.message));
        }
    };

    const commonProps = {
        detail: [
            <InputInfo
                type="text"
                info="First name"
                defaultValue={firstName}
                onChange={(e) => handleInputChange('first_name', e.target.value)}
            />,
            <InputInfo
                type="text"
                info="Last name"
                defaultValue={lastName}
                onChange={(e) => handleInputChange('last_name', e.target.value)}
            />,
            <InputInfo
                type="number"
                info="Age"
                defaultValue={age}
                min={1}
                onChange={(e) => handleInputChange('age', e.target.value)}
            />,
            <InputInfo
                type="text"
                info="Gender"
                defaultValue={gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
            />,
            <InputInfo
                type="date"
                info="Birthday"
                defaultValue={currentBirthday}
                onChange={(e) => handleInputChange('birthday', e.target.value)}
            />,
            <DropDown
                className="profile-info-input"
                info="City"
                defaultValue={city}
                options={province}
                onChange={(e) => handleInputChange('city', e.target.value)}
            />,
            <InputInfo
                type="text"
                info="Address"
                defaultValue={address}
                onChange={(e) => handleInputChange('address', e.target.value)}
            />,
            <InputInfo
                type={"email"}
                info="Email"
                defaultValue={email}
                onChange={(e) => handleInputChange('email', e.target.value)}
            />,
            <InputInfo
                type="tel"
                info="Mobile number"
                defaultValue={phoneNumber}
                onChange={(e) => handleInputChange('phone_number', e.target.value)}
            />
        ],
        profileImage: <AuthFeature.ProfileImage avatar={getImage} />,
        titleName: "Update Profile",
        detailContent: "Personal Detail",
        button: [<Input
            type={"button"}
            className={"btn btn-primary"}
            value={"Save Changes"}
            onClick={saveChanges}
        />,
        <Link to="/profile" >
            <Input
                type={"button"}
                className={"btn btn-default"}
                defaultValue={"Cancel"}
            />
        </Link >],
        handleImage: [
            <span>Upload a different photo...</span>,
            <Input type={"file"} onChange={handleFileChange}
                className={"block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"} />,
            <Input type={"button"} onClick={removeImage} value="Remove image" />
        ],
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
            <AuthFeature.Profile {...commonProps} />
        </AuthFeature >
    );
};

export default UpdateProfile;
