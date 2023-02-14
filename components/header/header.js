import Link from "next/link";
import Image from "next/image";

import smallLogo from "../../assets/small-logo.svg";

import { HeaderContainer, HeaderRow, HeaderText } from "./header.styles.js";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderRow>
        <Image
          priority
          src={smallLogo}
          height={34}
          width={39}
          alt="SmallLogo"
        />
        <HeaderText>Crowdfunding</HeaderText>
      </HeaderRow>

      <HeaderRow>
        <Link href="/discover">
          <HeaderText>Discover</HeaderText>
        </Link>
        <HeaderText>|</HeaderText>
        <Link href="/login">
          <HeaderText>Login</HeaderText>
        </Link>
        <HeaderText>|</HeaderText>
        <Link href="/signup">
          <HeaderText>Sign Up</HeaderText>
        </Link>
      </HeaderRow>
    </HeaderContainer>
  );
}
