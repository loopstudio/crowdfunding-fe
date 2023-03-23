/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAccount, useSignMessage } from "wagmi";

import { AuthWrapper, Header } from "components";
import MetamaskLogo from "assets/metamask-logo.svg";
import { useAuth } from "context/AuthContext";
import { postLogin } from "utils/post";
import { fetchNonce } from "utils/fetch";
import { ROUTES } from "../../constants";

import { StyledButton, Wrapper } from "./login.styles";

const Login = () => {
  const router = useRouter();
  const { login, isUserAuthenticated } = useAuth();
  const { address, isConnected } = useAccount();
  const [nonce, setNonce] = useState(null);

  const { signMessage } = useSignMessage({
    message: `Signing login nonce: ${nonce}`,
    onSuccess(data) {
      postLogin(address, data, login, router);
    },
  });

  useEffect(() => {
    fetchNonce(address, setNonce);
  }, [address]);

  useEffect(() => {
    if (isUserAuthenticated) router.push(ROUTES.home);
  }, []);

  useEffect(() => {
    if (!isConnected) router.push(ROUTES.connectWallet);
  }, [isConnected]);

  return (
    <>
      <Header />
      <AuthWrapper>
        <Wrapper>
          <Image src={MetamaskLogo} alt="Metamask logo" />

          <StyledButton onClick={() => signMessage()} disabled={!nonce}>
            Login With Metamask
          </StyledButton>
        </Wrapper>
      </AuthWrapper>
    </>
  );
};

export default Login;
