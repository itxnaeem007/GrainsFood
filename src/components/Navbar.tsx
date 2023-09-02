import { Box, Flex, IconButton, Container, Text } from "./elements";
import { styled } from "@/theme";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useCallback, useEffect, useState } from "react";
import { CloseFilledIcon, BurgerMenuIcon } from "./icons";
import GrainsLogo from "@/assets/GrainFood.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const listener = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <Container style={{ position: "relative" }}>
      <StyledHeader>
        <Flex align={"center"} justify={"between"}>
          <Flex
            align={"center"}
            css={{
              flexShrink: 0,
              width: "100%",
              "@sm": { width: "initial" },
            }}
          >
            <IconButton
              css={{
                fontSize: "$2xl",
                "@sm": { fontSize: "$2xl" },
              }}
              className="menu-open"
              onClick={() => setIsOpen(true)}
              aria-label="Open main menu"
            >
              <BurgerMenuIcon width={32} height={26} aria-hidden="true" />
            </IconButton>
            <Box as={Link} to="/" className="trader-logo">
              <Flex align={"center"}>
                <StyledImage src={GrainsLogo} alt="" />
                <Flex
                  direction={"column"}
                  css={{
                    fontSize: "10px",
                    "@md": {
                      fontSize: "16px",
                    },
                  }}
                >
                  <Text weight={"bold"} color={"logoText"}>
                    Grains Food Trading-F.Z.E
                  </Text>
                  <Text weight={"bold"} color={"logoText"}>
                    جرينس فود تريدينج - م.م.ح
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>

          <Flex className="toggle-btns tab-content" gapX={"7"}>
            <ThemeToggle />
          </Flex>
        </Flex>

        <StyledNav aria-label="Main menu" aria-expanded={isOpen}>
          <IconButton
            className="menu-close"
            onClick={closeSidebar}
            css={{ zIndex: 999 }}
          >
            <CloseFilledIcon fontSize={24} aria-hidden="true" />
            <span className="sr-only">Close main menu</span>
          </IconButton>
          <Flex className="toggle-btns desktop-content">
            <ThemeToggle />
          </Flex>
        </StyledNav>
      </StyledHeader>
      {/* <StyledBackdrop hidden={!isOpen} onClick={closeSidebar} /> */}
    </Container>
  );
};

const StyledImage = styled("img", {
  w: "60px",
  h: "60px",
  "@md": {
    w: "100px",
    h: "100px",
  },
});
const StyledHeader = styled("header", {
  position: "absolute",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: 101,
  padding: "1rem 1rem 1.15rem 1rem",
  ".desktop-content": {
    display: "flex",
    "@sm": {
      display: "none",
    },
    "@xl": {
      display: "flex",
    },
  },
  ".tab-content": {
    display: "none",
    "@sm": {
      display: "flex",
    },
    "@xl": {
      display: "none",
    },
  },
  ".trader-logo": {
    display: "inline-flex",
    alignItems: "center",
    marginLeft: "auto",
  },
  "@md": {
    ".trader-logo": {
      mx: "auto",
      // width: 185,
    },
  },
  "@xl": {
    // position: "absolute",
    display: "flex",
    alignItems: "center",
    padding: 0,
    top: 0,
    height: "$$navbarHeight",

    "& .trader-logo": {
      mx: "0",
    },
    "& .menu-open": {
      display: "none",
    },
  },
});

const StyledNav = styled("nav", {
  position: "fixed",
  left: 0,
  top: 0,
  height: "100vh",
  transform: "translateX(-100%)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  bgColor: "$bodyBg",
  padding: "1.3rem",
  // borderRadius: "0px 15px 15px 0px",

  '&[aria-expanded="true"]': {
    transform: "translateX(0%)",
    outline: "none",
    width: "100%",
    height: "100%",
    boxShadow: "3px 0 12px $black40",
    ml: 0,
  },
  "& .menu-close": {
    height: 40,
    position: "absolute",
    top: 10,
    right: 10,
  },
  "& .toggle-btns": {
    mx: "$4",
    gap: "$4",
  },
  "& .login-btn": {
    fontWeight: "$semibold",
    height: 38,
    px: "$6",
    my: 26,
  },
  "& .logout-btn": {
    fontSize: "$sm",
    color: "$textGray2",
    padding: "8px",
    marginTop: "12px",
    bgColor: "transparent",
    transition: "background-color 0.25s ease",
    borderRadius: "$xlg",
    "&:hover": {
      bgColor: "rgb(240, 240, 240)",
    },
  },
  "@xl": {
    position: "static",
    height: "auto",
    transition: "none",
    borderRadius: 0,
    ml: "auto",
    transform: "none",
    alignSelf: "stretch",
    bgColor: "transparent",
    padding: 0,
    display: "flex",
    alignItems: "center",
    "& .menu-close": {
      display: "none",
    },
    // TODO: fix display none logic
    "& .login-btn": {
      my: 0,
      // display: "none",
    },
    "& .logout-btn": {
      display: "none",
    },
  },
});

export default Navbar;
