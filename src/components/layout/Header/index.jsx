import React from "react";

import "./index.scss";
import NavigationList from "../../../mock/test.json";
import Logo from "../../../assets/Logo/logo.png";
import LogoPage from "./Components/logo";
import AuthFormComponent from "../../../pages/Auth/index";
import NavigationLinks from "../Navigation/Components/NavigationLinks";
import NavigationLinksMedia from "../Navigation/Components/DropDownNavigation";
import Admin from "../../../pages/Admin/Components/Admin";

function Header() {
  return (
    <nav>
      <LogoPage image={Logo} />
      <NavigationLinks
        router={NavigationList.router}
        status={<AuthFormComponent />}
        loginAdmin={<Admin TextStatus={'Admin'}
          LinkTo={'admin'} />} />
      <NavigationLinksMedia
        routerDropdown={NavigationList.router}
        status={<AuthFormComponent />}
        loginAdmin={<Admin TextStatus={'Admin'}
          LinkTo={'admin'} />} />
    </nav>
  );
};

export default Header;