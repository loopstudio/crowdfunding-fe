import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import { AuthProvider } from "context/AuthContext";

import "../styles/globals.css";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli, chain.localhost, chain.hardhat],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <WagmiConfig client={client}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </AuthProvider>
    </WagmiConfig>
  );
}

export default MyApp;
