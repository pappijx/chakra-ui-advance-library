import { Flex } from "@chakra-ui/react";
import { Jxmultiselect, IItem } from "jx-multiselect";

function MainPage() {
  const itemList: IItem[] = [
    {
      label: "ayush",
      value: "ayush",
    },
    {
      label: "ayush",
      value: "ayush",
    },
    {
      label: "ayush",
      value: "ayush",
    },
    {
      label: "ayush",
      value: "ayush",
    },
    {
      label: "ayush",
      value: "ayush",
    },
    {
      label: "ayush",
      value: "ayush",
    },
  ];
  return (
    <Flex>
      <Jxmultiselect itemList={itemList} />
    </Flex>
  );
}

export { MainPage };
