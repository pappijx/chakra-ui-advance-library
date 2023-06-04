import { Flex } from "@chakra-ui/react";
import Jxmultiselect from "jx-multiselect";
import { useEffect, useState } from "react";
import { generateResponse } from "jx-response-generator";
function MainPage() {
  const [formList, setFormList] = useState<any[]>([]);
  const itemList: any[] = [
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

  useEffect(() => {
    const person = {
      firstname: "ayush",
      lastname: "papnai",
      address: {
        state: "UP",
        district: "Ghaziabad",
      },
      contact: {
        mobile: "8956642843",
      },
    };

    const userType = {
      type: ["Customer", "Sales"],
    };

    console.log(
      generateResponse({ ...person, ...userType }, [
        "firstname",
        "lastname",
        "type",
      ])
    );
  }, []);

  return (
    <Flex width="40%">
      <Jxmultiselect itemList={itemList} size="sm" setListData={setFormList} />
    </Flex>
  );
}

export { MainPage };
