import { FaAdobe, FaDashcube, FaHamburger } from "react-icons/fa";
import ComponentInformation from "../../../components/ComponentInformation";
import { IItemList } from "../../../components/SideNav";
import { Box, Text } from "@chakra-ui/react";
import { EcommerceLayout } from "../../../components/EcommerceLayout";
import { IProductItem } from "../../../components/TopNav";

function EcommerceLayoutPage() {
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

  const productList: IProductItem[] = [
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
    {
      name: "earphone",
      redirect: "",
      icon: <FaAdobe />,
      childrens: [
        {
          name: "TWS",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wired",
          redirect: "",
          icon: <FaAdobe />,
        },
        {
          name: "Wireless",
          redirect: "",
          icon: <FaAdobe />,
        },
      ],
    },
  ];
  return (
    <EcommerceLayout
      // hamBurgerIcon={<FaDashcube />}
      topNav={{
        brandLogo: (
          <Text fontSize="sm" fontWeight="semibold">
            Chakra UI
          </Text>
        ),
        productList: productList,
        themeChanger: true,
        profileDropdown: <Box>Anything</Box>,
      }}
    >
      <ComponentInformation />
    </EcommerceLayout>
  );
}

export default EcommerceLayoutPage;
