import { BodyLayout } from "./MainLayout";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function ErrorPage() {
  return (
    <>
      <Navbar />
      <BodyLayout
        css={{
          minHeight: "calc(100vh - 100px)",
        }}
      >
        Opps an error occured
      </BodyLayout>
      <Footer />
    </>
  );
}
