import React from "react";

import "./header.scss";
import NavigationList from "../../../mock/test.json";
import Logo from "../../../assets/logo/logo.png";
import LogoPage from "./logo";
import AuthFormComponent from "../../../pages/Auth/index";
import { NavigationLinks, NavigationLinksMedia } from "../Navigation/NavigationLinks";
import Admin from "../../../pages/admin/admin";

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