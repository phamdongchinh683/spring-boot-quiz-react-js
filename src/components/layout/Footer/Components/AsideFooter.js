import React from "react";
import "../index.scss";

const AsideFooter = () => {
  return (
    <aside className="container-footer-products-investors">
      <div className="container-footer-products">
        <div className="footer-text-main-products">Course</div>
        <div className="footer-text-extra-products">English</div>
        <div className="footer-text-extra-products">Japanese</div>
        <div className="footer-text-extra-products">Russian</div>
      </div>
      <div class="container-footer-investors">
        <div className="footer-text-main-investors">INVESTORS</div>
        <div className="footer-text-extra-investors">Financials</div>
        <div className="footer-text-extra-investors">News and Events</div>
        <div className="footer-text-extra-investors">Reports and fillings</div>
      </div>
    </aside>
  );
};

export default AsideFooter;
