import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSignMessage } from "wagmi";

const SignMessageComponent = () => {
  const [message, setMessage] = useState();
  const { signMessage, data: signature } = useSignMessage();

  const handleOnChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSignMessage = () => {
    signMessage({ message });
  };

  return (
    <Flex w={"50%"} gap={2} direction={"column"} p={4}>
      <Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>
        Sign a message
      </Text>
      <Input placeholder="Message" onChange={handleOnChange} color={"white"} />
      <Button onClick={handleSignMessage}>Sign message</Button>
      {signature && <Text color={"white"}>Signature: {signature}</Text>}
    </Flex>
  );
};
export default SignMessageComponent;
