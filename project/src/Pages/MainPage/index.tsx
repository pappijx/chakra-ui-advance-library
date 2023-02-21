import { Flex } from "@chakra-ui/react";
import { Jxmultiselect, IItem } from "jx-multiselect";
import { useState } from "react";

function MainPage() {
  const [btn, setBtn] = useState(false);
  const itemList: IItem[] = [
    {
      label: "ayush",
      value: "ayush",
    },
    {
      label: "ayush 1",
      value: "ayush_1",
    },
    {
      label: "ayush 2",
      value: "ayush_2",
    },
    {
      label: "ayush 3",
      value: "ayush_3",
    },
    {
      label: "ayush 4",
      value: "ayush_4",
    },
    {
      label: "ayush 5",
      value: "ayush_5",
    },
    {
      label: "ayush 6",
      value: "ayush_6",
    },
    {
      label: "ayush 7",
      value: "ayush_7",
    },
    {
      label: "ayush 8",
      value: "ayush_8",
    },
    {
      label: "ayush 9",
      value: "ayush_9",
    },
  ];
  return (
    <Flex width="40%">
      <Jxmultiselect itemList={itemList} size="sm" />
      <button onClick={() => setBtn(true)}>dsf</button>
    </Flex>
  );
}

export { MainPage };
