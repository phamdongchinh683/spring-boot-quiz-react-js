import React from "react";
import { FlyFooter } from "../../../contexts";
import Input from '../../forms/Input';
import Service from "../../../service/index";

const InputEmailFooter = () => {
    const [state, dispatch] = React.useContext(FlyFooter);
    const { sendEmail } = Service();

    const InputEmail = (e) => {
        dispatch({ type: 'input', payload: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!state.email || !state.email.includes('@')) {
                dispatch({ type: 'error', payload: true });
                dispatch({ type: 'input', payload: '' });

            } else {
                await sendEmail({ email: state.email });
                dispatch({ type: 'error', payload: false });
                dispatch({ type: 'ok', payload: true });
                dispatch({ type: 'input', payload: '' });
            };

        } catch (error) {
            console.log(error);
        }
    }


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
                        value={state.email}
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
                {state.ok && <span className="footer-complete-color">Thank you! We will be in touch soon.</span>}
            </div>
        </div>
    );
};

export default InputEmailFooter;
