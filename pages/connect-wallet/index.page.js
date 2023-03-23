/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

import { Header, ConnectWallet } from "components";
import { useAuth } from "context/AuthContext";
import backgroundImage from "assets/bg-connect-wallet.png";
import { ROUTES } from "../../constants";

import {
  Container,
  Title,
  Description,
  Background,
} from "./connect-wallet.styles";

const ConnectWalletPage = () => {
  const { isConnected } = useAccount();
  const { isUserAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isUserAuthenticated && isConnected) router.push(ROUTES.home);
    if (!isUserAuthenticated && isConnected) router.push(ROUTES.login);
  }, []);

  return (
    <>
      <Background>
        <Image
          src={backgroundImage}
          alt="connect-wallet bg"
          fill
          style={{
            objectFit: "cover",
          }}
          quality={100}
        />
      </Background>

      <Header />

      <Container>
        <Title>Connecting Web3</Title>

        <Description>
          WalletConnect brings the ecosystem together by enabling wallets and
          apps to securely connect and interact.
        </Description>

        <ConnectWallet />
      </Container>
    </>
  );
};

export default ConnectWalletPage;
