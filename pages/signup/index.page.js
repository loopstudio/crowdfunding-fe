/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "context/AuthContext";
import { Input, Button, AuthWrapper, Header } from "components";
import { postLogin, postRegister } from "utils/post";
import { USERNAME, EMAIL, ROUTES } from "../../constants";

import { Form, InputWrapper } from "./signup.styles";

const validationSchema = object().shape({
  username: string().required("This field is required*"),
  email: string()
    .email("Enter a valid email*")
    .required("This field is required*"),
});

const SignUp = () => {
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

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { username: "", email: "" },
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    postRegister(address, formData, setNonce, reset);
  };

  useEffect(() => {
    if (nonce) {
      signMessage();
    }
  }, [nonce]);

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
        <Form
          onSubmit={handleSubmit(onSubmit)}
          numOfErrors={Object.keys(errors).length}
        >
          <InputWrapper>
            <Input
              placeholder="Email"
              {...register(EMAIL)}
              name={EMAIL}
              error={errors.email}
              isDirty={dirtyFields[EMAIL]}
            />
            <Input
              placeholder="Username"
              {...register(USERNAME)}
              name={USERNAME}
              error={errors.username}
              isDirty={dirtyFields[USERNAME]}
            />
          </InputWrapper>
          <Button type="submit" disabled={!isDirty || !isValid}>
            Sign Up
          </Button>
        </Form>
      </AuthWrapper>
    </>
  );
};

export default SignUp;
