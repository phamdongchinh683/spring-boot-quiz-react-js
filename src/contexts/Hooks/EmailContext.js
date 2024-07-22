import React from "react";
import PropTypes from "prop-types";

import { FooterContext } from "../index";
import IconFooter from "../../components/Layout/Footer/Components/IconFooter";
import FooterMenus from "../../components/Layout/Footer/Components/FooterMenu";
import AsideFooter from "../../components/Layout/Footer/Components/AsideFooter";
import InputEmail from "../../components/Layout/Footer/Components/EmailFooter";

const EmailContext = (props) => {
  const initialState = {
    error: false,
    successful: false,
  };

  const emailReducer = (state, action) => {
    switch (action.type) {
      case "error":
        return {
          ...state,
          error: action.payload,
        };
      case "successful":
        return {
          ...state,
          successful: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatchEmail] = React.useReducer(emailReducer, initialState);

  return (
    <FooterContext.Provider value={[state, dispatchEmail]}>
      {props.children}
    </FooterContext.Provider>
  );
};

EmailContext.IconFooter = IconFooter;
EmailContext.InputEmail = InputEmail;
EmailContext.FooterMenus = FooterMenus;
EmailContext.AsideFooter = AsideFooter;

EmailContext.propTypes = {
  props: PropTypes.func,
};

export default EmailContext;
