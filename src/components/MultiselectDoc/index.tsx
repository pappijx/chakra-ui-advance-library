import { Flex } from "@chakra-ui/react";
import { Multiselect } from "multiselect-dropdown";
import { LIST_OF_MULTISELECT } from "../../Constant/DumyData";

const MultiselectDoc = () => {
  return (
    <Flex>
      <Multiselect listData={LIST_OF_MULTISELECT} />
    </Flex>
  );
};

export { MultiselectDoc };
