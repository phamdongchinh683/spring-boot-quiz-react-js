import React from "react";
import { FlyAdmin } from "../../../contexts/MyContext";
import "../../../styles/login.scss";
import LoginForm from "../../forms/Login";
import Input from '../../forms/Input';

export const FlyOutAdmin = (props) => {

    return (
        <FlyAdmin.Provider>
            {props.children}
        </FlyAdmin.Provider>
    )
};




const AdminForm = () => {
    return (
        <>
            <LoginForm
                linkText={"New customer?"}
                userName={
                    <Input
                        type={"text"}
                        placeholder={"Username or Email"}
                        className={"input-box-placeholder"}
                        name={"username"}
                        required
                    />
                }
                passWord={
                    <Input
                        type={"password"}
                        name={"password"}
                        placeholder={"Enter Your Password"}
                        className={"input-box-placeholder"}
                        required
                    />
                }
                button={
                    <Input
                        type={"submit"}
                        value={"Login"}
                        className={"button-login"}
                    />
                }
            />
        </>
    );
};


