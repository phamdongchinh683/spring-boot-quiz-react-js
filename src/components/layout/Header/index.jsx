import React from "react";

import "./index.scss";
import NavigationList from "../../../mock/test.json";
import Logo from "../Header/Components/Logo";
import AuthFormComponent from "../../../pages/Auth/index";
import NavigationLinks from "../Navigation/Components/NavigationLinks";
import NavigationLinksMedia from "../Navigation/Components/DropDownNavigation";

function Header() {
  return (
    <nav>
      <Logo image={""} />
      <NavigationLinks
        router={NavigationList.router}
        status={<AuthFormComponent />} />
      <NavigationLinksMedia
        routerDropdown={NavigationList.router}
        status={<AuthFormComponent />} />
    </nav>
  );
};

export default Header;