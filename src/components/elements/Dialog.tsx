import React from "react";
import { styled, CSS } from "@/theme/stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "./Button";
import { overlayStyles } from "./Overlay";
import { contentShow } from "@/theme";
import { CloseFilledIcon } from "../icons";
import { IconButton } from "../elements";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

const StyledContent = styled(DialogPrimitive.Content, {
  display: "flex",
  flexDirection: "column",
  width: "inherit",
  // maxWidth: "$md",
  maxWidth: "90%",
  // maxWidth:"62.8125rem",
  borderRadius: "$xlg",
  padding: "3.3rem 0.5rem",
  //todo need to adjust height
  // maxHeight: "85vh",
  outline: "transparent solid 2px",
  outlineOffset: 2,
  backgroundColor: "$modalBg",
  marginBlockEnd: "$16",
  willChange: "transform",
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  boxShadow: "$lg",
  ".icon": {
    fontSize: "10rem",
    "@sm": {
      fontSize: "12rem",
    },
  },
  "@sm": {
    maxWidth: "35rem",
  },
  "@md": {
    padding: "1.3rem 4rem",
    maxWidth: "40rem",
  },
  "&.verification": {
    padding: "2rem 4rem",
    maxWidth: "35rem",
  },
  "&.confirmation": {
    maxWidth: "30rem",
    button: {
      padding: "0.5rem $8",
    },
  },
  "&.warning": {
    maxWidth: "fit-content",
  },
  "&.face": {
    maxWidth: "min-content ",
  },
  "&.start": {
    padding: "2rem 3rem",
  },
  "&.address-modal": {
    padding: "2rem 3rem",
    maxWidth: "41rem",
  },
  ".law-request": {
    ".lottie-container": {
      width: "34%",
    },
  },
  ".register-merchant": {
    ".lottie-container": {
      width: "60%",
    },
  },
  ".kyc": {
    ".lottie-container": {
      width: "65%",
    },
  },
  ".kyc-register": {
    ".lottie-container": {
      width: "45%",
    },
  },
  ".auth": {
    ".lottie-container": {
      width: "14rem",
    },
  },

  "&:focus": {
    outline: "none",
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: "absolute",
  top: "$2",
  right: "$2",
  fontSize: "$xs",
  $$closeButtonSize: "$sizes$8",
  width: "$$closeButtonSize",
  height: "$$closeButtonSize",
  backgroundColor: "$$closeButtonBg",
  borderRadius: "$md",
  dflex: "center",

  // "&:hover": {
  //   $$closeButtonBg: "rgba(0, 0, 0, 0.06)",
  // },
});

type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>;
type DialogContentProps = DialogContentPrimitiveProps & {
  css?: CSS;
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay>
      <StyledContent {...props} ref={forwardedRef}>
        {children}
        <StyledCloseButton>
          {/* <CloseIcon /> */}
          <IconButton className="menu-close">
            <CloseFilledIcon fontSize={24} aria-hidden="true" />
            <span className="sr-only">Close main menu</span>
          </IconButton>
        </StyledCloseButton>
      </StyledContent>
    </StyledOverlay>
  </DialogPrimitive.Portal>
));

DialogContent.displayName = "DialogContent";

const DialogTitle = styled(DialogPrimitive.Title, {
  flex: "0 1 0%",
  fontSize: "$fontSizes$xl",
  fontWeight: "$semibold",
  color: "$textBlue",
  // paddingInline: "$6",
  // paddingBlock: "$4",
  textAlign: "center",
  // "@sm": {
  //   fontSize: "1.5625rem",
  // },
  // "@md": {
  //   fontSize: "1.875rem",
  // },
});

const DialogBody = styled(DialogPrimitive.Description, {
  flex: "1 1 0%",
  // paddingInline: "$6",
  // paddingBlock: "$2",
  fontSize: "1rem",
  textAlign: "center",
  padding: "0.4rem 0 0 0",
  "@sm": {
    fontSize: "1.25rem",
  },
  "@md": {
    fontSize: "1.5rem",
  },
});

const DialogFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingInline: "$6",
  paddingBlock: "$4",
  maxWidth: "14rem",
  width: "100%",
  margin: "0 auto",
  button: {
    width: "$full",
    minWidth: "max-content",
  },
  "@sm": {
    maxWidth: "22rem",
  },
});

const DialogClose = DialogPrimitive.Close;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogBody,
  DialogFooter,
};

export const ExampleDialog = () => {
  const [open, setIsOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>Open</DialogTrigger> */}
      <Button onPointerDown={() => setIsOpen(true)}>Open Dialog</Button>
      <DialogContent>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogBody>Dialog description</DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button color="gray">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
