import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import Service from "../../../../../service";
import InputInfo from "../InputInfo";
import AuthFeature from "../../../../../contexts/Hooks/AuthContext";
import navigateProfile from "../../../../../mock/test.json";
import Input from '../../../../../components/Forms/Input';

const PersonalDetail = () => {
    const navigate = useNavigate();
    const { getProfile } = Service();
    const [profile, setProfile] = useState(null);
    const fetchedProfile = useRef(false);

    const slugProfile = (slug, data) => {
        navigate(`/profile/${slug}`, { state: { data } });
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", options);
    }

    useEffect(() => {
        const fetchProfile = async () => {
            if (!fetchedProfile.current) {
                fetchedProfile.current = true;
                const profileData = await getProfile();
                setProfile(profileData);
            }
        };
        fetchProfile();
    }, [getProfile]);

    if (!profile) {
        return;
    }

    const birthday = formatDate(profile.birth_day)
    const avatar = profile.image
    const fullName = profile.first_name + profile.last_name;
    const endPointButton = navigateProfile.profileRouter.map((param, index) => (
        <Input
            type={"button"}
            key={index.id}
            className={"btn-toggle"}
            value={param.nameNavigation}
            onClick={() => slugProfile(param.linkRouter, profile)}
        />
    ));

    const commonProps = {
        detail: [
            <InputInfo type={"text"} info="First name" defaultValue={profile.first_name} disabled={true} />,
            <InputInfo type={"text"} info="Last name" defaultValue={profile.last_name} disabled={true} />,
            <InputInfo type={"number"} info="Age" defaultValue={profile.age} disabled={true} />,
            <InputInfo type={"text"} info="Birthday" defaultValue={birthday} disabled={true} />,
            <InputInfo type={"text"} info="Gender" defaultValue={profile.gender} disabled={true} />,
            <InputInfo type={"text"} info="City" defaultValue={profile.city_name} disabled={true} />,
            <InputInfo type={"text"} info="Address" defaultValue={profile.address} disabled={true} />,
            <InputInfo type={"email"} info="Email" defaultValue={profile.email} disabled={true} />,
            <InputInfo type={"tel"} info="Mobile number" defaultValue={profile.phone_number} disabled={true} />,
        ],
        profileImage: <AuthFeature.ProfileImage avatar={avatar} />,
        profileName: <span>{fullName}</span>,
        titleName: "Profile",
        detailContent: "Personal info",
        endPoints: endPointButton,
    };

    return (
        <AuthFeature>
            <AuthFeature.Profile {...commonProps} />
        </AuthFeature>
    )
}

export default PersonalDetail;