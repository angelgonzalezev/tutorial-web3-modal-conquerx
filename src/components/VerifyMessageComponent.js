import { Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useVerifyMessage } from "wagmi";

const VerifyMessageComponent = () => {
  const [data2Verify, setData2Verify] = useState({
    address: "",
    message: "",
    signature: "",
    enabled: true,
  });
  const { data: resultVerification } = useVerifyMessage(data2Verify);

  const handleOnChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setData2Verify({ ...data2Verify, [param]: value });
  };
  return (
    <Flex direction={"column"} w={"50%"} p={4} gap={2}>
      <Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>
        Verify Message
      </Text>
      <Input placeholder="Message..." name={"message"} onChange={handleOnChange} color={"white"} />
      <Input placeholder="Public key" name={"address"} onChange={handleOnChange} color={"white"} />
      <Input placeholder="Signature" name={"signature"} onChange={handleOnChange} color={"white"} />
      {resultVerification && (
        <Text color={"white"} fontWeight={"bold"}>
          Verified Message 👍
        </Text>
      )}
    </Flex>
  );
};
export default VerifyMessageComponent;
