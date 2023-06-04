import { Flex } from "@chakra-ui/react";
import { ISideNav, SideNav } from "../SideNav";
import { ITopNav, TopNav } from "../TopNav";
import React, { useState } from "react";

interface IEcommerceLayout {
  children: React.ReactNode;
  sideNav?: ISideNav;
  topNav?: ITopNav;
}

const EcommerceLayout = ({ children, sideNav, topNav }: IEcommerceLayout) => {
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
          productList={topNav.productList}
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

export { EcommerceLayout };
