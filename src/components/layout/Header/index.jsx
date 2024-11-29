import React from "react";
import NavigationLinks from "../../../pages/Auth/Components/Login/Components/LoginStatus/index";
import Logo from "../Header/Components/Logo";

function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md">
      <div className="flex items-center gap-4">
        <Logo image={""} />
        <h1 className="text-2xl font-bold">Spring boot - React js</h1>
      </div>
      <nav>
        <NavigationLinks />
      </nav>
    </header>
  );
}

export default Header;
