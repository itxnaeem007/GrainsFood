import { Flex, Text } from "@/components/elements";
import { contentShow, slideFromLeft, slideFromRight, slideUpAndFade, styled } from "@/theme";

export const AnimationContentShow = styled(Flex, {
    position: "relative",
    animationName: `${contentShow}`,
    animationDuration: "1s",
    animationFillMode: "both",
    animationTimingFunction: "ease-in-out",
    animationDelay: "0s",
    animationIterationCount: 1,
  });
  
  export const AnimationFromLeft = styled(Flex, {
    position: "relative",
    animationName: `${slideFromLeft}`,
    animationDuration: "1s",
    animationFillMode: "both",
    animationTimingFunction: "ease-in-out",
    animationDelay: "0s",
    animationIterationCount: 1,
  });
  
  export const AnimationFromRight = styled(Flex, {
    position: "relative",
    animationName: `${slideFromRight}`,
    animationDuration: "1s",
    animationFillMode: "both",
    animationTimingFunction: "ease-in-out",
    animationDelay: "0s",
    animationIterationCount: 1,
  });
  
  export const AnimationSlideUp = styled(Flex, {
    position: "relative",
    animationName: `${slideUpAndFade}`,
    animationDuration: "1s",
    animationFillMode: "both",
    animationTimingFunction: "ease-in-out",
    animationDelay: "0s",
    animationIterationCount: 1,
  });

  export const InnerImage = styled("img", {
    width: "100%",
    maxHeight : '400px',
    height: "100%",
    cursor: "pointer",
    zIndex : 1,
    overflow: "hidden",
    webkitTransition: 'all .3s',
    transition: 'all .3s',
    "&:hover" : {
      webkitTransform: 'scale(1.1)',
      transform: 'scale(1.1)',
    },
  });

  export const StyledText = styled(Text, {
    position : 'absolute',
    left : '0px',
    right : '0px',
    margin : 'auto',
    top: '40%',
    bottom: 0,
    height: '175px',
    color : 'white',
    textShadow: "2px 2px 4px #333",
    zIndex : 11,
    "@md" : {
      top: 0,
    }
  });


  export const SecondBanner = styled("div", {
    padding: "$2 0 $12 0",
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    background: 'url("/images/new/istockphoto.jpg") no-repeat',
    backgroundSize: "cover",
    minHeight: "70vh",
    backgroundPosition: "bottom 50% left 40%",
    backgroundAttachment: "fixed",
  });

    export const ThirdBanner = styled("div", {
    padding: "$2 0 $12 0",
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    background: 'url("/images/new/arabic4.jpg") no-repeat',
    backgroundSize: "cover",
    minHeight: "60vh",
    backgroundPosition: "bottom 50% left 40%",
    backgroundAttachment: "fixed",
  });
  
  export const ForthBanner = styled("div", {
    padding: "$2 0 $12 0",
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    background: 'url("/images/new/Warehouse.jpg") no-repeat',
    backgroundSize: "cover",
    minHeight: "60vh",
    backgroundPosition: "bottom 50% left 40%",
    backgroundAttachment: "fixed",
    mb : '100px'
  });