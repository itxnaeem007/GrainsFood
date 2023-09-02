import React from "react";
import { CheckIcon, HamburgerIcon } from "@chakra-ui/icons";
import { styled, css, CSS } from "@/theme/stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { IconButton } from "./IconButton";
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideUpAndFade,
  slideRightAndFade,
} from "@/theme";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: "inherit",
  paddingTop: "$2",
  paddingBottom: "$2",
  backgroundColor: "$menuColor",
  boxShadow: "$sm",
  zIndex: 9999,
  borderRadius: "$md",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  "&.wallet": {
    padding: "$4 0",
    borderRadius: "$2xl-med",
    border: "1px solid #BCBCBC",
  },
  "&.buy-sell": {
    minWidth: "350px",
    padding: "$6 0",
    maxHeight: "530px",
    overflowY: "scroll",
    borderRadius: "$2xl-med",
    border: "1px solid #BCBCBC",
  },
  "&.user-profile": {
    borderRadius: "$2xl-med",
    border: "1px solid #BCBCBC",
    padding: "$4 $5 $6 $5",
    svg: {
      fontSize: "$2xl",
    },
    ".copy-icon": {
      fontSize: "$xl",
    },
  },
  "&.country-code-list": {
    maxHeight: "300px",
    overflowY: "auto",
    maxWidth: "300px",
  },
  "&.region-list": {
    borderRadius: "$space$2",
    border: "1px solid #BCBCBC",
    mt: "$2",
    maxHeight: "300px",
    overflowY: "auto",
    maxWidth: "300px",
    ":hover": {
      background: "$selectHover",
      svg: {
        path: {
          stroke: "$priceText",
        },
      },
    },

    ".options-wrapper": {
      ".img-wrapper": {
        padding: "4px",
        width: "max-content",
        marginRight: "var(--space-3)",
        img: {
          borderRadius: "50%",
          width: "24px",
          height: "24px",
        },
      },
    },

    svg: {
      fontSize: "$2xl",
    },
  },
});

type DropdownMenuContentPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS;
  showArrow?: boolean;
};

const DropdownMenuPrimitivePortal = styled(DropdownMenuPrimitive.Portal, {
  width: "100%",
});

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DropdownMenuContentProps
>((props, forwardedRef) => (
  <DropdownMenuPrimitivePortal>
    <StyledContent {...props} ref={forwardedRef} />
  </DropdownMenuPrimitivePortal>
));

DropdownMenuContent.displayName = "DropdownMenuContent";

const baseItemCss = css({
  display: "flex",
  alignItems: "center",
  cursor: "default",
  userSelect: "none",
  whiteSpace: "nowrap",
  paddingBlock: "$1-5",
  paddingInline: "$3",
});

const itemCss = css(baseItemCss, {
  position: "relative",

  "&.user-profile": {
    padding: "$3 0",
    "&:first-child": {
      marginTop: "-0.75rem",
    },
    "&:last-child": {
      marginBottom: "-0.75rem",
    },
    ":hover": {
      svg: {
        path: {
          stroke: "$priceText",
        },
      },
    },
    ".content": {
      "&:hover": {
        cursor: "pointer",
        color: "$priceText",
      },
    },
  },
  "&.wallet": {
    padding: "$4 $5",
    "&:first-child": {
      marginTop: "-1rem",
      borderTopLeftRadius: "$2xl-med",
      borderTopRightRadius: "$2xl-med",
    },
    "&:last-child": {
      marginBottom: "-1rem",
      borderBottomLeftRadius: "$2xl-med",
      borderBottomRightRadius: "$2xl-med",
    },
  },
  "&.buy-sell": {
    padding: "$6 $7",
    "&:first-child": {
      marginTop: "-1.5rem",
      borderTopLeftRadius: "$2xl-med",
      borderTopRightRadius: "$2xl-med",
    },
    "&:last-child": {
      marginBottom: "-1.5rem",
      borderBottomLeftRadius: "$2xl-med",
      borderBottomRightRadius: "$2xl-med",
    },
  },
  "&[data-highlighted]": {
    backgroundColor: "$gray200",
    outline: "none",
  },

  "&[data-disabled]": {
    color: "$slate9",
  },
});

const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, baseItemCss, {
  color: "$blue500",
});
const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  width: "100%",
  backgroundColor: "$headerBorder",
});

// checkbox item in dropdown
const StyledDropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem,
  itemCss
);

type DialogMenuCheckboxItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & {
  css?: CSS;
};

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: "absolute", left: "$1" }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuCheckboxItem>
));

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

// radio elements in dropdown
const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {});
const StyledDropdownMenuRadioItem = styled(
  DropdownMenuPrimitive.RadioItem,
  itemCss
);

type DialogMenuRadioItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & {
  css?: CSS;
};

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: "absolute", left: "$1" }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Flex
          css={{
            width: "$3",
            height: "$3",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            css={{
              width: "$1",
              height: "$1",
              backgroundColor: "currentColor",
              borderRadius: "$round",
            }}
          />
        </Flex>
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuRadioItem>
));

DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
};

export const ExampleDropdownMenu = () => {
  const [bookmarksChecked] = React.useState(true);
  const [urlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton aria-label="Customise options">
          <HamburgerIcon />
        </IconButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        <DropdownMenuItem>
          New Tab <RightSlot>⌘+T</RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window <RightSlot>⌘+N</RightSlot>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          New Private Window <RightSlot>⇧+⌘+N</RightSlot>
        </DropdownMenuItem>
        {/* <DropdownMenuPrimitive.Sub>
          <DropdownMenuSubTrigger>
            More Tools
            <RightSlot>
              <ChevronRightIcon />
            </RightSlot>
          </DropdownMenuSubTrigger>
          <DropdownMenuPrimitive.Portal>
            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
              <DropdownMenuItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Sub> */}
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={bookmarksChecked}
          // onCheckedChange={setBookmarksChecked}
        >
          Show Bookmarks <RightSlot>⌘+B</RightSlot>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={urlsChecked}
          // onCheckedChange={setUrlsChecked}
        >
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuRadioItem value="pedro">
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">Colm Tuite</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        {/* <DropdownMenuArrow /> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: "$blue500",
  "[data-disabled] &": { color: "$blue300" },
});
