/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { USERNAME, EMAIL, ACCESS_TOKEN } from "../../constants";
import { Input, Button, ConnectWallet, AuthWrapper, Header } from "components";

import { Form } from "./signup.styles";

const validationSchema = object().shape({
  username: string().required(),
  email: string().email().required(),
});

const SignUp = () => {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const [nonce, setNonce] = useState(null);

  const { signMessage } = useSignMessage({
    message: `Signing login nonce: ${nonce}`,
    onSuccess(data) {
      login(address, data);
    },
  });

  const login = async (address, data) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/auth/login`,
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

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { username: "", email: "" },
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    const { username, email } = formData;

    const {
      data: { data },
    } = await axios.post(`${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/users`, {
      username,
      email,
      publicAddress: address,
    });

    setNonce(data.nonce);

    reset();
  };

  useEffect(() => {
    if (nonce) {
      signMessage();
    }
  }, [nonce]);

  useEffect(() => {
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN);

    if (accessToken) router.push("/");
  }, []);

  if (!isConnected) return <ConnectWallet />;

  return (
    <>
      <Header />
      <AuthWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Username"
            {...register(USERNAME)}
            name={USERNAME}
            error={errors.username}
          />
          <Input
            placeholder="Email"
            {...register(EMAIL)}
            name={EMAIL}
            error={errors.email}
          />
          <Button type="submit" disabled={!isDirty || !isValid}>
            Sign up With Metamask
          </Button>
        </Form>
      </AuthWrapper>
    </>
  );
};

export default SignUp;
