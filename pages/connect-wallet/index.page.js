/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";

import { Header, ConnectWallet } from "components";
import { ACCESS_TOKEN } from "../../constants";
import backgroundImage from "assets/bg-connect-wallet.png";

import {
  Container,
  Title,
  Description,
  Background,
} from "./connect-wallet.styles";

const ConnectWalletPage = () => {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

    if (accessToken && isConnected) router.push("/");
    if (!accessToken && isConnected) router.push("/login");
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
