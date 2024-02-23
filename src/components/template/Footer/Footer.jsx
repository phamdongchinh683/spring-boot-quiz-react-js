import React from "react";
import "../../../styles/footer.scss";
import Navigation from "../../../mock/test.json";
import { FooterContext } from "./FooterContext";
export default function Footer() {
  return (
    <FooterContext>
      <div className="medicine-footer">
        <div className="container-input-information">
          <FooterContext.InputEmailFooter />
          <div className="container-footer-menu-products-investors">
            <FooterContext.FooterMenus router={Navigation.router} />
            <FooterContext.AsideFooter />
          </div>
        </div>
      </div>
    </FooterContext>
  );
}
