import { Col, Flex, Text } from "@/components/elements";
import { styled } from "@/theme";

interface Data {
  index: number;
  title: string;
  description: string;
  img: string;
}
export const Payment = (feature: Data) => {
  return (
    <Col css={{ px: "$4" }} xs={12} lg={4} key={feature.index}>
      <Flex
        direction={"column"}
        justify={"start"}
        align={"center"}
        css={{ w: "100%", mb: "$10" }}
      >
        <img src={feature?.img} height={200} width={200} alt="" />
        <Flex direction={"column"} align={"center"} css={{ mt: "-20px" ,  "@md" : {
          mt: "-40px"
        } }}>
          <Text
            variant={"p_lg"}
            color="primary3"
            weight={"bold"}
            css={{ mb: "$2" }}
          >
            {feature.title}
          </Text>
          <Text
            variant={"p_lg"}
            weight={"regular"}
            css={{ textAlign: "center", mt: "$4", minHeight: "10rem" }}
          >
            {feature.description}
          </Text>
        </Flex>
      </Flex>
    </Col>
  );
};

export const FeatureLottieWrapper = styled(Flex, {
  width: "40%",
  minHeight: "133px",
});
