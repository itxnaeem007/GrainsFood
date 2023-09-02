import { Box } from "./elements";

export const ColoredBox: React.FC<{ color?: string }> = ({ color }) => {
  return (
    <Box
      css={{
        background: color,
        height: 16,
        width: 3,
        borderRadius: 10,
        mr: "$2",
      }}
    />
  );
};
