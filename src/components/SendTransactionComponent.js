import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { parseEther } from "viem";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";

const SendTransactionComponent = () => {
  const [transactionValue, setTransactionValue] = useState({ to: "", value: 0 });
  const { sendTransaction, data: hash } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const handleOnChange = (e) => {
    const param = e.target.name;
    const value = param === "to" ? e.target.value : parseEther(e.target.value);

    setTransactionValue({ ...transactionValue, [param]: value });
  };

  const handleSendTransaction = async () => {
    sendTransaction(transactionValue);
  };

  return (
    <Flex w={"100%"} p={4} direction={"column"} gap={2}>
      <Text fontWeight={"bold"} fontSize={"2xl"} color={"white"}>
        Send Transaction
      </Text>
      {(isConfirming || isConfirmed) && (
        <>
          <Text color={"white"} fontWeight={"bold"}>
            TxHas: {hash}
          </Text>
          <Text color={"white"} fontWeight={"bold"}>
            Status: {isConfirming ? "Pending..." : isConfirmed ? "Confirmed 👍" : null}
          </Text>
        </>
      )}
      <Input placeholder="Wallet address" name="to" onChange={handleOnChange} color={"white"} />
      <Input placeholder="Value" name="value" onChange={handleOnChange} color={"white"} />
      <Button onClick={handleSendTransaction}>Send Transaction</Button>
    </Flex>
  );
};
export default SendTransactionComponent;
