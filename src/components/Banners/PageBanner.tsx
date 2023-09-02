import { styled } from "@/theme";
import { Link, useLocation } from "react-router-dom";
import { Flex, Text } from "../elements";
import React from "react";

const PageBanner: React.FC<{
  name: string;
  navigation?: string;
  isShow?: boolean;
}> = ({ name, navigation, isShow = true }) => {
  const location = useLocation();
  return (
    <StyledDiv>
      <div className="divider" />
      {isShow && (
        <BannerWrapper>
          <Text variant={"p_3xl"} weight={"bold"} color={"dark"}>
            {name}
          </Text>
          {navigation && (
            <Flex className="navigation" align={"center"}>
              <Link
                className={location.pathname === "/" ? "active" : "inactive"}
                to="/"
              >
                Home
              </Link>
              <span className="seprator">{">>"}</span>
              <Link
                className={location.pathname === "/" ? "inactive" : "active"}
                to="#"
              >
                {navigation}
              </Link>
            </Flex>
          )}
        </BannerWrapper>
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled("div", {
  background : '$bodyBg',
  ".divider": {
    height: "$$navbarHeight",
    borderBottom: "1px solid $headerBorder",
  },
});

const BannerWrapper = styled("div", {
  dflex: "center",
  flexDirection: "column",
  width: "100%",
  pb: "$2",
  height: 140,
  ".navigation": {
    columnGap: "5px",
    alignItems: "center",
    ".inactive": {
      color: "$inactive",
      fontWeight: "$semibold",
    },
    ".active": {
      color: "$primary1",
      fontWeight: "$semibold",
    },
    ".seprator": {
      fontSize: "1rem",
      color: "$inactive",
      fontWeight: "$bold",
    },
    a: {
      textDecoration: "none",
      color: "grey",
      fontWeight: "$semibold",
    },
  },
});

export default PageBanner;
