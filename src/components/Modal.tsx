import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogTitle,
  Flex,
} from "./elements";
import { Success } from "./icons";

export type ModalProps = {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export function Modal({ open, setIsOpen }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <Button onPointerDown={() => setIsOpen(true)}>Open Dialog</Button>
      <DialogContent>
        <Flex justify={"center"}>
          <Success fontSize={"12rem"} />
        </Flex>
        <DialogTitle>Whoops, That's an expired link</DialogTitle>
        <DialogBody>
          Your password has been reset successfully <br />
          Please use your new password to login.
        </DialogBody>
        <DialogBody>
          For security resons, password reset links expire after a little while.
          If you still need to reset your password, you can request a new reset
          email.
        </DialogBody>
        <DialogFooter>
          {/* <DialogClose asChild> */}
          <Button size={"full_w"}>Login</Button>
          {/* </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
