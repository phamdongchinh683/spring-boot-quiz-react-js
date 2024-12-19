import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header/index";
import "./index.scss";
function Layout() {
  return (
    <div className="container-body">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
