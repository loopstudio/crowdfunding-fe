import React from "react";
import { useForm } from "react-hook-form";
import { useAccount, useSignMessage } from "wagmi";
import axios from "axios";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ConnectWallet from "../../components/ConnectWallet";
import {
  Button,
  Container,
  ErrorText,
  Form,
  Input,
  Label,
  Title,
} from "./signUp.styles";

const validationSchema = object().shape({
  username: string().required(),
  email: string().email().required(),
});

const SignUp = () => {
  const { address, isConnected } = useAccount();
  const { signMessage } = useSignMessage({
    onSuccess(data) {
      console.log(data, address);
    },
  });
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

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_CROWDFUNDING_API}/api/v1/users`,
      {
        username,
        email,
        publicAddress: address,
      }
    );

    signMessage({ message: data?.data?.nonce });

    reset();
  };

  if (!isConnected) return <ConnectWallet />;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Register</Title>

        <Label htmlFor="usernameInput">Username:</Label>
        <Input id="usernameInput" {...register("username")} />
        {errors?.username && (
          <ErrorText>Error: {errors?.username.message}</ErrorText>
        )}

        <Label htmlFor="emailInput">Email:</Label>
        <Input id="emailInput" {...register("email")} error={errors?.email} />
        {errors?.email && <ErrorText>Error: {errors?.email.message}</ErrorText>}

        <Button type="submit" disabled={!isDirty || !isValid}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
