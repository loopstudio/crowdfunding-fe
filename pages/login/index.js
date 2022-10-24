import { useForm } from "react-hook-form";
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
} from "./login.styles";

const Login = () => {
  const validationSchema = object().shape({
    username: string().required(),
    email: string().email().required(),
    password: string().required(),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { username: "", email: "", password: "" },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const { username, email } = data;
    console.log("POST", { username, email });
    reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

        <Label htmlFor="usernameInput">Username:</Label>
        <Input id="usernameInput" {...register("username")} />
        {errors?.username && (
          <ErrorText>Error: {errors?.username.message}</ErrorText>
        )}
        <Label htmlFor="emailInput">Email:</Label>
        <Input id="emailInput" {...register("email")} error={errors?.email} />
        {errors?.email && <ErrorText>Error: {errors?.email.message}</ErrorText>}

        <Label htmlFor="passwordInput">Password:</Label>
        <Input
          id="passwordInput"
          {...register("password")}
          error={errors?.password}
        />
        {errors?.password && (
          <ErrorText>Error: {errors?.password.message}</ErrorText>
        )}

        <Button type="submit" disabled={!isDirty || !isValid}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
