import { Box, Col, Flex, Row, Text } from "@/components/elements";
import PageBanner from "@/components/Banners/PageBanner";
import { HeroArea } from "./components/heroArea";
import { Responsive } from "@/components/elements/Responsive";
import { PaymentFeatures } from "./components/PaymentFeatures";
import {
  AnimationContentShow,
  ForthBanner,
  InnerImage,
  SecondBanner,
  StyledText,
  ThirdBanner,
} from "./style";
import { Testimonials } from "./components/Testimonials";

export const Landing = () => {
  return (
    <>
      <PageBanner name="Dashboard" isShow={false} />
      <HeroArea />
      <Responsive direction={"column"}>
        <Row css={{ width: "100%", my: "$14", gapY: "1px" }}>
          <Col
            xs={12}
            lg={6}
            css={{ position: "relative", overflow: "hidden" }}
          >
            <InnerImage src={"/images/new/arabic1.jpg"} alt="" />
            <StyledText variant={"p_3xl"} weight={"bold"} align={"center"}>
              ALWAYS <br /> THE PERFECT
              <br /> PORTION
            </StyledText>
          </Col>
          <Col
            xs={12}
            lg={6}
            css={{ position: "relative", overflow: "hidden" }}
          >
            <InnerImage src={"/images/new/arabic2.jpg"} alt="" />
            <StyledText variant={"p_3xl"} weight={"bold"} align={"center"}>
              TOP REASONS <br /> WHY CHEFS
              <br /> LOVE US
            </StyledText>
          </Col>
          <Col
            xs={12}
            lg={6}
            css={{ position: "relative", overflow: "hidden" }}
          >
            <InnerImage src={"/images/new/arabic3.jpg"} alt="" />
            <StyledText variant={"p_3xl"} weight={"bold"} align={"center"}>
              INNOVATION <br /> CENTRE
            </StyledText>
          </Col>
          <Col
            xs={12}
            lg={6}
            css={{ position: "relative", overflow: "hidden" }}
          >
            <InnerImage src={"/images/new/anna-pelzer.jpg"} alt="" />
            <StyledText variant={"p_3xl"} weight={"bold"} align={"center"}>
              GREEN <br /> CATERING
            </StyledText>
          </Col>
        </Row>

        <Row css={{ width: "100%", mb: "$14" }}>
          <Col xs={12} lg={6}>
            <Flex
              css={{
                w: "$full",
                pr: "0",
                "@md": {
                  pr: "$12",
                },
              }}
              align={"center"}
              justify={"center"}
            >
              <Text
                variant={"p_2xl"}
                color={"blue"}
                weight={"semibold"}
                css={{ my: "$2" }}
              >
                Grains Food Trader’s unique service & added value originates
                from four pillars constituting its market strength.
              </Text>
            </Flex>
          </Col>
          <Col xs={12} lg={6}>
            <Flex
              direction={"column"}
              align={"center"}
              css={{ borderLeft: "1px solid $textGray3", pl: "$12" }}
            >
              <Text as={"p"} variant={"p_xlg"} weight={"semibold"}>
                Strong and professional presence at the retail and food service
                markets.
              </Text>
              <Text
                variant={"p_lg"}
                color={"gray12"}
                as={"p"}
                weight={"regular"}
                css={{ mt: "$4" }}
              >
                Embracing diversity with over 20 nationalities to reciprocate
                our clients’ cultural diversity and heritage.
              </Text>
            </Flex>
          </Col>
        </Row>
      </Responsive>
      <Responsive>
        <Row css={{ width: "100%", mb: "$14" }}>
          <Col xs={12} lg={3}>
            <Flex css={{ pr: "10px" }}>
              <Text
                variant={"p_sm"}
                css={{
                  mt: "10px",
                }}
              >
                01. Structure expansion based on category management
              </Text>
            </Flex>
          </Col>
          <Col xs={12} lg={3}>
            <Flex css={{ pr: "10px" }}>
              <Text
                variant={"p_sm"}
                css={{
                  mt: "10px",
                }}
              >
                02. Strong and professional presence at the retail and food
                service markets.
              </Text>
            </Flex>
          </Col>
          <Col xs={12} lg={3}>
            <Flex css={{ pr: "10px" }}>
              <Text
                variant={"p_sm"}
                css={{
                  mt: "10px",
                }}
              >
                03. Embracing diversity with over 20 nationalities to
                reciprocate our clients’ cultural diversity and heritage.
              </Text>
            </Flex>
          </Col>
          <Col xs={12} lg={3}>
            <Flex>
              <Text
                variant={"p_sm"}
                css={{
                  mt: "10px",
                }}
              >
                04. Dedicated business units servicing specific channels of
                distribution & client categories.
              </Text>
            </Flex>
          </Col>
        </Row>
      </Responsive>
      <SecondBanner>
        <AnimationContentShow
          direction={"column"}
          align={"center"}
          justify={"center"}
        >
          <Text
            as={"h1"}
            variant={"p_3xl"}
            weight={"semibold"}
            color={"white"}
            align={"center"}
            css={{ textShadow: "2px 2px 4px #333", textTransform: "uppercase" }}
          >
            Browse Our Catalogue
          </Text>
          <Box
            css={{
              background: "white",
              borderRadius: "10px",
              h: "10px",
              w: "100%",
              mb: "10px",
            }}
          ></Box>
          <Flex
            direction={"column"}
            align={"center"}
            css={{
              background: "black",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Flex justify={"between"} css={{ minWidth: "200px", px: "20px" }}>
              <img width={30} height={10} src="/images/brands/pdf.jpg" alt="" />
              <Text
                as={"h1"}
                variant={"p_xl"}
                weight={"semibold"}
                color={"white"}
                align={"center"}
                css={{ textShadow: "2px 2px 4px #333" }}
              >
                UAE
              </Text>
            </Flex>
          </Flex>
        </AnimationContentShow>
      </SecondBanner>
      <PaymentFeatures />
      <ThirdBanner />
      <Testimonials />
      <Responsive direction={"column"}>
        <Row css={{ width: "100%", my: "$14", gapY: "1px" }}>
          <Col
            xs={12}
            lg={6}
            css={{ position: "relative", overflow: "hidden" }}
          >
            <InnerImage src={"/images/new/arabic5.jpg"} alt="" />
          </Col>
          <Col
            xs={12}
            lg={6}
            css={{ position: "relative", overflow: "hidden" }}
          >
            <InnerImage src={"/images/new/arabic6.jpg"} alt="" />
          </Col>
          <Col
            xs={12}
            lg={6}
            css={{ position: "relative", overflow: "hidden" }}
          >
            <InnerImage src={"/images/new/arabic3.jpg"} alt="" />
          </Col>
          <Col
            xs={12}
            lg={6}
            css={{ position: "relative", overflow: "hidden" }}
          >
            <InnerImage src={"/images/new/Ajman_Free_Zone.jpg"} alt="" />
          </Col>
        </Row>

        <Row css={{ width: "100%", mb: "$14" }}>
 
          <Col xs={12} >
            <Flex
              css={{w : '100%'}}
              direction={"column"}
              justify={'center'}
              align={"center"}
            >
              <Text as={"p"} variant={"p_xlg"} weight={"semibold"}>
                Strong and professional presence at the retail and food service
                markets.
              </Text>
              <Text
                variant={"p_lg"}
                color={"gray12"}
                as={"p"}
                weight={"regular"}
                css={{ mt: "$4" }}
              >
                Embracing diversity with over 20 nationalities to reciprocate
                our clients’ cultural diversity and heritage.
              </Text>
            </Flex>
          </Col>
        </Row>
      </Responsive>
      <ForthBanner/>
      <Responsive>
        <div className="mapouter" style={{ width: "100%", height: "400px" }}>
          <div className="gmap_canvas" style={{height : '100%'}}>
            <iframe
              className="gmap_iframe"
              width="100%"
              height={"100%"}
              src="https://maps.google.com/maps?width=652&amp;height=551&amp;hl=en&amp;q=Building 01 office 419 Ajman free zone&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </Responsive>
      <Flex css={{ m: "$16 0 $12 0" }} justify={"between"}>
        {/* <SlideMarquee speed={25}>
          {isTokenLoading ? (
            <Spinner />
          ) : (
            tokenList?.map((item, ind) => (
              <Flex align={"center"}>
                <Box
                  key={ind}
                  as={"img"}
                  css={{
                    w: "50px",
                    height: "50px",
                    m: "0 1rem 0 6rem",
                    borderRadius: "50%",
                  }}
                  src={item.imageUrl}
                  alt=""
                />
                <Text variant={"p_lg"} weight={"medium"}>
                  {item.name}
                </Text>
              </Flex>
            ))
          )}
        </SlideMarquee> */}
      </Flex>
    </>
  );
};
