import React from "react";
import PropTypes from 'prop-types';

import { FlyFooter } from "../index";
import IconFooter from '../../components/layout/Footer/IconFooter';
import FooterMenus from '../../components/layout/Footer/FooterMenu';
import AsideFooter from '../../components/layout/Footer/AsideFooter';
import InputEmailFooter from '../../components/layout/Footer/InputEmailFooter';

const EmailContext = (props) => {
    const initialState = {
        email: '',
        error: false,
        ok: false,
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
            case 'ok':
                return {
                    ...state,
                    ok: action.payload,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(emailReducer, initialState);

    return (
        <FlyFooter.Provider value={
            [state, dispatch]
        }>
            {props.children}
        </FlyFooter.Provider>
    );
};


EmailContext.IconFooter = IconFooter;
EmailContext.InputEmailFooter = InputEmailFooter;
EmailContext.FooterMenus = FooterMenus;
EmailContext.AsideFooter = AsideFooter;

EmailContext.propTypes = {
    props: PropTypes.any
};

export default EmailContext;