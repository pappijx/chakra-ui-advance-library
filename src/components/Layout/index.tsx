import { Flex } from "@chakra-ui/react";
import { SideNav } from "../SideNav";
import { TopNav } from "../TopNav";
import { useState } from "react";

const Layout = ({ children }: any) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <Flex direction="column" width="100%" height="100vh">
      <TopNav setNavbar={setNavbar} themeChanger={true} logo="" />
      <Flex position="relative" marginTop="56px" height="calc(100vh - 56px)">
        <SideNav
          style={{
            transition: "0.5s",
            width: navbar ? "240px" : "100px",
            backgroundColor: "blackAlpha.400",
            height: "100%",
            padding: "1rem",
          }}
        />
        <Flex padding="1rem" height="100%" width="100%" overflow="auto">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Layout };
