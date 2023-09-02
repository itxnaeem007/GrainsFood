import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { globalStyles } from "@/theme";
import { Box } from "./components/elements";

function App() {
  globalStyles();

  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <Box
          css={{
            svg: {
              w: "100%",
              h: "100%",
            },
          }}
        >
        </Box>
      }
    />
  );
}

export default App;
