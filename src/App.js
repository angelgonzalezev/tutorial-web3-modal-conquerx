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
    <Box w={"100vw"} h={"100vh"} bgColor={"gray.700"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      {/* <w3m-button />
      <w3m-account-button />
      <w3m-connect-button />
      <w3m-network-button /> */}
      <Button onClick={() => open()}>Connect</Button>
    </Box>
  );
}

export default App;
