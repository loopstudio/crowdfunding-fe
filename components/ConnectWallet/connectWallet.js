import { useConnect } from "wagmi";
import { useRouter } from "next/router";

import { ROUTES } from "../../constants";

import { Button, Container } from "./connectWallet.styles";

const ConnectWallet = () => {
  const router = useRouter();
  const { connect, connectors } = useConnect({
    onSuccess() {
      router.push(ROUTES.login);
    },
  });

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
