import { Box, Flex, Text } from "@chakra-ui/react";
import { useAccount, useBalance } from "wagmi";
import HeaderComponent from "./components/HeaderComponent";
import { useWeb3ModalState } from "@web3modal/wagmi/react";
import SendTransactionComponent from "./components/SendTransactionComponent";
import SignMessageComponent from "./components/SignMessageComponent";
import VerifyMessageComponent from "./components/VerifyMessageComponent";

function App() {
  const { isConnected, address } = useAccount();
  const { data: balance } = useBalance({ address: address });
  const { selectedNetworkId } = useWeb3ModalState();

  return (
    <Box w={"100vw"} h={"100vh"} bgColor={"gray.700"}>
      {!isConnected ? (
        <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
          <w3m-button />
        </Flex>
      ) : (
        <>
          <HeaderComponent />
          <Flex gap={4} p={4}>
            <Text color={"white"} fontSize={"xl"}>
              Address: {address}
            </Text>
            {balance && (
              <>
                <Text color={"white"} fontSize={"xl"}>
                  Balance: {balance.formatted}
                </Text>
                <Text color={"white"} fontSize={"xl"}>
                  Symbol: {balance.symbol}
                </Text>
              </>
            )}
            <Text color={"white"} fontSize={"xl"}>
              Chain Id: {selectedNetworkId}
            </Text>
          </Flex>
          <SendTransactionComponent />
          <Flex gap={4}>
            <SignMessageComponent />
            <VerifyMessageComponent />
          </Flex>
        </>
      )}
    </Box>
  );
}

export default App;
