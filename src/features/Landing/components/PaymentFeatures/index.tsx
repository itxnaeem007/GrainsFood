import { PAYMENTDATA } from "./paymentData";
import { Row, Text } from "@/components/elements";
import { Responsive } from "@/components/elements/Responsive";
import { Payment } from "./components";

export const PaymentFeatures = () => {
  return (
    <Responsive direction={"column"}>
      <Text
        css={{ textAlign: "center", mt: "20px" }}
        variant={"p_2xl"}
        color={"blue"}
        weight={"bold"}
      >
        Discover all of our brands
      </Text>
      <Text
        css={{ textAlign: "center", textTransform: "uppercase" }}
        variant={"p_lg"}
        color={"gray3"}
        weight={"bold"}
      >
        Our Brands
      </Text>
      <Row css={{ width: "100%" }}>
        {PAYMENTDATA.map((feature, index) => (
          <Payment
            description={feature.description}
            index={index}
            title={feature.title}
            img={feature.img ?? ""}
            key={index}
          />
        ))}
      </Row>
    </Responsive>
  );
};
