import { useConnect } from "wagmi";

import { Button, Container } from "./connectWallet.styles";

const ConnectWallet = () => {
  const { connect, connectors } = useConnect();

  const handleConnect = () => {
    connect({ connector: connectors[0] });
  };

  return (
    <Container>
      <Button onClick={handleConnect}>Connect Wallet</Button>
    </Container>
  );
};

export { ConnectWallet };
