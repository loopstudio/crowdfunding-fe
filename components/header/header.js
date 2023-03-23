import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import smallLogo from "assets/small-logo.svg";
import { useHasMounted } from "hooks/useHasMounted";
import { useAuth } from "context/AuthContext";
import {
  UNAUTHENTICATED_ITEMS,
  HEADER_DROPDOWN_ITEMS,
  ROUTES,
} from "../../constants";

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
  const { logout, isUserAuthenticated } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onLogOut = () => {
    logout();
    router.push(ROUTES.home);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <HeaderContainer>
      <HeaderRow>
        <Link href={ROUTES.home}>
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
        {isUserAuthenticated ? (
          <>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <HeaderText isDropdownOpen={isDropdownOpen}>
                My Projects
              </HeaderText>
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownContent>
                {HEADER_DROPDOWN_ITEMS.map((item) => (
                  <Link href={item.link} key={item.link}>
                    <HeaderText>{item.title}</HeaderText>
                  </Link>
                ))}
              </DropdownContent>
            )}
            <LogOutButton onClick={onLogOut}>Log Out</LogOutButton>
          </>
        ) : (
          UNAUTHENTICATED_ITEMS.map((item) => (
            <Link href={item.link} key={item.link}>
              <HeaderText>{item.title}</HeaderText>
            </Link>
          ))
        )}
      </HeaderRow>
    </HeaderContainer>
  );
};
