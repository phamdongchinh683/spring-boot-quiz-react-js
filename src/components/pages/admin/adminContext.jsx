import React from "react";
import { FlyAuthAdmin } from "../../contexts/MyContext";
import "../../../styles/login.scss";

export function FlyAdmin(props) {

    return (
        <FlyAdmin.Provider>
            {props.children}
        </FlyAdmin.Provider>
    )
}




const AdminForm = () => {
    return (
        <>
        </>
    )
}

