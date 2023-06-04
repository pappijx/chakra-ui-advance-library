import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { IProductItem } from "..";
import { ChevronLeftIcon } from "@chakra-ui/icons";

const DrawerTopNav = ({ productList }: any) => {
  const SwitchBGColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      width="full"
      bgColor={SwitchBGColor}
      position="absolute"
      top="56px"
      left="0"
      zIndex={0}
      padding="1rem"
      wrap="wrap"
      gap="2rem"
    >
      {React.Children.toArray(
        productList.map((item: IProductItem) => {
          return (
            <Flex direction="column" width="19%" gap="0.2rem" cursor="pointer">
              <Flex alignItems="center" gap="0.3rem">
                {item.icon}
                <Text fontWeight="medium">{item.name}</Text>
              </Flex>
              {item.childrens &&
                React.Children.toArray(
                  item.childrens.map((child: IProductItem) => {
                    return (
                      <Flex
                        _hover={{ textDecoration: "underline" }}
                        padding="0.1rem 0.5rem"
                      >
                        <Text marginLeft="0.3rem" fontSize="sm">
                          {child.name}
                        </Text>
                      </Flex>
                    );
                  })
                )}
            </Flex>
          );
        })
      )}
    </Flex>
  );
};

export default DrawerTopNav;
