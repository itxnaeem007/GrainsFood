import { styled } from "@/theme";
import { Link } from "react-router-dom";
import { Flex, Text } from "../elements";
import { LockIcon } from "../icons";

const LinkBanner = () => {
  const link = import.meta.env.VITE_APPLICATION_URL;
  const sanitizedLink = link.replace(/^https?:\/\//, "");

  return (
    <LinkBannerWrapper direction={"column"} justify={"center"} align={"center"}>
      <Flex justify={"center"}>
        <Text variant={"p_md1"} weight={"semibold"}>
          IMPORTANT! Please check that you are visiting
        </Text>
        <LockIconBox />
        <Text variant={"p_md1"} weight={"normal"}>
          URL Verification:{" "}
          <Link to={link} target="_blank">
            <Text css={{ color: "$http" }}>https://</Text>{" "}
            <Text weight={"normal"}>{sanitizedLink}</Text>
          </Link>
        </Text>
      </Flex>
    </LinkBannerWrapper>
  );
};

const LinkBannerWrapper = styled(Flex, {
  width: "100%",
  height: "52px",
  background: "$linkBanner",
});

const LockIconBox = styled(LockIcon, {
  mx: "$2",
});

export default LinkBanner;
