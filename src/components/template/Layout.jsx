import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function Layout() {
  return (
    <>
      <header><Header /></header>
      <main>
        <div className="page-empty"></div>
        <Outlet />
      </main>
      <footer><Footer /></footer>
    </>
  );
}

export default Layout;
