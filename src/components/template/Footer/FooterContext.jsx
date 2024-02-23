import Input from "../../forms/Input";
import { Link } from "react-router-dom";
import React from "react";
import "../../../styles/footer.scss";
import { FlyFooterContext } from "../../contexts/MyContext";

export function FooterContext(props) {
    const initialState = {
        email: '',
        error: false,
        complete: false,
    };

    const emailReducer = (state, action) => {
        switch (action.type) {
            case 'input':
                return {
                    ...state,
                    email: action.payload,
                };
            case 'error':
                return {
                    ...state,
                    error: action.payload,
                };
            case 'complete':
                return {
                    ...state,
                    complete: action.payload,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(emailReducer, initialState);

    return (
        <FlyFooterContext.Provider value={
            [state, dispatch]
        }>
            {props.children}
        </FlyFooterContext.Provider>
    );
};

const InputEmailFooter = () => {
    const [state, dispatch] = React.useContext(FlyFooterContext);

    const InputEmail = (e) => {
        dispatch(
            { type: 'input', payload: e.target.value }
        );
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            if (!state.email || !state.email.includes('@')) {
                throw new Error('Invalid email address');
            }
            dispatch(
                { type: 'check', payload: e.target.value }
            );
            const res = await fetch('http://localhost:8080/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        { email: state.email }
                    ),
                });
            if (res.ok) {
                dispatch(
                    { type: 'input', payload: '' }
                );
                dispatch(
                    { type: 'error', payload: false }
                );
                dispatch(
                    { type: 'complete', payload: true }
                );
            } else {
                throw new Error('Failed to send email');
            };
        } catch (error) {
            dispatch(
                { type: 'complete', payload: false }
            );
            dispatch(
                { type: 'error', payload: true }
            );
        };
    };

    return (
        <div className="container-input">
            <div className="footer-text-main">Stay up to date with Us</div>
            <div className="footer-text-extra">Get in touch</div>
            <div className="container-footer-input">
                <form className="footer-input-out">
                    <Input
                        type={"email"}
                        className={"footer-input"}
                        placeholder={"Enter your email address"}
                        value={state.email}
                        onChange={InputEmail}
                    />
                    <Input className={'footer-button'}
                        value={'Join now'}
                        type={'button'}
                        onClick={sendEmail}>
                    </Input>
                </form>
                {state.error &&
                    <span className="footer-error-color">Please enter the correct email format</span>
                }
                {state.complete &&
                    <span className="footer-complete-color">We will reply to your email soon</span>
                }
            </div>
        </div >
    );
};


const FooterMenus = ({ router }) => {
    return (
        <>
            <div className="container-footer-menu">
                {router.map((routerFooter) => (
                    <Link to={routerFooter.linkRouter} className="footer-menu" key={routerFooter.id}>
                        {routerFooter["name-navigation"]}
                    </Link>
                ))}
            </div>
        </>
    );
};

const AsideFooter = () => {
    return (
        <aside className="container-footer-products-investors">
            <div className="container-footer-products">
                <div className="footer-text-main-products">PRODUCTS</div>
                <div className="footer-text-extra-products">Generics</div>
                <div className="footer-text-extra-products">Biosimilars</div>
                <div className="footer-text-extra-products">
                    Over The Counter
                </div>
            </div>
            <div class="container-footer-investors">
                <div className="footer-text-main-investors">INVESTORS</div>
                <div className="footer-text-extra-investors">Financials</div>
                <div className="footer-text-extra-investors">
                    News and Events
                </div>
                <div className="footer-text-extra-investors">
                    Reports and fillings
                </div>
            </div>
        </aside>
    );
};

const IconFooter = ({ icons }) => {
    return (
        <div className="container-icon-footer">
            {icons.map((iconFooter) => (
                <Link to={iconFooter.iconPath} key={iconFooter.id}>
                    <img src={iconFooter.iconSrc} alt={iconFooter.iconAlt} />
                </Link>
            ))}
        </div>
    );
};


FooterContext.IconFooter = IconFooter;
FooterContext.InputEmailFooter = InputEmailFooter;
FooterContext.FooterMenus = FooterMenus;
FooterContext.AsideFooter = AsideFooter;