import { Flex } from "@chakra-ui/react";
import { ISideNav, SideNav } from "../SideNav";
import { ITopNav, TopNav } from "../TopNav";
import React, { useState, JSXElementConstructor, ReactElement } from "react";

interface IDashboardLayout {
  children: React.ReactNode;
  sideNav?: ISideNav;
  topNav?: ITopNav;
  hamBurgerIcon?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  brandLogo?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
}

const DashboardLayout = ({ children, sideNav, topNav }: IDashboardLayout) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <Flex direction="column" width="100%" height="100vh">
      {topNav && (
        <TopNav
          brandLogo={topNav.brandLogo}
          setNavbar={setNavbar}
          themeChanger={topNav?.themeChanger}
          profileDropdown={topNav?.profileDropdown}
          hamBurgerIcon={topNav.hamBurgerIcon}
        />
      )}
      <Flex position="relative" height="calc(100vh - 56px)" width="full">
        {sideNav && (
          <SideNav
            setNavbar={setNavbar}
            sideNavList={sideNav.sideNavList}
            navbar={navbar}
          />
        )}
        <Flex
          onClick={() => setNavbar(false)}
          padding="1rem"
          height="full"
          width="full"
          overflow="auto"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export { DashboardLayout };
