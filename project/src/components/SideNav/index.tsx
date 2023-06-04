import {
  Box,
  BoxProps,
  Flex,
  FlexboxProps,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
export interface IItemList {
  title: string;
  icon: string | React.ReactNode;
  redirect: string;
}
export interface ISideNav extends BoxProps {
  sideNavList: IItemList[];
  navbar?: boolean;
  setNavbar?: (isOpen: boolean) => void;
}

function SideNav({ setNavbar, navbar, sideNavList, ...props }: ISideNav) {
  const [isLargerThan786] = useMediaQuery("(min-width: 786px)");
  const text = useColorModeValue("dark", "light");
  const SwitchBGColor = useColorModeValue("white", "gray.900");
  return (
    <>
      {!isLargerThan786 && navbar && setNavbar && (
        <Box
          position="fixed"
          width="100vw"
          height="100vh"
          bgColor="blackAlpha.800"
          left="0"
          top="0"
          zIndex={1}
          onClick={() => setNavbar(false)}
        ></Box>
      )}
      <Flex
        style={{
          transition: "0.2s",
          minWidth: navbar ? "240px" : "64px",
          width: navbar ? "240px" : "0px",
          maxWidth: "240px",
          height: "100%",
          ...(isLargerThan786
            ? {}
            : {
                position: "fixed",
                left: navbar ? "0" : "-100px",
                zIndex: 2,
                top: "0",
              }),
        }}
        transform="auto-gpu"
        direction="column"
        backgroundColor={SwitchBGColor}
        paddingY="1rem"
        {...props}
      >
        {React.Children.toArray(
          sideNavList.map((item: IItemList, index: number) => {
            return (
              <NavLink to={item.redirect}>
                {({ isActive, isPending }) => {
                  return (
                    <Tooltip label={item.title}>
                      <Flex
                        height="44px"
                        // width={navbar ? "150px" : "fit-content"}
                        alignItems="center"
                        gap="0.5rem"
                        cursor="pointer"
                        _hover={{ bgColor: "blackAlpha.200" }}
                        padding="0.5rem 1rem"
                        position="relative"
                      >
                        {isActive && (
                          <Box
                            position="absolute"
                            height="90%"
                            width="5px"
                            bgColor="blue"
                            left="2px"
                            borderRadius="full"
                          ></Box>
                        )}
                        <Flex
                          justifyContent="center"
                          minWidth="32px"
                          maxWidth="32px"
                        >
                          {typeof item.icon === "string" ? (
                            <Image src={item.icon} />
                          ) : (
                            item.icon
                          )}
                        </Flex>
                        <Text
                          transform="auto-gpu"
                          transition="0.2s"
                          fontSize={navbar ? "14px" : "0px"}
                          width="160px"
                          noOfLines={1}
                          fontWeight="medium"
                          color="gray.600"
                        >
                          {item.title}
                        </Text>
                      </Flex>
                    </Tooltip>
                  );
                }}
              </NavLink>
            );
          })
        )}
      </Flex>
    </>
  );
}

export { SideNav };
