import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "assets/small-logo.svg";

import {
  Background,
  Container,
  Title,
  TitleContainer,
} from "./authWrapper.styles";

export const AuthWrapper = ({ children }) => {
  const router = useRouter();
  const location = router.pathname;

  return (
    <Background>
      <Container>
        <Image src={logo} height={63} width={71.82} alt="crowdfunding logo" />
        <Title>Crowdfunding</Title>
        <TitleContainer>
          <Link href={"/login"}>
            <Title login link location={location}>
              Login
            </Title>
          </Link>

          <Link href={"/signup"}>
            <Title link signUp location={location}>
              Sign Up
            </Title>
          </Link>
        </TitleContainer>

        {children}
      </Container>
    </Background>
  );
};
