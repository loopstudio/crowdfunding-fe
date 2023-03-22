import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { startCase } from "lodash";

import smallLogo from "assets/small-logo.svg";
import { useHasMounted } from "hooks/useHasMounted";
import { ACCESS_TOKEN, LINKS, HEADER_DROPDOWN_ITEMS } from "../../constants";

import {
  AppName,
  HeaderContainer,
  HeaderRow,
  HeaderText,
  LogOutButton,
  DropdownContent,
  DropdownButton,
  LogoWrapper,
} from "./header.styles.js";

export const Header = () => {
  const router = useRouter();
  const hasMounted = useHasMounted();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const accessToken =
    typeof window !== "undefined" && sessionStorage.getItem(ACCESS_TOKEN);
  const isLoggedIn = !!accessToken;

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
          <LogoWrapper>
            <Image
              priority
              src={smallLogo}
              height={34}
              width={39}
              alt="SmallLogo"
            />
            <AppName>Crowdfunding</AppName>
          </LogoWrapper>
        </Link>
      </HeaderRow>

      <HeaderRow>
        {isLoggedIn ? (
          <>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <HeaderText isDropdownOpen={isDropdownOpen}>
                My Projects
              </HeaderText>
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownContent>
                {HEADER_DROPDOWN_ITEMS.map((item) => (
                  <Link href={`/${item.link}`} key={item.link}>
                    <HeaderText>{item.title}</HeaderText>
                  </Link>
                ))}
              </DropdownContent>
            )}
            <LogOutButton onClick={onLogOut}>Log Out</LogOutButton>
          </>
        ) : (
          LINKS.map((link) => (
            <Link href={`/${link.toLowerCase()}`} key={link}>
              <HeaderText>{startCase(link)}</HeaderText>
            </Link>
          ))
        )}
      </HeaderRow>
    </HeaderContainer>
  );
};
