import React from "react";
import Marquee from "react-fast-marquee";

type MarqueeProps = {
  children: React.ReactNode;
  style?: object;
  speed?: number;
};

export const SlideMarquee = (props: MarqueeProps) => {
  return <Marquee {...props}>{props.children}</Marquee>;
};
