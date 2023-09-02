import { CSS, styled } from "@/theme/stitches.config";
import React from "react";

export const StyleText = styled("span", {
  margin: 0,
  lineHeight: 1.5,
  variants: {
    weight: {
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
      normal: {
        fontWeight: "$normal",
      },
      regular: {
        fontWeight: "$extranormal",
      },
    },

    variant: {
      p_6xl: {
        // fontSize: "$6xl",
        fontSize: 90,
      },
      p_5xl: {
        // fontSize: "$5xl",
        fontSize: 60,
      },
      p_4xl: {
        //IMP : it use for 50px heading font
        fontSize: 20,
        "@lg": {
          fontSize: 30,
        },
        "@3xl": {
          fontSize: 50,
        },
      },
      p_3_5xl: {
        fontSize: 45,
      },
      p_3xl: {
        //IMP : it use for 40px heading font
        fontSize: 20,
        "@xl": {
          fontSize: 25,
        },
        "@3xl": {
          fontSize: 40,
        },
      },
      p_2_5xl: {
        fontSize: 35,
      },
      p_2xl: {
        //IMP : it use for 30px heading font
        fontSize: 20,
        "@xl": {
          fontSize: 25,
        },
        "@3xl": {
          fontSize: 30,
        },
      },
      p_xl: {
        //IMP : it use for 25px heading font
        fontSize: 18,
        "@xl": {
          fontSize: 20,
        },
        "@3xl": {
          fontSize: 25,
        },
      },
      p_xl1: {
        //IMP : it use for 22px heading font
        fontSize: 16,
        "@xl": {
          fontSize: 22,
        },
      },
      p_xlg: {
        //IMP : it use for 20px heading font
        fontSize: 18,
        lineHeight: 1.5,
        "@xl": {
          fontSize: 20,
        },
      },
      p_lg: {
        //IMP : it use for 18px heading font
        fontSize: 16,
        "@3xl": {
          fontSize: 18,
        },
      },
      p_md: {
        fontSize: 14,
        "@3xl": {
          fontSize: 16,
        },
      },
      p_md1: {
        fontSize: 15,
      },
      p_sm: {
        fontSize: 14,
      },
      p_xs: {
        fontSize: 12,
      },
      p_2xs: {
        fontSize: 11,
      },
      p_3xs: {
        fontSize: 10,
      },
    },

    color: {
      primary: { color: "$primary1" },
      primary2: { color: "$primary2" },
      primary3: { color: "$primary3" },
      blue: { color: "$textBlue" },
      blue1: { color: "$textBlue1" },
      blue2: { color: "$textBlue2" },
      success: { color: "$success" },
      error: { color: "$error" },
      subtle: { color: "$subtle" },
      gray: { color: "$textGray1" },
      gray2: { color: "$textGray2" },
      gray3: { color: "$textGray3" },
      gray4: { color: "$textGray4" },
      gray5: { color: "$textGray5" },
      gray9: { color: "$textGray9" },
      gray10: { color: "$textGray10" },
      gray11: { color: "$textGray11" },
      gray12: { color: "$aboutText" },
      gray15: { color: "$textGray15" },
      gray18: { color: "$textGray18" },
      gray19: { color: "$textGray19" },
      gray20: { color: "$textGray20" },
      green: { color: "$textGreen" },
      green1: { color: "$textGreen1" },
      green2: { color: "$textGreen2" },
      white: { color: "$white" },
      black: { color: "$black" },
      dark: { color: "$textDark" },
      dark3: { color: "$textDark3" },
      dark4: { color: "$textDark4" },
      red: { color: "$red" },
      red1: { color: "$red1" },
      red2: { color: "$red2" },
      statistics: { color: "$statistics" },
      content: { color: "$jobContent" },
      region: { color: "$jobRegion" },
      buying: { color: "$minBuying" },
      placeholder: { color: "$inputPlaceholder" },
      symbolColor: { color: "$symbolColor" },
      traderText: { color: "$traderText" },
      label: { color: "$label" },
      btc: { color: "$btcColor" },
      offerHeading: { color: "$offerHeading" },
      lctColor: { color: "$lctColor" },
      yellow: { color: "$textYellow" },
      logoText : {color : "$logoText"}
    },

    align: {
      center: { textAlign: "center" },
      left: { textAlign: "left" },
      right: { textAlign: "right" },
      justify: { textAlign: "justify" },
    },
    lineHeight: {
      1: { lineHeight: "$1" },
      2: { lineHeight: "$2" },
      3: { lineHeight: "$3" },
      4: { lineHeight: "$4" },
      5: { lineHeight: "$5" },
      6: { lineHeight: "$6" },
      7: { lineHeight: "$7" },
      8: { lineHeight: "$8" },
      9: { lineHeight: "$9" },
      "9-10": {
        //For $9-10
        lineHeight: "$3",
        "@lg": {
          lineHeight: "$5",
        },
        "@3xl": {
          lineHeight: "$9-10",
        },
      },
      10: { lineHeight: "$10" },
      11: { lineHeight: "$11" },
      12: { lineHeight: "$12" },
      13: { lineHeight: "$13" },
      14: { lineHeight: "$14" },
      15: { lineHeight: "$15" },
      16: { lineHeight: "$16" },
      17: { lineHeight: "$17" },
      20: { lineHeight: "$20" },
      24: { lineHeight: "$24" },
      normal: { lineHeight: "$normal" },
      none: { lineHeight: "$none" },
      shorter: { lineHeight: "$shorter" },
      short: { lineHeight: "$short" },
      base: { lineHeight: "$base" },
      tall: { lineHeight: "$tall" },
      taller: { lineHeight: "$taller" },
    },

    truncate: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "attr(data-num-lines)",
      },
    },
  },
});

type TextProps = React.ComponentProps<typeof StyleText> & {
  noOfLines?: number;
  css?: CSS;
  as?: React.ElementType;
};

// const variantMap = {
//   h_4xl: "h1",
// };

export const Text = (props: TextProps) => {
  const { noOfLines, ...rest } = props;

  return (
    <StyleText
      truncate={noOfLines ? true : undefined}
      data-num-lines={noOfLines}
      {...rest}
    />
  );
};

//  h_4xl: {
//     fontSize: "$6xl",
//     lineHeight: 1,
//     "@lg": {
//       fontSize: "$7xl",
//     },
//   },
//   h_3xl: {
//     fontSize: "$5xl",
//     lineHeight: 1,
//     fontWeight: "$bold",
//     "@lg": {
//       fontSize: "$6xl",
//     },
//   },
//   h_2xl: {
//     fontSize: "$4xl",
//     lineHeight: 1.2,
//     fontWeight: "$bold",
//     "@lg": {
//       fontSize: "$5xl",
//       lineHeight: 1,
//     },
//   },
//   h_xl: {
//     fontSize: "$3xl",
//     lineHeight: 1.33,
//     fontWeight: "$bold",
//     "@lg": {
//       fontSize: "$4xl",
//       lineHeight: 1.2,
//     },
//   },
//   h_lg: {
//     fontSize: "$2xl",
//     lineHeight: 1.33,
//     fontWeight: "$bold",
//     "@lg": {
//       fontSize: "$3xl",
//       lineHeight: 1.2,
//     },
//   },
//   h_md: {
//     fontSize: "$xl",
//     lineHeight: 1.2,
//     fontWeight: "$bold",
//   },
//   h_sm: {
//     fontSize: "$md",
//     lineHeight: 1.33,
//     fontWeight: "$bold",
//   },
//   h_xs: {
//     fontSize: "$sm",
//     lineHeight: 1.33,
//     fontWeight: "$bold",
//   },
