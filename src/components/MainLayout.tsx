import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styled } from "@/theme";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <BodyLayout
        css={{
          minHeight: "calc(100vh - 70px)",
        }}
      >
        <Outlet />
      </BodyLayout>
      <Footer />
    </>
  );
}

export const BodyLayout = styled("main", {
  // overflow: "hidden",
  // minHeight: "calc(100vh - 100px)",
});
