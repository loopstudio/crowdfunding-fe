/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAccount, useSignMessage } from "wagmi";

import { ACCESS_TOKEN } from "../../constants";
import { ConnectWallet, Button } from "../../components";
import { Container, StyledButton } from "./login.styles";

const Login = () => {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const [nonce, setNonce] = useState(null);

  const login = async (address, data) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/api/v1/auth/login`,
        {
          publicAddress: address,
          signature: data,
        }
      );

      const accessToken = res.data.data.accessToken;
      sessionStorage.setItem(ACCESS_TOKEN, accessToken);

      router.push("/");
    } catch (error) {
      console.error(`Error logging in: ${error}`);
    }
  };

  const { signMessage } = useSignMessage({
    message: `Signing login nonce: ${nonce}`,
    onSuccess(data) {
      login(address, data);
    },
  });

  const fetchNonce = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/api/v1/auth/${address}/nonce`
      );
      setNonce(res.data.data);
    } catch (error) {
      console.log(`Error querying nonce: ${error}`);
    }
  };

  useEffect(() => {
    fetchNonce();
  }, [address]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

    if (accessToken) router.push("/");
  }, []);

  if (!isConnected) return <ConnectWallet />;
  return (
    <Container>
      <StyledButton onClick={() => signMessage()} disabled={!nonce}>
        Login
      </StyledButton>
    </Container>
  );
};

export default Login;
