import { Flex, Text } from "@/components/elements";
import { Responsive } from "@/components/elements/Responsive";
import { styled } from "@/theme";
import { AnimationContentShow } from "../style";

export const HeroArea = () => {
  return (
    <Banner>
      <Responsive justify={"center"} align={"center"} css={{ h: "70vh" }}>

        <AnimationContentShow
          direction={"column"}
          align={"center"}
          justify={"center"}
          css={{
            background: "$bodyBg",
            borderRadius: "10px",
            padding: "40px",
            height: "200px",
            "@md": {
              height: "160px",
            },
          }}
        >
          <Flex direction={"column"} align={"center"}>
            <Flex justify={"center"}>
              <Text
                as={"h1"}
                variant={"p_3xl"}
                weight={"semibold"}
                color={"logoText"}
                align={"center"}
                css={{ textShadow: "2px 2px 4px #333" }}
              >
                DISCOVER ALL OF OUR BRANDS
              </Text>
            </Flex>
            <Text
              variant={"p_md"}
              weight={"regular"}
              color={"gray3"}
              align={"center"}
            >
              Bringing you the best in quality from renowned food producers all
              around the world.
            </Text>
          </Flex>
        </AnimationContentShow>
      </Responsive>
    </Banner>
  );
};

export const LandingLottie = styled(Flex, {
  height: "100%",
  "@md": {
    width: "65%",
  },
  "@xl": {
    width: "60%",
    height: "310px",
  },
});

const Banner = styled("div", {
  padding: "$2 0 $12 0",
  background: "$landingBg",
  backgroundSize: "cover",
  minHeight: "calc(100vh - 81px)",
  backgroundPosition: "bottom 50% left 40%",
  backgroundAttachment: "fixed",
});
