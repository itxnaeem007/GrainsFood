import { useEffect, useState } from "react";
import { darkTheme } from "@/theme/stitches.config";
import { Box, Text, Switch } from "./elements";

export function ThemeToggle() {
  const [theme, setTheme] = useState("theme-default");

  useEffect(() => {
    document.documentElement.classList.remove("theme-default", darkTheme);
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <Box
      css={{
        position: "relative",
      }}
    >
      <Switch
        defaultChecked
        css={{
          $$switchTrackWidth: "80px",
          $$switchTrackHeight: "30px",
          padding: 4,
        }}
        onClick={() =>
          setTheme(theme === "theme-default" ? darkTheme : "theme-default")
        }
      />
      <Text
        css={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: theme === "theme-default" ? 15 : 45,
          color: "#845AE3",
          fontSize: 12,
          fontWeight: "500",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {theme === "theme-default" ? "Light" : "Dark"}
      </Text>
    </Box>
  );
}
