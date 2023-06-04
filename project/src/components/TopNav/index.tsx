import {
  Button,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import React, { JSXElementConstructor, ReactElement } from "react";
import DrawerTopNav from "./DrawerTopNav";

export interface IProductItem {
  name: string;
  icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  redirect: string;
  childrens?: IProductItem[];
}

export interface ITopNav {
  themeChanger: boolean;
  setNavbar?: (data: any) => void;
  hamBurgerIcon?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  brandLogo?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  profileDropdown?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  productList?: IProductItem[];
}

function TopNav({
  setNavbar,
  hamBurgerIcon,
  brandLogo = <Text>LOGO</Text>,
  themeChanger,
  profileDropdown,
  productList,
}: ITopNav) {
  const text = useColorModeValue("dark", "light");
  const SwitchBGColor = useColorModeValue("white", "gray.900");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      height="56px"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      zIndex="1"
      paddingX="1rem"
      shadow="md"
      bgColor={SwitchBGColor}
      position="relative"
      onMouseLeave={onClose}
    >
      <Flex alignItems="center" gap="1rem">
        {setNavbar && hamBurgerIcon && (
          <IconButton
            icon={hamBurgerIcon}
            onClick={() => setNavbar((prev: boolean) => !prev)}
            aria-label={""}
            variant="unstyled"
            minWidth="24px"
            height="24px"
            display="grid"
            placeItems="center"
          />
        )}
        {/* {hamburgerIcon} */}
        {brandLogo}
      </Flex>
      <Flex alignItems="center">
        {productList && (
          <Button size="sm" onMouseOver={onOpen}>
            Product
          </Button>
        )}
        {themeChanger && <ColorModeSwitcher justifySelf="flex-end" />}
        {profileDropdown && profileDropdown}
      </Flex>
      {productList && isOpen && (
        <DrawerTopNav SwitchBGColor={SwitchBGColor} productList={productList} />
      )}
    </Flex>
  );
}

export { TopNav };
