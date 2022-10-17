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
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const { address } = useAccount();

  const onSubmit = (data) => {
    const { name, email } = data;
    console.log("POST", { name, email, publicAddress: address });
  };

  const areFieldsEmpty =
    Object.values(watch()).length === 0 ||
    Object.values(watch()).some((fieldValue) => fieldValue === "");

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Register</Title>
        <Label htmlFor="nameInput">Name:</Label>
        <Input id="nameInput" {...register("name")} />
        <Label htmlFor="emailInput">Email:</Label>
        <Input id="emailInput" {...register("email")} />

        <Button type="submit" disabled={areFieldsEmpty || hasErrors}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
