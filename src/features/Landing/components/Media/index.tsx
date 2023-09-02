import { Col, Flex, Link, Row, Text } from "@/components/elements";
import { Responsive } from "@/components/elements/Responsive";
import { styled } from "@/theme";
import { socialLinks } from "@/config/footer";
import { videoLink } from "@/config/constants";
import useTheme from "@/hooks/useTheme";
import { ThemeEnum } from "@/config";
export const Media = () => {
  const { theme } = useTheme();
  return (
    <MediaWrapper>
      <Responsive direction={"column"}>
        <Row>
          <Col css={{ width: "100%" }} xs={12} lg={6}>
            <Flex
              css={{
                boxShadow:
                  theme === ThemeEnum.DARK ? "0px 0px 40px #9C6AFD80" : "none",
                w: "500px",
                maxWidth: "400px",
                "@xl": {
                  maxWidth: "500px",
                },
                "@3xl": {
                  w: "600px",
                  maxWidth: "600px",
                },
              }}
            >
              <iframe
                className="iframe-video"
                width={"100%"}
                height={"100%"}
                src={videoLink}
                // frameborder="0"
              ></iframe>
            </Flex>
          </Col>
          <Col css={{ width: "100%" }} xs={12} lg={6}>
            <Flex direction={"column"} justify={"between"}>
              <Text
                as={"h1"}
                variant={"p_4xl"}
                weight={"semibold"}
                color={"white"}
                css={{ mb: "$2" }}
              >
                <Text color={"primary2"}>Local</Text> Traders <br /> in the
                Media
              </Text>
              <Text
                variant={"p_lg"}
                color={"white"}
                as={"p"}
                weight={"regular"}
                css={{ m: "$4 auto $8 0" }}
              >
                We are a peer-to-peer cryptocurrency exchange that connects
                buyers and sellers using our native LCT token. LCT serves as the
                fuel for our exchange, providing a secure trading environment.
                With features like escrow and optional Video Call Security, we
                prioritize the safety and integrity of our platform.
              </Text>
              <Flex align={"center"} justify={"start"}>
                {socialLinks.map((link) => (
                  <Link
                    className="social-links"
                    href={link.url}
                    target="_blank"
                  >
                    <img src={link.icon} alt={link.title} />
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Col>
        </Row>
      </Responsive>
    </MediaWrapper>
  );
};
const MediaWrapper = styled("div", {
  background: "$bluebg",
  p: "$20 0",
  mb: "$16",
  width: "100%",
  iframe: {
    borderRadius: "$2xl-med",
  },
  a: {
    "&:not(:last-child)": {
      mr: "$10",
    },
  },
});
