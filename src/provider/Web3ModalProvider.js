import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultWagmiConfig } from "@web3modal/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { mainnet, polygon, polygonMumbai } from "viem/chains";
import { WagmiProvider } from "wagmi";

const projectId = "";

const metadata = {
  name: "Tutorial Web3Modal",
  description: "Tutorial Web3Modal example",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, polygon, polygonMumbai];

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
});

const queryClient = new QueryClient();

const Web3ModalProvider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
export default Web3ModalProvider;
