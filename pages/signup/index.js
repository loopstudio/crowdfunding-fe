import React from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form, Title, Input, Label, Button } from "./signUp.styles";

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
    defaultValues: { name: "", email: "" },
    mode: "onChange",
  });
  const { address } = useAccount();

  const onSubmit = (data) => {
    const { name, email } = data;
    console.log("POST", { name, email, publicAddress: address });
    reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Register</Title>
        <Label htmlFor="nameInput">Name:</Label>
        <Input id="nameInput" {...register("name")} />
        <Label htmlFor="emailInput">Email:</Label>
        <Input id="emailInput" {...register("email")} />

        <Button type="submit" disabled={!isDirty || !isValid}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
