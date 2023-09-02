import { Col, Flex, Row, Text } from "../elements";
import { FEATURES } from "./features";
import { styled } from "@/theme";

export const ExchangeFeatures = () => {
  return (
    <>
      <Text
        css={{ textAlign: "center" }}
        variant={"p_2xl"}
        color={"blue"}
        weight={"medium"}
      >
        LOCAL TRADERS P2P
      </Text>
      <Text
        css={{ textAlign: "center" }}
        variant={"p_xl"}
        color={"gray2"}
        weight={"medium"}
      >
        Exchange Features
      </Text>
      <Row css={{ width: "100%", mb: "$14", mt: "$4" }}>
        {FEATURES.map((feature, index) => (
          <Col xs={12} lg={4} key={index}>
            <Flex
              direction={"column"}
              justify={"start"}
              align={"center"}
              css={{ w: "100%", mb: "$10" }}
            >

              <Text variant={"p_lg"} weight={"semibold"} css={{ mb: "$2" }}>
                <Text color="primary3" weight={"bold"}>
                  {feature.title}
                </Text>
                {feature.isHotFunction && (
                  <Text variant={"p_sm"} color={"error"} css={{ ml: "$1" }}>
                    (Hot Function)
                  </Text>
                )}
              </Text>
              <Text
                variant={"p_lg"}
                weight={"regular"}
                css={{ textAlign: "center", mt: "$4", minHeight: "10rem" }}
              >
                {feature.description}
              </Text>
            </Flex>
          </Col>
        ))}
      </Row>
    </>
  );
};

export const LottieWrapper = styled(Flex, {
  width: "40%",
  height: "210px",
});
