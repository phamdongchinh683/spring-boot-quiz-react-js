import React from "react";
import "./footer.scss";
import Navigation from "../../../mock/test.json";
import EmailContext from "../../../contexts/hooks/EmailContext";
export default function Footer() {
  return (
    <EmailContext>
      <div className="medicine-footer">
        <div className="container-input-information">
          <EmailContext.InputEmailFooter />
          <div className="container-footer-menu-products-investors">
            <EmailContext.FooterMenus router={Navigation.router} />
            <EmailContext.AsideFooter />
          </div>
        </div>
      </div>
    </EmailContext>
  );
}
