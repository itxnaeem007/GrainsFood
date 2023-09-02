import { styled } from "@/theme";
import { Box, Text, Flex, Container, Row, Col } from "./elements";
import GrainsLogo from "@/assets/GrainFood.png";
import { Link } from "react-router-dom";
import { scrollPage } from "@/utils";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container style={{ position: "relative" }}>
        <FooterInnerSection>
          <footer>
            <Box
              as={Link}
              to="/"
              className="trader-logo"
              onClick={() => {
                scrollPage(0);
              }}
            >
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

            <Row css={{ w: "100%", mt: "$4" }}>
              <Col xs={12} lg={5}>
                <Flex direction={"column"}>
                  <Text variant={"p_md"} color={"white"}>
                    AJMAN FREE ZONE
                    <br />
                    Building #01 - office #419(F)
                    <br />
                    Dubai, UAE
                  </Text>
                </Flex>
              </Col>
              <Col xs={12} lg={5}>
                <Flex direction={"column"}>
                  <Text
                    variant={"p_md"}
                    color={"white"}
                    css={{ textDecoration: "underline" }}
                  >
                    +971 65241595
                    <br />
                    +971527142004
                    <br />
                    info@grainsfoodtrading.com
                  </Text>
                </Flex>
              </Col>
              <Col xs={12} lg={2}>
                <Flex
                  direction={"column"}
                  align={"center"}
                  css={{
                    mx: "auto",
                    my: "10px",
                    "@md": {
                      mx: "initial",
                      ml: "auto",
                      my: "0px",
                    },
                    background: "White",
                    borderRadius: "10px",
                    cursor: "pointer",
                    padding: "20px",
                    "&:hover": {
                      background: "gray",
                      color: "White",
                    },
                  }}
                  onClick={() => {
                    scrollPage(0);
                  }}
                >
                  <Text variant={"p_xs"} color={"black"}>
                    Move
                  </Text>
                  <Text>TOP</Text>
                </Flex>
              </Col>
            </Row>

            <BottomFlex
              direction={"column"}
              justify={"center"}
              align={"center"}
            >
              <Text
                variant={"p_sm"}
                weight={"normal"}
                color={"white"}
                align={"center"}
                css={{ mt: "20px" }}
              >
                MADE WITH PASSION BY A TEAM OF DEDICATED GRAINS & FOOD
                ENTHUSIASTS. © COPYRIGHT 2023, GRAINS FOOD TRADING, ALL RIGHTS
                RESERVED.
              </Text>
            </BottomFlex>
          </footer>
        </FooterInnerSection>
      </Container>
    </FooterWrapper>
  );
};

export const FooterWrapper = styled(Box, {
  background: "$footerBg",
});
export const FooterInnerSection = styled(Box, {
  background: "$footerBg",
  borderTop: "0.75px solid $primary2",
  // minHeight: "$xl",
  mx: "$5",
  "& > footer": {
    pb: "$4",
    pt: "$10",
    px: "$5",
  },
  ".trader-logo": {
    // width: "150px",
  },
  "@md": {
    ".trader-logo": {
      // width: "350px",
    },
    mx: "initial",
    "& > footer": {
      px: "0",
    },
  },
  "@3xl": {
    "& > footer": {
      mx: "auto",
      px: "0",
      maxWidth: 1440,
    },
  },
});

export const FooterFlex = styled("div", {
  mt: "30px",
  width: "100%",
  ".footer-item": {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    "@md": {
      width: "fit-content",
    },
  },
  ".footer-link": {
    // py: 1,
  },
  "@md": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "44px",
  },
  "@lg": {
    gap: "60px",
  },
  "@xl": {
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
  },
});

export const BottomFlex = styled(Flex, {
  borderTop: "1px solid $footerBorder",
  justifyContent: "center",
  mt: "$4",
  mb: "$2",
});

export const LegalTerms = styled("div", {
  display: "flex",
  color: "white",
  margin: "auto",
  justifyContent: "center",
  py: "10px",
  flexWrap: "wrap",
  a: {
    fontWeight: "$bold",
    textDecoration: "none",
    color: "$primary2",
    fontSize: "$12",
    mr: "10px",
  },
});

export const Line = styled(Box, {
  w: "1px",
  background: "$gray400",
  h: "15px",
  ml: "$2",
});

const StyledImage = styled("img", {
  w: "60px",
  h: "60px",
  "@md": {
    w: "100px",
    h: "100px",
  },
});
export default Footer;
