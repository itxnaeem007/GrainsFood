// layout
import { Box } from "@/components/elements/Box";
import { Flex } from "@/components/elements/Flex";
// data display
import { Badge } from "@/components/elements/Badge";
import { Tag } from "@/components/elements/Tag";
// form
import { Button } from "@/components/elements/Button";
import { IconButton } from "@/components/elements/IconButton";
import { Input } from "@/components/elements/Input";
import { Slider } from "@/components/elements/Slider";
// others
import { ThemeToggle } from "@/components/ThemeToggle";
import { Spinner } from "@/components/elements/Spinner";
import { BellIcon } from "@chakra-ui/icons";
import { Checkbox } from "@/components/elements/Checkbox";
import { Label } from "@/components/elements/Label";
import { ExampleTab } from "@/components/elements/Tabs";
import { Switch } from "@/components/elements/Switch";
import { RadioGroup, Radio } from "@/components/elements/Radio";
import { ExampleAlertDialog } from "@/components/elements/AlertDialog";
import { ExampleDialog } from "@/components/elements/Dialog";
import { ExamplePopover } from "@/components/elements/Popover";
// import { ExampleTooltip } from "@/components/elements/Tooltip";
import { ExampleDrawer } from "@/components/elements/Drawer";
import { ExampleDropdownMenu } from "@/components/elements/DropdownMenu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/elements/Accordion";
import { styled } from "./theme";
// import { AccordionDropdown, Text } from "./components/elements";

const Reference = () => {
  return (
    <Box css={{ maxWidth: 900, m: "2rem auto" }}>
      <ThemeToggle />

      <Flex direction="column" css={{ mb: 10 }}>
        <Flex>
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
          <Spinner size="xl" />
          <Spinner
            loadingCss={{ $$loadingSize: "80px", $$loadingBorder: "6px" }}
          />
        </Flex>
        <Flex>
          <Button size="xs">Button (xs)</Button>
          <Button size="sm">Button (sm)</Button>
          <Button>button (md)</Button>
          <Button size="lg">button (lg)</Button>
        </Flex>
        <Flex>
          <Button>Button (solid)</Button>
          <Button variant="outline">Button (outline)</Button>
          <Button variant="ghost">Button (ghost)</Button>
          <Button color="primary">Button</Button>
          <Button color="primary" variant="outline">
            Button
            <BellIcon />
          </Button>
          <Button color="primary" variant="ghost">
            <BellIcon />
            Button
          </Button>
        </Flex>

        <Flex>
          <IconButton size="sm">
            <BellIcon />
          </IconButton>
          <IconButton>
            <BellIcon />
          </IconButton>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Input
          placeholder="Placeholder"
          labelLeft="Label Left"
          contentRight={<Spinner size="xs" />}
        />

        <Input
          placeholder="Placeholder"
          labelLeft="Label Left"
          invalid
          variant="outline"
          contentRight={<Spinner size="xs" />}
        />
        <Input
          placeholder="Placeholder"
          contentLeft={<BellIcon />}
          variant="filled"
          contentRight={<Spinner size="xs" />}
        />
        <Input
          placeholder="Placeholder"
          variant="filled"
          invalid
          contentRight={<Spinner size="xs" />}
        />
      </Flex>
      <Flex direction="column" css={{ mt: 16 }}>
        <Flex direction="column">
          <Slider defaultValue={[50]} />
          <Slider defaultValue={[10, 40]} />
        </Flex>

        <Flex align="center">
          <Label wrapper>
            <Checkbox size="sm" />
            small check
          </Label>
          <Label wrapper>
            <Checkbox />
            default
          </Label>
          <Label>
            <Checkbox size="lg" />
            lg check
          </Label>
          <Label>
            <Checkbox defaultChecked />
            checked
          </Label>
        </Flex>
        <Flex align="start">
          <Switch size="sm" />
          <Label wrapper>
            <Switch />
            switch me
          </Label>
          <Switch size="lg" />
        </Flex>

        <Flex align="start">
          <RadioGroup>
            <Radio value="3">Me</Radio>
            <Radio value="4">You</Radio>
          </RadioGroup>
        </Flex>

        <Flex align="center">
          <Badge>default</Badge>
          <Badge color="green">success </Badge>
          <Badge color="green" variant="outline">
            outline
          </Badge>
          <Badge color="green" variant="solid">
            solid
          </Badge>
          <Badge color="red">removed</Badge>
        </Flex>
        <Flex align="start">
          <Tag size="sm">default (sm)</Tag>
          <Tag>default</Tag>
          <Tag size="lg">removed (lg)</Tag>
          <Tag color="green">subtle</Tag>
          <Tag color="green" variant="outline">
            outline
          </Tag>
          <Tag color="green" variant="solid">
            solid
          </Tag>
          <Tag color="green" rounded>
            Plus
          </Tag>
        </Flex>
      </Flex>
      <Box css={{ mt: "$4" }}>
        <ExampleTab />
      </Box>
      <Box css={{ mt: "$4" }}>
        <ExampleDialog />
      </Box>
      <Box css={{ mt: "$4" }}>
        <ExampleDropdownMenu />
      </Box>
      <Box css={{ mt: "$4" }}>
        <ExamplePopover />
      </Box>
      {/* <Box css={{ mt: "$4" }}>
        <ExampleTooltip />
      </Box> */}
      <Box css={{ mt: "$4" }}>
        <ExampleAlertDialog />
      </Box>
      <Box css={{ mt: "$4" }}>
        <ExampleDrawer />
      </Box>
      <Box css={{ mt: "$4" }}>
        <Accordion type="single">
          <AccordionItem value="x">
            <Trigger>ddd</Trigger>
            <AccordionContent>sddd</AccordionContent>
          </AccordionItem>
          <AccordionItem value="y">
            <Trigger>ddd</Trigger>
            <AccordionContent>sddd</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
export default Reference;

const Trigger = styled(AccordionTrigger, {
  background: "$accordion",
  borderRadius: "$md",
  color: "$bodyText",
  mb: "$4",
});
