import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { startCase } from "lodash";

import smallLogo from "assets/small-logo.svg";
import { useHasMounted } from "hooks/useHasMounted";
import { ACCESS_TOKEN, LINKS, LOGGED_LINKS, LOG_OUT } from "../../constants";

import {
  HeaderContainer,
  HeaderRow,
  HeaderText,
  LogOutButton,
} from "./header.styles.js";

export const Header = () => {
  const router = useRouter();
  const hasMounted = useHasMounted();

  const accessToken =
    typeof window !== "undefined" && sessionStorage.getItem(ACCESS_TOKEN);
  const isLoggedIn = !!accessToken;

  const linksToRender = isLoggedIn ? LOGGED_LINKS : LINKS;

  const onLogOut = () => {
    sessionStorage.removeItem(ACCESS_TOKEN);
    router.push("/");
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <HeaderContainer>
      <HeaderRow>
        <Link href="/">
          <Image
            priority
            src={smallLogo}
            height={34}
            width={39}
            alt="SmallLogo"
          />
        </Link>
        <HeaderText>Crowdfunding</HeaderText>
      </HeaderRow>

      <HeaderRow>
        {linksToRender.map((link) => {
          return link === LOG_OUT ? (
            <LogOutButton onClick={onLogOut} key={link}>
              {startCase(link)}
            </LogOutButton>
          ) : (
            <Link href={`/${link.toLowerCase()}`} key={link}>
              <HeaderText>{startCase(link)}</HeaderText>
            </Link>
          );
        })}
      </HeaderRow>
    </HeaderContainer>
  );
};
