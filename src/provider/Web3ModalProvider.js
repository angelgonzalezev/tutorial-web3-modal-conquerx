import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultWagmiConfig } from "@web3modal/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { mainnet, polygon, polygonMumbai } from "viem/chains";
import { WagmiProvider } from "wagmi";

const projectId = process.env.REACT_APP_PROJECT_ID;

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
  enableEmail: true,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  defaultChain: mainnet,
  featuredWalletIds: [
    "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
    "c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",
    "74f8092562bd79675e276d8b2062a83601a4106d30202f2d509195e30e19673d",
  ],
  excludeWalletIds: [
    "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    "ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",
  ],
  termsConditionsUrl: "https://www.conquerx.com/terminos-y-condiciones",
  privacyPolicyUrl: "https://www.conquerx.com/politica-de-privacidad",
  enableAnalytics: true,
  allWallets: "HIDE",
  enableOnramp: true,
  themeVariables: {
    "--w3m-color-mix": "#7f56d9",
    "--w3m-color-mix-strength": 40,
    "--w3m-accent": "#ff8a56",
  },
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
