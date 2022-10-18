import React from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Container,
  ErrorText,
  Form,
  Input,
  Label,
  Title,
} from "./signUp.styles";

const SignUp = () => {
  const validationSchema = object().shape({
    name: string().required(),
    email: string().email().required(),
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
  const { address } = useAccount();

  const onSubmit = (data) => {
    const { username, email } = data;
    console.log("POST", { username, email, publicAddress: address });
    reset();
  };

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
