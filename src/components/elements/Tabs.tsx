import { styled } from "@/theme/stitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const Tabs = styled(TabsPrimitive.Root, {
  display: "flex",
  width: "100%",
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
  },
});

export const TabsList = styled(TabsPrimitive.List, {
  display: "flex",
  justifyContent: "space-around",
  flexShrink: 0,
  borderBottomWidth: "2px",
  borderColor: "$gray200",

  "&:focus": {
    outline: "none",
    border: "none",
    borderColor: "$gray200",
    boxShadow: "inset 0 0 0 1px $slate8, 0 0 0 1px $slate8",
  },

  variants: {
    size: {
      sm: {
        button: {
          fontSize: "$sm",
          padding: "$1 $4",
        },
      },
      md: {
        button: {
          fontSize: "$md",
          padding: "$2 $4",
        },
      },
      lg: {
        button: {
          fontSize: "$lg",
          padding: "$3 $4",
        },
      },
    },
    variant: {
      default: {
        button: {
          borderColor: "transparent",
          marginBottom: "-2px",
          "&:active": {
            backgroundColor: "$gray200",
          },
          // can be moved to variant color: blue
          '&[data-state="active"]': {
            color: "$blue600",
            borderColor: "currentcolor",
          },
        },
      },
      "soft-rounded": {
        button: {
          width: "fit-content",
          fontWeight: "$normal",
          marginInlineEnd: "$4",
          color: "$textGray2",
          fontSize: 25,
          padding: "$4 0",
          // can be moved to compound variant of soft-rounded + blue
          '&[data-state="active"]': {
            color: "$primary1",
            borderBottom: "2px solid $primary1",
            marginBottom: "-1.5px",
          },
        },
      },
    },
    expand: {
      true: {
        button: {
          flex: "1 1 0%",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  outline: "transparent solid 2px",
  outlineOffset: "2px",
  transitionProperty: "background-color, border-color, color",
  transitionDuration: "200ms",
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: "$4 0",
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px $slate8, 0 0 0 1px $slate8",
  },
});

export const ExampleTab = () => (
  <Tabs defaultValue="0">
    <TabsList>
      <TabsTrigger value="0">Tab 1</TabsTrigger>
      <TabsTrigger value="1">Tab 2</TabsTrigger>
      <TabsTrigger value="2">Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value="0">Content 1</TabsContent>
    <TabsContent value="1">Content 2</TabsContent>
    <TabsContent value="2">Content 3</TabsContent>
  </Tabs>
);
