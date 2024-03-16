import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import { FlyFooter } from "../../../../contexts/index";
import Input from '../../../Forms/Input';
import Service from "../../../../service/index";
import { setInputEmail } from "../../../../redux/Email/EmailSlice";
const InputEmailFooter = () => {
    const [state, dispatchEmail] = React.useContext(FlyFooter);
    const { inputEmail } = useSelector((state) => state.email)
    const { sendEmail } = Service();
    const dispatch = useDispatch();

    const InputEmail = (e) => {
        dispatch(setInputEmail(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!inputEmail || !inputEmail.includes('@')) {
                dispatchEmail({ type: 'error', payload: true });
                dispatchEmail({ type: 'successful', payload: false });
                dispatch(setInputEmail(""))
            } else {
                await sendEmail({ email: inputEmail });
                dispatchEmail({ type: 'error', payload: false });
                dispatchEmail({ type: 'successful', payload: true });
                dispatch(setInputEmail(""));
            };
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="container-input">
            <div className="footer-text-main">Stay up to date with Us</div>
            <div className="footer-text-extra">Get in touch</div>
            <div className="container-footer-input">
                <form className="footer-input-out">
                    <Input
                        type={"email"}
                        name={"email"}
                        className={"footer-input"}
                        placeholder={"Enter your email address"}
                        value={inputEmail}
                        onChange={InputEmail}
                    />
                    <Input
                        className={'footer-button'}
                        value={'Join now'}
                        type={'button'}
                        onClick={handleSubmit}
                    />
                </form>
                {state.error && <span className="footer-error-color">Invalid email format. Please try again.</span>}
                {state.successful && <span className="footer-complete-color">Thank you! We will be in touch soon.</span>}
            </div>
        </div>
    );
};

export default InputEmailFooter;
