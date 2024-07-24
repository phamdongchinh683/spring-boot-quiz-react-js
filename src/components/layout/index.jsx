import React from "react";
import { Outlet } from "react-router-dom";

import "./index.scss";
import Header from "./Header/index";
function Layout() {
  return (
    <div className="container-body">
      <header><Header /></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
