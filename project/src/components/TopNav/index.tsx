import { Button, Flex, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

interface ITopNav {
  themeChanger: boolean;
  logo: string;
  setNavbar: (data: any) => void;
}

function TopNav({ setNavbar }: ITopNav) {
  return (
    <nav>
      <Flex
        height="56px"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        bgColor="blackAlpha.400"
        zIndex="5000"
        paddingX="1rem"
        shadow="md"
      >
        <Flex alignItems="center" gap="1rem">
          <Button onClick={() => setNavbar((prev: boolean) => !prev)}>
            menu
          </Button>
          <Text>Components</Text>
        </Flex>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </nav>
  );
}

export { TopNav };
