import React from "react";
import InterfaceShop from "../Shop/index";
import { CheckOutContext } from "../Payment/PaymentContext";
function LandingPage() {
  return (
    <>
      <InterfaceShop />
      <CheckOutContext/>
    </>
  );
}

export default LandingPage;
