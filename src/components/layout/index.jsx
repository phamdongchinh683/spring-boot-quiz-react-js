import React from "react";
import { Outlet } from "react-router-dom";

import "./index.scss";
import Header from "./Header/index";
function Layout() {
  return (
    <div className="container-body">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
