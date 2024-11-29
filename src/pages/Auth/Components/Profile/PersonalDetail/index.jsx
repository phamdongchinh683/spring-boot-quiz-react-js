import { jwtDecode } from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../../../components/forms/Input";
import AuthFeature from "../../../../../contexts/Hooks/AuthContext";
import useTokens from "../../../../../jwt";
import navigateProfile from "../../../../../mock/test.json";
import Service from "../../../../../service";
import InputInfo from "../InputInfo";

const PersonalDetail = () => {
    const navigate = useNavigate();
    const { token } = useTokens();
    const { getProfile } = Service();
    const [profile, setProfile] = useState(null);
    const fetchedProfile = useRef(false);

    const slugProfile = (slug, data) => {
        navigate(`/profile/${slug}`, { state: { data } });
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", options);
    };

    useEffect(() => {
        const fetchProfile = async () => {
            if (!fetchedProfile.current) {
                fetchedProfile.current = true;
                try {
                    const info = jwtDecode(token);
                    const profileData = await getProfile(info.sub);
                    setProfile(profileData);
                } catch (error) {
                    console.error("Error fetching profile:", error);
                }
            }
        };
        fetchProfile();
    }, [getProfile, token]);

    if (!profile) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-xl font-semibold text-blue-600 animate-pulse">
                    Loading profile...
                </span>
            </div>
        );
    }

    const birthday = formatDate(profile.birthDay);
    const avatar = profile.image;
    const fullName = `${profile.firstName} ${profile.lastName}`;
    const endPointButton = navigateProfile.profileRouter.map((param, index) => (
        <Input
            type="button"
            key={index}
            className="btn-toggle bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
            value={param.nameNavigation}
            onClick={() => slugProfile(param.linkRouter, profile)}
        />
    ));

    const commonProps = {
        detail: [
            <InputInfo
                type="text"
                info="First name"
                defaultValue={profile.firstName}
                disabled={true}
            />,
            <InputInfo
                type="text"
                info="Last name"
                defaultValue={profile.lastName}
                disabled={true}
            />,
            <InputInfo
                type="number"
                info="Age"
                defaultValue={profile.age}
                disabled={true}
            />,
            <InputInfo
                type="text"
                info="Birthday"
                defaultValue={birthday}
                disabled={true}
            />,
            <InputInfo
                type="text"
                info="Gender"
                defaultValue={profile.gender}
                disabled={true}
            />,
            <InputInfo
                type="text"
                info="City"
                defaultValue={profile.cityName}
                disabled={true}
            />,
            <InputInfo
                type="text"
                info="Address"
                defaultValue={profile.address}
                disabled={true}
            />,
            <InputInfo
                type="email"
                info="Email"
                defaultValue={profile.email}
                disabled={true}
            />,
            <InputInfo
                type="tel"
                info="Mobile number"
                defaultValue={profile.phoneNumber}
                disabled={true}
            />,
        ],
        profileImage: (
            <AuthFeature.ProfileImage
                avatar={avatar}
                className="rounded-full border-4 border-blue-600 shadow-lg"
            />
        ),
        profileName: <span className="text-lg font-bold">{fullName}</span>,
        titleName: "Profile",
        detailContent: "Personal Info",
        endPoints: endPointButton,
    };

    return (
        <AuthFeature>
            <AuthFeature.Profile {...commonProps} />
        </AuthFeature>
    );
};

export default PersonalDetail;
