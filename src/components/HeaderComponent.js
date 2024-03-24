import { Flex, Text } from "@chakra-ui/react";

const HeaderComponent = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} p={4} bg={"gray.800"}>
      <Text color={"white"} fontSize={"3xl"}>
        Tutorial Web3Modal
      </Text>
      <w3m-account-button />
    </Flex>
  );
};
export default HeaderComponent;
