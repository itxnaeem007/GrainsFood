import { styled } from "@/theme";
import { Flex } from ".";

export const Responsive = styled(Flex, {
  display: "flex",
  maxWidth: "1920px",
  width: "83%",
  m: "$space$2 auto",
  Row: {
    Col: {
      ".animation": {
        height: "inherit",
      },
      ".lottie-container": { width: "90%" },
    },
  },
});
