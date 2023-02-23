import Image from 'next/image';
import Link from 'next/link';

import logo from 'assets/small-logo.svg';

import {
  Background,
  Container,
  Title,
  TitleContainer,
} from './authWrapper.styles';

export const AuthWrapper = ({ children }, inLogin) => {
  const location = window.location.pathname;
  return (
    <Background>
      <Container>
        <Image src={logo} height={63} width={71.82} alt={'crowfunding logo'} />
        <Title>Crowfunding</Title>
        <TitleContainer>
          <Link href={'/login'}>
            <Title login link location={location}>
              Login
            </Title>
          </Link>

          <Link href={'/signup'}>
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
