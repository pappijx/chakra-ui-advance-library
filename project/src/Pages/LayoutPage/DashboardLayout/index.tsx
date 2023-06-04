import { FaDashcube, FaHamburger } from "react-icons/fa";
import { DashboardLayout } from "../../../components";
import ComponentInformation from "../../../components/ComponentInformation";
import { IItemList } from "../../../components/SideNav";
import { Box, Text } from "@chakra-ui/react";

function DashboardLayoutPage() {
  const sideNavList: IItemList[] = [
    {
      title: "dashboard Layout",
      icon: <FaDashcube />,
      redirect: "/chakra/layout/dashboard",
    },
    {
      title: "Option 2",
      icon: "https://placehold.co/600x400",
      redirect: "/chakra/layout/ecommerce",
    },
    {
      title: "A very long item name can be converted to dot",
      icon: "https://placehold.co/600x400",
      redirect: "/chakra/layout/ecommerce",
    },
  ];
  return (
    <DashboardLayout
      hamBurgerIcon={<FaDashcube />}
      sideNav={{
        sideNavList: sideNavList,
      }}
      topNav={{
        brandLogo: (
          <Text fontSize="sm" fontWeight="semibold">
            Chakra UI
          </Text>
        ),
        hamBurgerIcon: <FaHamburger />,
        themeChanger: true,
        profileDropdown: <Box>Anything</Box>,
      }}
    >
      <ComponentInformation />
    </DashboardLayout>
  );
}

export default DashboardLayoutPage;
